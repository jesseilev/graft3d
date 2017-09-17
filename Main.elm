module Main exposing (..)

import Types
    exposing (Model, Msg(..), Graph, Node, NodeContext, Id, Element, Transformation)
import Worlds
import Time
import Graph.Extra as GraphEx
import Html exposing (Html)
import Html.Events as Events
import Color exposing (rgb)
import Graph
import IntDict
import Maybe.Extra as MaybeEx
import AnimationFrame as Ani
import Tuple3
import Ease
import OpenSolid.Geometry.Types as Geo exposing (Vector3d)
import OpenSolid.Vector3d as Vec3
import AFrame exposing (scene, entity)
import AFrame.Primitives exposing (sphere, box, cylinder, plane, sky)
import AFrame.Primitives.Camera exposing (camera)
import AFrame.Primitives.Light as Light exposing (light)
import AFrame.Primitives.Cursor as Cursor exposing (..)
import AFrame.Primitives.Attributes as Attr
    exposing
        ( rotation
        , position
        , scale
        , radius
        , color
        , width
        , height
        , depth
        , opacity
        )



model : Model
model =
    { time = 0
    , rootId = 0
    , graph =
        Worlds.graph0
    }


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        TimeUpdate diff ->
            { model | time = model.time + diff } ! []
                -- |> Debug.log "model"

        Click id ->
            { model | graph = toggleAnimation id model.graph } ! []
                |> Debug.log ("Click" ++ toString id)

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
                    let oldLabel = e.label in
                    { e | label =
                        { oldLabel | isAnimating = not e.label.isAnimating }
                    }
            in
                GraphEx.updateEdge edge.from edge.to updater graph



subscriptions model =
    Ani.diffs TimeUpdate


view : Model -> Html Msg
view model =
    let
        rootElementView =
            Graph.get model.rootId model.graph
                |> Maybe.map (viewElement model [])
                |> Maybe.map (\e -> box [ scale 0.05 0.05 0.05 ] [ e ])
    in
        scene
            []
            ( MaybeEx.toList rootElementView
                ++
                [ sky [ color (Color.rgb 200 150 220)] []
                , light [ Light.type_ Light.Directional ] []
                , camera
                    [ ] --position 0 10 0]
                    [ cursor
                        [ Cursor.fuse True, Cursor.timeout 1 ]
                        [ sphere [ radius 0.01 ] [] ]
                    ]
                ]
            )


viewElement : Model -> List Id -> NodeContext -> Html Msg
viewElement model ancestors nodeCtx =
    let
        element =
            nodeCtx.node.label

        t =
            List.head ancestors
                |> Maybe.andThen
                    (\parentId ->
                        GraphEx.getEdge parentId nodeCtx.node.id model.graph
                            |> Maybe.map .label
                            |> Maybe.map
                                (\at ->
                                    at.data |>
                                        if at.isAnimating then
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
            if List.length ancestors < 12 then
                viewElement model (nodeCtx.node.id :: ancestors)
            else
                \_ -> box [ width 0, height 0 ] []

        lamp yTranslation =
            light
                [ position 0 yTranslation 0
                , Light.type_ Light.Point
                , color element.color
                , Light.intensity 0.3
                ]
                []
    in
        box
            [ uncurry3 position (Vec3.components t.translation)
            , uncurry3 scale (Vec3.components t.scale)
            , uncurry3 rotation (Vec3.components t.rotation)
            , color element.color
            , opacity element.opacity
            , Attr.metalness 1
            , Attr.roughness 1
            , Attr.shader "flat"
            , height 1
            , width 1
            , depth 1
            , Events.onClick (Click nodeCtx.node.id)
            ]
            (
                List.map viewChild children
                    -- ++ [ lamp 0.5, lamp -0.5 ]
            )



emptyTransformation =
    { translation = vector3dZero
    , scale = Geo.Vector3d (1, 1, 1)
    , rotation = vector3dZero
    }


main =
    Html.program
        { init = model ! [], view = view, update = update, subscriptions = subscriptions }



uncurry3 : (a -> b -> c -> d) -> (a, b, c) -> d
uncurry3 func (x, y, z) =
    func x y z


vector3dZero =
    Geo.Vector3d (0,0,0)
