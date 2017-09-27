module Main exposing (..)

import Types exposing (..)
import StyleSheet exposing (styleSheet, Style(..), Variation(..))
import Worlds
import Time
import Graph.Extra as GraphEx
import Html exposing (Html)
import Html.Attributes as HtmlAttr
import Html.Events as HtmlEvents
import Color exposing (rgb)
import Graph
import IntDict
import Maybe.Extra as MaybeEx
import AnimationFrame as Ani
import Tuple3
import Ease
import Color.Convert exposing (colorToHex, hexToColor)
import Monocle.Lens as Lens
import OpenSolid.Geometry.Types as Geo exposing (Vector3d)
import OpenSolid.Vector3d as Vec3
import Element as El
import Element.Attributes as Attr
import Element.Events as Events
import Element.Input as Input
import Style
import Style.Color as Color
import AFrame.Primitives.Attributes as AfAttr exposing (rotation, position, scale, radius, color, width, height, depth, opacity)
import Style.Border as Border
import AFrame exposing (scene, entity)
import AFrame.Primitives exposing (sphere, box, cylinder, plane, sky)
import AFrame.Primitives.Camera exposing (camera)
import AFrame.Primitives.Light as Light exposing (light)
import AFrame.Primitives.Cursor as Cursor exposing (..)


model : Model
model =
    { time = 0
    , rootId = 0
    , graph = Worlds.graph0
    , editing = Just (Edge 0 1)
    , dropdownState = Input.autocomplete Nothing (EdgeFrom 0 0 0)
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        TimeUpdate diff ->
            { model | time = model.time + diff } ! []

        -- |> Debug.log "model"
        Click id ->
            { model | graph = toggleAnimation id model.graph }
                ! []
                |> Debug.log ("Click" ++ toString id)

        Edit editing ->
            { model | editing = Just editing } ! []

        Delete item ->
            let
                graphUpdater =
                    case item of
                        Node id ->
                            Graph.remove id

                        Edge from to ->
                            identity

                --GraphEx.removeEdge from to
            in
                { model | graph = graphUpdater model.graph } ! []

        NewNode ->
            let
                entity =
                    { color = Color.charcoal, opacity = 0.5, shape = Box }

                nextId =
                    Graph.nodeIdRange model.graph
                        |> Maybe.map (Tuple.second >> ((+) 1))
                        |> Maybe.withDefault 0

                node =
                    { id = nextId, label = entity }
            in
                { model
                    | graph = GraphEx.insertNode node model.graph
                    , editing = Just (Node nextId)
                }
                    ! []

        ChangeColor nodeId hex ->
            let
                nodeUpdater =
                    hexToColor hex
                        |> Maybe.map (nodeLensColor.set)
                        |> Maybe.withDefault identity
            in
                { model | graph = GraphEx.updateNode nodeId nodeUpdater model.graph } ! []

        ChangeOpacity id newOpac ->
            let
                nodeUpdater =
                    nodeLensOpacity.set newOpac
            in
                { model | graph = GraphEx.updateNode id nodeUpdater model.graph } ! []

        ChangeTransformation transformAttr xyorz from to newVal ->
            let
                modifier =
                    (vec3Set xyorz) newVal

                lens =
                    transformUtils transformAttr |> .edgeLens

                edgeUpdater =
                    Lens.modify lens modifier
            in
                { model | graph = GraphEx.updateEdge from to edgeUpdater model.graph } ! []

        EdgeFrom from to newFrom dropdownMsg ->
            let
                newDropdownState =
                    Input.updateSelection dropdownMsg model.dropdownState

                newGraph =
                    GraphEx.getEdge from to model.graph
                        |> Maybe.map (\e -> GraphEx.updateEdgeFrom newFrom e model.graph)
                        |> Maybe.withDefault model.graph
            in
                { model | dropdownState = newDropdownState, graph = newGraph } ! []

        _ ->
            model ! []


toggleAnimation : Id -> Graph -> Graph
toggleAnimation id graph =
    case List.head (GraphEx.getEdgesTo id graph) of
        Nothing ->
            graph

        Just edge ->
            let
                updater e =
                    let
                        oldLabel =
                            e.label
                    in
                        { e
                            | label =
                                { oldLabel | isAnimating = not e.label.isAnimating }
                        }
            in
                GraphEx.updateEdge edge.from edge.to updater graph


subscriptions model =
    -- Ani.diffs TimeUpdate
    Sub.none



-- VIEW


type alias Element variation =
    El.Element Style variation Msg


view : Model -> Html Msg
view model =
    El.viewport styleSheet
        <| El.column Main
            [ Attr.height Attr.fill ]
            [ navbar model
            , El.row None
                [ Attr.width Attr.fill
                , Attr.height Attr.fill
                ]
                [ viewSelectionSidebar model
                , viewDetailSidebar model
                , viewSceneContainer model
                ]
            ]


navbar model =
    let
        navlink str =
            El.el NavLink [] (El.text str)
    in
        El.row Nav
            [ Attr.spread, Attr.paddingXY 20 20, Attr.verticalCenter ]
            [ El.el Header [] (El.text "Graft3D")
            , El.navigation None
                [ Attr.padding 0, Attr.spacing 10, Attr.verticalCenter ]
                { name = "Graft 3D"
                , options =
                    [ navlink "Examples"
                    , navlink "Blog"
                    , navlink "Github"
                    , navlink "Graft"
                    ]
                }
            ]


viewDetailSidebar model =
    let
        showDetails getGraphData viewDetail =
            El.sidebar Sidebar
                [ Attr.height <| Attr.percent 100
                , Attr.minWidth <| Attr.px 200
                , Attr.padding 20
                ]
                [ El.whenJust (getGraphData model.graph) viewDetail ]
    in
        case model.editing of
            Nothing ->
                El.empty

            Just (Types.Node id) ->
                showDetails (GraphEx.getNode id) (viewNodeDetail model)

            Just (Types.Edge from to) ->
                showDetails (GraphEx.getEdge from to) (viewEdgeDetail model)


viewNodeDetail : Model -> Node -> Element v
viewNodeDetail model node =
    let
        colorPicker =
            El.html
                <| Html.input
                    [ HtmlAttr.type_ "color"
                    , HtmlAttr.value <| colorToHex node.label.color
                    , HtmlEvents.onInput (ChangeColor node.id)
                    , HtmlAttr.style [ ( "width", "100%" ) ]
                    ]
                    []

        createMsg : (Id -> Float -> Msg) -> String -> Msg
        createMsg msgConstructor =
            String.toFloat
                >> Result.map (msgConstructor node.id)
                >> Result.withDefault NoOp

        opacitySlider =
            El.html
                <| Html.input
                    [ HtmlAttr.type_ "range"
                    , HtmlAttr.value <| toString node.label.opacity
                    , HtmlAttr.min "0"
                    , HtmlAttr.max "1"
                    , HtmlAttr.step "0.01"
                    , HtmlEvents.onInput (createMsg ChangeOpacity)
                    , HtmlAttr.style [ ( "width", "100%" ) ]
                    ]
                    []
    in
        El.column None
            [ Attr.spacing 20 ]
            [ El.column None
                []
                [ El.row None [] [ El.text "Color: " ]
                , colorPicker
                ]
            , El.column None
                []
                [ El.row None [] [ El.text "Opacity: " ]
                , opacitySlider
                ]
            , El.button DeleteButton
                [ Attr.height <| Attr.px 50
                , Attr.width <| Attr.px 100
                , Events.onClick <| Delete (Node node.id)
                ]
                (El.text "Delete")
            ]



-- viewNodeSelector


viewEdgeDetail model edge =
    let
        sliderTriplet label transformAttribute =
            El.column None
                []
                [ El.text label
                , viewTransformationSliders model edge transformAttribute
                ]

        dropdown labelStr selectdVal msgConstructor =
            Input.select None
                []
                { max = 100
                , label = Input.labelLeft (El.text labelStr)
                , with =
                    Input.dropMenu (Just 0) (EdgeFrom 0 0 0)
                , menu =
                    Input.menu None
                        []
                        [ Input.choice 32 (El.text "Goo")
                        , Input.choice 12 (El.text "blah")
                        ]
                    --(List.map (Input.choice None << El.text << toString)
                    --    (Graph.nodeIds model.graph)
                    --)
                , options = []
                }
    in
        El.column None
            [ Attr.spacing 20 ]
            [ El.header Header
                []
                (El.text <| toString edge.from ++ " ----> " ++ toString edge.to)
            , dropdown "Every" edge.from (\_ -> NoOp)
            , dropdown "generates a" edge.to (\_ -> NoOp)
            , El.hairline Hairline
            , sliderTriplet "Move along axis: " Translation
            , sliderTriplet "Resize along axis: " Scale
            , sliderTriplet "Rotate around axis: " Rotation
            ]


viewTransformationSliders model edge transformAttribute =
    let
        utils =
            transformUtils transformAttribute

        createMsg : XYorZ -> String -> Msg
        createMsg xyorz =
            String.toFloat
                >> Result.map (ChangeTransformation transformAttribute xyorz edge.from edge.to)
                >> Result.withDefault NoOp

        currentValue vec3Get =
            utils.edgeLens.get edge |> vec3Get

        slider : (String -> Msg) -> (Vector3d -> Float) -> Element v
        slider msgPartial vec3Get =
            El.html
                <| Html.input
                    [ HtmlAttr.type_ "range"
                    , HtmlAttr.min (toString utils.min)
                    , HtmlAttr.max (toString utils.max)
                    , HtmlAttr.step (toString utils.step)
                    , HtmlEvents.onInput msgPartial
                    , HtmlAttr.value <| toString <| currentValue vec3Get
                    ]
                    []

        labeledSlider labelStr msgPartial vec3Get =
            El.row None
                [ Attr.padding 10 ]
                [ El.text labelStr
                , slider msgPartial vec3Get
                , El.text <| toString <| currentValue vec3Get
                ]
    in
        El.column None
            []
            [ labeledSlider "X: " (createMsg X) Vec3.xComponent
            , labeledSlider "Y: " (createMsg Y) Vec3.yComponent
            , labeledSlider "Z: " (createMsg Z) Vec3.zComponent
            ]


viewSelectionSidebar model =
    El.sidebar Sidebar
        [ Attr.height <| Attr.percent 100
          -- , Attr.paddingTop 20
        , Attr.paddingXY 6 20
        , Attr.spacing 6
        ]
        [ El.row None
            [ Attr.spacing 10 ]
            [ viewBadgeSelectors model Graph.nodes viewNodeSelector
            , viewBadgeSelectors model Graph.edges viewEdgeSelector
            ]
        ]


viewBadgeSelectors model getItems viewItems =
    let
        selectors =
            List.map (viewItems model) (getItems model.graph)

        button =
            El.el None
                [ Attr.padding 10 ]
                (El.button NewButton
                    [ Events.onClick NewNode
                    , Attr.width <| Attr.px 40
                    , Attr.height <| Attr.px 40
                    ]
                    (El.text "+")
                )
    in
        El.column None
            [ Attr.padding 0, Attr.spacing 0 ]
            (selectors ++ [ button ])


viewNodeSelector model node =
    El.el SelectorItem
        [ Events.onClick <| Edit (Node node.id)
        , Attr.vary Selected <| model.editing == Just (Node node.id)
        , Attr.padding 10
        ]
        (viewNodeBadge model node 40 [])


viewNodeBadge model node size attrs =
    El.el Badge
        (attrs
            ++ [ Attr.inlineStyle [ ( "backgroundColor", colorToHex node.label.color ) ]
               , Attr.padding 4
               , Attr.width <| Attr.px size
               , Attr.height <| Attr.px size
               ]
        )
        (El.html
            (Html.span
                [ HtmlAttr.style
                    [ ( "color", colorToHex Color.white )
                      -- , ("backgroundColor", colorToHex <| Color.black)
                      -- , ("opacity", "0.5")
                    ]
                ]
                [ Html.text (toString node.id) ]
            )
        )


viewEdgeSelector : Model -> Types.Edge -> Element Variation
viewEdgeSelector model edge =
    El.row SelectorItem
        [ Attr.padding 10
        , Events.onClick <| Edit (Edge edge.from edge.to)
        , Attr.vary Selected <| model.editing == Just (Edge edge.from edge.to)
        ]
        [ viewEdgeBadge model edge ]


viewEdgeBadge model edge =
    let
        getNode =
            flip GraphEx.getNode model.graph
    in
        case ( getNode edge.from, getNode edge.to ) of
            ( Just from, Just to ) ->
                viewNodeBadge model from 45 []
                    |> El.within
                        [ viewNodeBadge model
                            to
                            20
                            [ Attr.alignRight
                            , Attr.alignBottom
                            ]
                        ]

            _ ->
                El.empty


viewSceneContainer : Model -> Element v
viewSceneContainer model =
    El.row None
        [ Attr.width (Attr.fill)
        , Attr.height (Attr.fill)
        ]
        [ El.html (viewScene model) ]


viewScene : Model -> Html Msg
viewScene model =
    let
        rootEntityView =
            Graph.get model.rootId model.graph
                |> Maybe.map (viewEntity model [])
                |> Maybe.map (\e -> box [ scale 0.05 0.05 0.05 ] [ e ])
    in
        scene [ HtmlAttr.attribute "embedded" "true" ]
            (MaybeEx.toList rootEntityView
                ++ [ sky [ color (Color.rgb 200 150 220) ] []
                   , light
                        [ Light.type_ Light.Ambient
                        , position 20 100 0
                        ]
                        []
                   , light
                        [ Light.type_ Light.Directional
                        , position 200 200 200
                        ]
                        []
                   , camera []
                        --position 0 10 0]
                        [-- cursor
                         --     [ Cursor.fuse True, Cursor.timeout 1 ]
                         --     [ sphere [ radius 0.00 ] [] ]
                        ]
                   ]
            )


viewEntity : Model -> List Id -> NodeContext -> Html Msg
viewEntity model ancestors nodeCtx =
    let
        entity =
            nodeCtx.node.label

        t =
            List.head ancestors
                |> Maybe.andThen
                    (\parentId ->
                        GraphEx.getEdge parentId nodeCtx.node.id model.graph
                            |> Maybe.map .label
                            |> Maybe.map
                                (\at ->
                                    at.data
                                        |> if at.isAnimating then
                                            at.animate model.time
                                           else
                                            identity
                                )
                    )
                |> Maybe.withDefault emptyTransformation

        children : List NodeContext
        children =
            IntDict.keys nodeCtx.outgoing
                |> List.map (flip Graph.get model.graph)
                |> MaybeEx.values

        viewChild =
            if List.length ancestors < 10 then
                viewEntity model (nodeCtx.node.id :: ancestors)
            else
                \_ -> box [ width 0, height 0 ] []

        lamp yTranslation =
            light
                [ position 0 yTranslation 0
                , Light.type_ Light.Point
                , color entity.color
                , Light.intensity 0.3
                ]
                []
    in
        box
            [ uncurry3 position (Vec3.components t.translation)
            , uncurry3 scale (Vec3.components t.scale)
            , uncurry3 rotation (Vec3.components t.rotation)
            , color entity.color
            , opacity entity.opacity
              -- , AfAttr.metalness 1
              -- , AfAttr.roughness 1
              -- , AfAttr.shader "flat"
            , height 1
            , width 1
            , depth 1
            , HtmlEvents.onClick (Click nodeCtx.node.id)
            ]
            (List.map viewChild children
             -- ++ [ lamp 0.5, lamp -0.5 ]
            )


main =
    Html.program { init = model ! [], view = view, update = update, subscriptions = subscriptions }


emptyTransformation =
    { translation = vector3dZero
    , scale = Geo.Vector3d ( 1, 1, 1 )
    , rotation = vector3dZero
    }


uncurry3 : (a -> b -> c -> d) -> ( a, b, c ) -> d
uncurry3 func ( x, y, z ) =
    func x y z


vector3dZero =
    Geo.Vector3d ( 0, 0, 0 )
