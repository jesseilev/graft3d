module View exposing (root)

import Types exposing (..)
import MyStyles exposing (Style(..), Variation(..))
import Graph.Extra as GraphEx
import Html exposing (Html)
import Html.Attributes as HtmlAttr
import Html.Events as HtmlEvents
import Color exposing (rgb)
import Graph
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
import AFrame.Primitives as Primitives exposing (sphere, box, cylinder, plane, sky)
import AFrame.Primitives.Camera exposing (camera)
import AFrame.Primitives.Light as Light exposing (light)
import AFrame.Primitives.Cursor as Cursor exposing (..)
import Maybe.Extra as MaybeEx
import List.Extra as ListEx
import Array
import Color.Convert exposing (colorToHex, hexToColor, colorToCssRgba)
import IntDict
import Dict


type alias Element =
    El.Element Style Variation Msg


root : Model -> Html Msg
root model =
    let
        sidebar =
            El.column Sidebar
                [ Attr.paddingXY 0 0 ]
                [ newProject
                , El.hairline Hairline
                , El.row None
                    []
                    [ viewSelectionSidebar model
                    , viewDetailSidebar model
                    ]
                ]

        childViews =
            viewSceneContainer model
                :: ([ sidebar ] |> unless model.device.phone [ El.empty ])
                |> List.reverse

        newProject =
            El.row None
                [ Attr.paddingXY 10 4, Attr.spacing 4 ]
                [ newProjectButton model, examplesButton model ]

        navbar =
            case ( model.device.phone, model.device.portrait ) of
                ( False, _ ) ->
                    viewNavbar model

                ( True, True ) ->
                    viewNavbarMobile model

                ( True, False ) ->
                    El.empty
    in
        El.viewport MyStyles.stylesheet
            <| El.column Main
                [ Attr.height
                    <| (Attr.fill |> unless model.vrMode (Attr.px 500))
                , Events.onClick
                    <| if model.focusedUi /= NoElem then
                        ShowOrHideUi Hide
                       else
                        NoOp
                ]
                [ navbar
                , El.row None
                    [ Attr.width Attr.fill
                    , Attr.height Attr.fill
                    ]
                    childViews
                ]


viewNavbar : Model -> Element
viewNavbar model =
    let
        navlink text href attrs =
            El.el NavLink
                (attrs)
                (El.newTab href
                    <| El.el NavLink [ Attr.paddingXY 10 20 ] (El.text text)
                )

        options =
            [ navlink "Graft2D" "https://jesseilev.github.io/graft" []
            , navlink "Instagram" "https://instagram.com/graft.ink" []
            , navlink "Github" "https://github.com/jesseilev/graft3d" []
            ]
    in
        El.row Nav
            [ Attr.spread
            , Attr.paddingXY 20 0
            , Attr.verticalCenter
            , Attr.spacing 10
            ]
            [ El.el Header [ Attr.vary Title True ] (El.text "Graft")
            , El.navigation None
                [ Attr.padding 0, Attr.spacing 10, Attr.verticalCenter ]
                { name = "Links"
                , options = options
                }
            ]


viewNavbarMobile : Model -> Element
viewNavbarMobile model =
    El.row Nav
        [ if (not model.device.phone) then
            Attr.spread
          else
            Attr.id ""
        , Attr.paddingXY 10 0
        , Attr.verticalCenter
        , Attr.spacing 20
        ]
        [ El.el Header [ Attr.vary Title True ] (El.text "Graft")
        , El.navigation None
            [ Attr.padding 0, Attr.spacing 0, Attr.verticalCenter ]
            { name = "New Project Menu"
            , options =
                [ newProjectButton model
                , examplesButton model
                ]
            }
        ]


newProjectButton model =
    let
        style =
            Button |> unless model.device.phone NavLink

        paddingX =
            10 |> unless model.device.phone 4

        button =
            El.el style
                [ Attr.paddingXY paddingX 10
                , Attr.verticalCenter
                , Events.onClick (NewProject |> unless model.device.phone NoOp)
                ]
                (El.text "New")

        drop =
            dropdown model
                { viewHead = button
                , uiElement = NewProjectButton
                , options = [ () ]
                , viewOption =
                    \_ -> notification
                , onClick = \_ -> NoOp
                , orientation = Vertical
                }

        notification =
            El.column None
                [ Attr.alignLeft
                , Attr.padding 10
                , Attr.spacing 6
                ]
                [ El.el Header [] (El.text "Not Available for Mobile")
                , El.hairline Hairline
                , El.text "To create your own,"
                , El.text "visit on a computer or tablet"
                ]
    in
        button |> unless model.device.phone drop


examplesButton model =
    let
        style =
            Button |> unless model.device.phone NavLink

        viewHeadShell =
            El.el style
                [ Attr.padding 10, Attr.center ]
    in
        dropdown model
            { viewHead =
                viewHeadShell (El.text "Examples")
            , uiElement = ExamplesMenu
            , options = model.examples
            , viewOption =
                \( title, _ ) ->
                    El.el None
                        [ Attr.padding 10
                        , Attr.alignLeft
                          --, if model.device.phone then
                          --    Attr.alignRight
                          --  else
                          --    Attr.alignLeft
                        ]
                        <| El.text title
            , onClick = \( title, _ ) -> Load title
            , orientation = Vertical
            }


viewDetailSidebar : Model -> Element
viewDetailSidebar model =
    let
        sidebar =
            El.sidebar Sidebar
                [ Attr.width <| Attr.px 270
                  --Attr.minWidth <| Attr.px 270
                  --, Attr.height <| Attr.percent 100
                ]

        showDetails getGraphData viewDetailContent =
            sidebar [ El.whenJust (getGraphData model.graph) viewDetailContent ]
    in
        case model.editing of
            Nothing ->
                El.empty

            Just (Types.Node id) ->
                showDetails (GraphEx.getNode id) (viewNodeDetail model)

            Just (Types.Edge from to) ->
                showDetails (GraphEx.getEdge from to) (viewEdgeDetail model)

            Just GeneralSettings ->
                sidebar [ viewGeneralSettingsDetail model ]


viewNodeDetail : Model -> Node -> Element
viewNodeDetail model node =
    let
        inputWithLabel str input =
            El.column None
                []
                [ El.row None [ Attr.paddingBottom 5 ] [ El.text str ]
                , input
                ]

        colorPicker =
            El.html
                <| Html.input
                    [ HtmlAttr.type_ "color"
                    , HtmlAttr.value <| colorToHex node.label.color
                    , HtmlEvents.onInput (ChangeColor node.id)
                    , HtmlAttr.style MyStyles.colorPicker
                    ]
                    []

        shapePicker =
            dropdown model
                { viewHead =
                    --El.el SelectorItem
                    --    [ Attr.padding 10
                    --    , Attr.vary Selected (model.focusedUi == EditNodeShapeMenu)
                    --    ]
                    (El.el Button
                        [ Attr.padding 10 ]
                        (El.text <| toString node.label.shape)
                    )
                , uiElement = EditNodeShapeMenu
                , options =
                    [ Box, Sphere, Cylinder ]
                    --, Cone, Circle, Ring ]
                , viewOption =
                    \shape -> El.el None [ Attr.padding 10 ] <| El.text (toString shape)
                , onClick = ChangeShape node.id
                , orientation = Horizontal
                }

        createMsg : (String -> Result err a) -> (Id -> a -> Msg) -> String -> Msg
        createMsg convertString msgConstructor =
            convertString
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
                    , HtmlEvents.onInput (createMsg String.toFloat ChangeOpacity)
                    , HtmlAttr.style
                        <| MyStyles.slider
                        ++ (MyStyles.opacitySlider node.label.color)
                    ]
                    []
    in
        El.column None
            [ Attr.spacing 20, Attr.padding 20 ]
            [ inputWithLabel "Color:" colorPicker
            , inputWithLabel "Opacity:" opacitySlider
            , inputWithLabel "Shape:" shapePicker
            , El.hairline Hairline
            , El.button Button
                [ Attr.height <| Attr.px 50
                , Attr.width <| Attr.px 100
                , Events.onClick <| Delete (Node node.id)
                , hideUnless (node.id /= model.rootId)
                , Attr.vary DeleteButton True
                ]
                (El.text "Delete")
            ]


viewEdgeDetail : Model -> Edge -> Element
viewEdgeDetail model edge =
    let
        sliderTriplet label1 label2 transformAttribute =
            El.column None
                [ Attr.spacing 10 ]
                [ El.row None
                    [ Attr.spacing 5, Attr.verticalCenter ]
                    [ El.el None
                        []
                        (El.text label1)
                    , El.whenJust fromToNodes (\( _, to ) -> viewNodeBadge model to 25 [])
                    , El.text label2
                    ]
                , viewTransformationSliders model edge transformAttribute
                ]

        fromToNodes =
            case ( Graph.get edge.from model.graph, Graph.get edge.to model.graph ) of
                ( Just from, Just to ) ->
                    Just ( from.node, to.node )

                _ ->
                    Nothing

        dropdownChoice node =
            Html.option [ HtmlAttr.value <| toString node.id ]
                [ El.toHtml MyStyles.stylesheet <| viewNodeBadge model node 20 [] ]

        headerWithDropdown =
            El.column None
                []
                [ El.text "Relationship:"
                , dropdown model
                    { viewHead =
                        (MaybeEx.unwrap El.empty description fromToNodes)
                    , uiElement = EditEdgeMenu
                    , options = GraphEx.availableEdges model.graph
                    , viewOption =
                        \( from, to ) ->
                            El.column DropdownItem
                                [ Attr.center ]
                                [ El.el None [ Attr.paddingBottom 4 ] (El.text "Change to")
                                , viewEdgeBadge model (Graph.Edge from to emptyTransformation)
                                ]
                    , onClick =
                        \( from, to ) -> EdgeFromTo edge.from edge.to from to
                    , orientation = Horizontal
                    }
                ]

        description ( from, to ) =
            El.el Button
                []
                <| El.row None
                    [ Attr.spacing 8
                    , Attr.alignLeft
                    , Attr.alignBottom
                    , Attr.paddingXY 10 10
                    ]
                    [ El.text "Each"
                    , viewNodeBadge model from 25 []
                    , El.text "spawns a new"
                    , viewNodeBadge model to 25 []
                    ]
    in
        El.column None
            [ Attr.paddingXY 20 6
            , Attr.spacing 20
            , Attr.paddingTop 20
            ]
            [ headerWithDropdown
            , El.hairline Hairline
            , sliderTriplet "Move" "along axis:" Translation
            , El.hairline Hairline
            , sliderTriplet "Resize" "along axis:" Scale
            , El.hairline Hairline
            , sliderTriplet "Rotate" "around axis:" Rotation
            , El.hairline Hairline
            , El.button Button
                [ Attr.height <| Attr.px 50
                , Attr.width <| Attr.px 100
                , Events.onClick <| Delete (Edge edge.from edge.to)
                , Attr.vary DeleteButton True
                ]
                (El.text "Delete")
            ]


viewGeneralSettingsDetail model =
    let
        inputWithLabel str input =
            El.column None
                []
                [ El.row None [ Attr.paddingBottom 5 ] [ El.text str ]
                , input
                ]

        colorPicker =
            El.html
                <| Html.input
                    [ HtmlAttr.type_ "color"
                    , HtmlAttr.value <| colorToHex model.backgroundColor
                    , HtmlEvents.onInput ChangeBackgroundColor
                    , HtmlAttr.style MyStyles.colorPicker
                    ]
                    []

        rootNode =
            Graph.get model.rootId model.graph
                |> Maybe.map .node

        rootMenu =
            dropdown model
                { viewHead =
                    El.whenJust rootNode <| \rn -> viewNodeBadge model rn 40 []
                , uiElement = EditRootMenu
                , options = Graph.nodes model.graph
                , viewOption =
                    \n ->
                        El.column None
                            [ Attr.spacing 5, Attr.center ]
                            [ El.text "Change to"
                            , viewNodeBadge model n 40 []
                            ]
                , onClick = ChangeRootId << .id
                , orientation = Horizontal
                }
    in
        El.column None
            [ Attr.padding 20, Attr.spacing 20 ]
            [ inputWithLabel "Background Color:" colorPicker
            , inputWithLabel "First Thing:" rootMenu
            ]


msgFromString : (String -> Result err a) -> (a -> Msg) -> String -> Msg
msgFromString convertString constructMsg str =
    convertString str
        |> Result.map constructMsg
        |> Result.withDefault NoOp


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

        slider : (String -> Msg) -> (Vector3d -> Float) -> Element
        slider msgPartial vec3Get =
            El.html
                <| Html.input
                    [ HtmlAttr.type_ "range"
                    , HtmlAttr.min (toString utils.min)
                    , HtmlAttr.max (toString utils.max)
                    , HtmlAttr.step (toString utils.step)
                    , HtmlEvents.onInput msgPartial
                    , HtmlAttr.value <| toString <| currentValue vec3Get
                    , HtmlAttr.style
                        [ ( "margin-left", "6x" )
                        , ( "margin-right", "6x" )
                        , ( "-webkit-appearance", "none" )
                        , ( "-webkit-slider-thumb", "none" )
                          --, ( "border", "1px solid lightGrey" )
                        , ( "height", "2px" )
                        , ( "width", "150px" )
                        , ( "background", "#ccc" )
                        ]
                    ]
                    []

        labeledSlider labelStr msgPartial vec3Get =
            El.row None
                [ Attr.paddingLeft 10
                , Attr.width <| Attr.percent 100
                  --, Attr.inlineStyle [ ( "background", "yellow" ) ]
                ]
                [ El.text labelStr
                , El.column None
                    [ Attr.verticalCenter
                    , Attr.paddingXY 5 0
                    ]
                    [ (slider msgPartial vec3Get) ]
                , El.text <| toString <| currentValue vec3Get
                ]
    in
        El.column None
            [ Attr.spacing 5 ]
            [ labeledSlider "X: " (createMsg X) Vec3.xComponent
            , labeledSlider "Y: " (createMsg Y) Vec3.yComponent
            , labeledSlider "Z: " (createMsg Z) Vec3.zComponent
            ]


viewSelectionSidebar model =
    let
        viewBadgeSelectors model getoptions viewoptions stuffAfterBadges =
            El.column None
                [ Attr.padding 0, Attr.spacing 0 ]
                (List.map (viewoptions model) (getoptions model.graph) ++ stuffAfterBadges)

        newButton size menuType =
            --El.el SelectorItem
            --    [ Attr.padding 10
            --    , Attr.vary Selected (model.focusedUi == menuType)
            --    ]
            (El.el Button
                [ Attr.width <| Attr.px size
                , Attr.height <| Attr.px size
                ]
                (El.el None
                    [ Attr.verticalCenter, Attr.center, Attr.vary NewButton True ]
                    <| El.text "+"
                )
            )

        ( _, maxId ) =
            Graph.nodeIdRange model.graph
                |> Maybe.withDefault ( 0, 0 )

        newNodeMenu =
            dropdown model
                { viewHead =
                    newButton 40 NewNodeMenu
                    --<| ShowOrHideUi (Toggle NewNodeMenu)
                , uiElement = NewNodeMenu
                , options = Graph.nodes model.graph
                , viewOption =
                    \n ->
                        El.column None
                            [ Attr.paddingXY 10 0 ]
                            [ El.el None [ Attr.paddingBottom 4 ] (El.text "from")
                            , viewNodeBadge model n 30 []
                            ]
                , onClick = \n -> NewNode n.id
                , orientation = Horizontal
                }

        newEdgeMenu =
            dropdown model
                { viewHead =
                    newButton 45 NewEdgeMenu
                    --<| ShowOrHideUi (Toggle NewEdgeMenu)
                , uiElement = NewEdgeMenu
                , options = GraphEx.availableEdges model.graph
                , viewOption =
                    \( from, to ) ->
                        viewEdgeBadge model (Graph.Edge from to emptyTransformation)
                , onClick = \( from, to ) -> NewEdge from to
                , orientation = Horizontal
                }

        skySelector =
            let
                skynode =
                    Graph.Node -1
                        { color = model.backgroundColor, opacity = 1, shape = Box }

                skyEdge =
                    Graph.Edge -1 model.rootId emptyTransformation
            in
                El.el SelectorItem
                    [ Attr.padding 10
                    , Events.onClick <| Edit GeneralSettings
                    , Attr.vary Selected <| model.editing == Just GeneralSettings
                    ]
                    (viewNodeBadge model skynode 45 []
                        |> El.within
                            [ viewNodeBadge model
                                (Graph.get model.rootId model.graph
                                    |> MaybeEx.unwrap skynode .node
                                )
                                25
                                [ Attr.alignRight
                                , Attr.alignBottom
                                ]
                            ]
                    )
    in
        El.sidebar Sidebar
            [ Attr.height <| Attr.percent 100
              -- , Attr.paddingTop 20
              --, Attr.paddingXY 6 20
            , Attr.padding 10
            , Attr.spacing 6
            ]
            [ El.column None
                [ Attr.spacing 20 ]
                [ El.row None
                    [ Attr.spacing 10 ]
                    [ El.column None
                        []
                        (List.map (viewNodeSelector model) (Graph.nodes model.graph)
                            ++ [ newNodeMenu ]
                        )
                    , El.column None
                        []
                        (List.concat
                            [ [ skySelector ]
                            , (List.map (viewEdgeSelector model) (Graph.edges model.graph)
                                |> List.reverse
                              )
                            , [ newEdgeMenu ]
                            ]
                        )
                    ]
                , viewSaveButton
                ]
            ]


type alias DropdownConfig a =
    { viewHead : Element
    , uiElement : UiElement
    , options : List a
    , viewOption : a -> Element
    , onClick : a -> Msg
    , orientation : Orientation
    }


type Orientation
    = Horizontal
    | Vertical


dropdown : Model -> DropdownConfig a -> Element
dropdown model config =
    El.el Dropdown
        [ Events.onMouseEnter <| ShowOrHideUi (Show config.uiElement)
        , Events.onMouseLeave <| ShowOrHideUi Hide
        , Attr.padding 10
        , Attr.vary Expanded (model.focusedUi == config.uiElement)
        ]
        config.viewHead
        |> El.below
            [ El.el Dropdown
                [ Attr.inlineStyle <| MyStyles.zIndex 10
                , hideUnless <| model.focusedUi == config.uiElement
                ]
                ((if config.orientation == Horizontal then
                    El.row
                  else
                    El.column
                 )
                    None
                    [ Attr.width <| Attr.percent 100 ]
                    (List.map
                        (\item ->
                            El.el DropdownItem
                                [ Attr.paddingXY 10 10
                                , Events.onClick <| config.onClick item
                                  --, Attr.alignLeft
                                ]
                                (config.viewOption item)
                        )
                        config.options
                    )
                )
            ]



--viewExamplesMenu model =
--    let
--        exampleRow ( title, _ ) =
--            El.row DropdownItem
--                [ Attr.padding 10
--                , Attr.alignLeft
--                , Events.onClick (Load title)
--                , Events.onMouseEnter <| ShowOrHideUi (Show ExamplesMenu)
--                , Events.onMouseLeave <| ShowOrHideUi Hide
--                ]
--                [ El.text title ]
--    in
--        El.el Dropdown
--            [ Attr.width <| Attr.px 200
--            , Attr.alignRight
--            , Attr.vary NavMenu True
--            , Attr.inlineStyle <| MyStyles.zIndex 10
--            , hideUnless (model.focusedUi == ExamplesMenu)
--            ]
--            (El.column None
--                [ Attr.width <| Attr.percent 100 ]
--                (List.map exampleRow model.examples)
--            )


hideUnless : Bool -> El.Attribute Variation Msg
hideUnless shouldShow =
    if shouldShow then
        Attr.attribute "id" ""
    else
        Attr.hidden



--|> El.screen


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
        (El.el None
            [ Attr.inlineStyle [ ( "color", colorToHex Color.white ) ]
            ]
            (El.text (alphaChar node.id))
        )


viewEdgeSelector : Model -> Types.Edge -> Element
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
                            25
                            [ Attr.alignRight
                            , Attr.alignBottom
                            ]
                        ]

            _ ->
                El.empty


viewSceneContainer : Model -> Element
viewSceneContainer model =
    let
        wasd =
            El.el None
                [ Attr.alignBottom ]
                <| El.row WasdOverlay
                    [ Attr.alignBottom
                    , Attr.paddingXY 20 10
                      --, Attr.center
                    , Attr.width <| Attr.percent 100
                    ]
                    [ El.text "USE w↑ a← s↓ d→ TO MOVE"
                    ]

        scene =
            El.html (viewScene model)

        sceneContents =
            [ scene
            , El.when (model.focusedUi == WasdHelp) wasd
            ]
                |> unless (model.webGLSupport == False)
                    [ viewNoWebGLNotification ]
    in
        El.column None
            [ Attr.width Attr.fill
            , Attr.height Attr.fill
              --<| Attr.px <| toFloat model.device.height
            , Attr.attribute "id" "sceneContainer"
            ]
            sceneContents


unless : Bool -> a -> a -> a
unless exception backup default =
    if exception then
        backup
    else
        default


viewScene : Model -> Html Msg
viewScene model =
    let
        rootEntityView =
            Graph.get model.rootId model.graph
                |> Maybe.map (viewEntity model [])
                |> Maybe.map (\e -> box [ scale 1 1 1 ] [ e ])
    in
        scene
            [ HtmlAttr.attribute "embedded"
                <| if model.device.phone then
                    "false"
                   else
                    "true"
            , HtmlAttr.attribute "fog"
                <| "type: linear; density: 0.05; color: "
                ++ (colorToHex model.backgroundColor)
              --|> unless model.vrMode "yellow")
            , HtmlAttr.style [ "cursor" => "all-scroll" ]
            , HtmlEvents.onMouseDown <| ShowOrHideUi (Show WasdHelp)
            , HtmlEvents.onMouseUp <| ShowOrHideUi Hide
            , HtmlAttr.attribute "scene" "true"
              --, HtmlAttr.style
              --    [ "height" => ("300" ++ "px")
              --    , "border" => "2px solid green"
              --    ]
            ]
            (MaybeEx.toList rootEntityView
                ++ [ sky [ color model.backgroundColor ]
                        []
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
                   , entity [ position 0 0 10 ]
                        [ camera [] []
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
        getShapePrimitive nodeCtx.node.label.shape
            [ uncurry3 position (Vec3.components t.translation)
            , uncurry3 scale (Vec3.components t.scale)
            , uncurry3 rotation (Vec3.components t.rotation)
            , color entity.color
            , opacity entity.opacity
              -- , AfAttr.metalness 1
              -- , AfAttr.roughness 1
            , AfAttr.shader "flat"
            , AfAttr.transparent True
              --, HtmlAttr.attribute "material" "emissive: #fff"
            , height 1
            , width 1
            , depth 1
            , HtmlEvents.onClick (Click nodeCtx.node.id)
            ]
            (List.map viewChild children
             -- ++ [ lamp 0.5, lamp -0.5 ]
            )


viewNoWebGLNotification : Element
viewNoWebGLNotification =
    let
        hrefHowToEnableWebgl =
            "https://superuser.com/questions/836832/how-can-i-enable-webgl-in-my-browser"
    in
        El.column None
            [ Attr.padding 20
            , Attr.width <| Attr.percent 100
              --, Attr.height <| Attr.px 400
            , Attr.verticalCenter
            , Attr.center
            , Attr.spacing 10
              --, Attr.inlineStyle <| [ "background" => "yellow" ] ++ MyStyles.zIndex 9
            ]
            [ El.el Header
                [ Attr.center ]
                (El.text "Uh Oh! No WebGL")
            , El.paragraph None
                [ Attr.center ]
                [ El.text "It looks like you don't have"
                , El.el None
                    [ Attr.inlineStyle [ "color" => "blue" ] ]
                    (El.link hrefHowToEnableWebgl (El.text " WebGL enabled "))
                , El.text "on your browser."
                ]
            ]


viewSaveButton : Element
viewSaveButton =
    El.button Button
        [ Events.onClick Save
        , Attr.alignBottom
        , Attr.center
        , Attr.id "saveButton"
        , Attr.hidden
        ]
        (El.text "Save")


getShapePrimitive shape =
    case shape of
        Box ->
            Primitives.box

        Sphere ->
            Primitives.sphere

        Cylinder ->
            Primitives.cylinder

        Cone ->
            Primitives.cone

        Circle ->
            Primitives.circle

        Ring ->
            Primitives.ring


alphaChar : Id -> String
alphaChar id =
    String.toList "abcdefghijklmnopqrstuvwxyz"
        |> Array.fromList
        |> Array.get id
        |> MaybeEx.unwrap "" String.fromChar


uncurry3 : (a -> b -> c -> d) -> ( a, b, c ) -> d
uncurry3 func ( x, y, z ) =
    func x y z
