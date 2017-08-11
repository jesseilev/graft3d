module Main exposing (..)

import Types
    exposing (Model, Msg(..), Graph, Node, NodeContext, Id, Element, Transformation)
import Time
import Graph.Extra as GraphEx
import Html exposing (Html)
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
        Graph.fromNodesAndEdges
            [ Graph.Node 0
                { color = Color.rgb 180 0 90
                , opacity = 0.75
                }
            , Graph.Node 1
                { color = Color.rgb 0 150 100
                , opacity = 0.5
                }
            , Graph.Node 2
                { color = Color.rgb 250 200 0
                , opacity = 0.8
                }
            ]
            [ Graph.Edge 0 1
                { data =
                    { translation = Geo.Vector3d (0, 0.5, 0)
                    , scale = 0.8
                    , rotation = Geo.Vector3d (0, 0, 0)
                    }
                , animate =
                    ( \time trans ->
                        let
                            period =
                                12000

                            t =
                                round time % period

                            pct =
                                toFloat  t / toFloat period

                            eTime =
                                Ease.inOutCubic pct

                            angle =
                                eTime * 360

                            newRotationComps =
                                Tuple3.mapThird ((+) angle)
                                    (Vec3.components trans.rotation)
                        in
                            { trans | rotation = Geo.Vector3d newRotationComps }
                    )
                }
            , Graph.Edge 1 0
                { data =
                    { translation = Geo.Vector3d (-3, 1.5, 0)
                    , scale = 0.4
                    , rotation = Geo.Vector3d (0, 0, 0)
                    }
                , animate =
                    ( \time trans ->
                        let
                            period =
                                8000

                            t =
                                round time % period

                            pct =
                                toFloat  t / toFloat period

                            eTime =
                                Ease.inOutExpo pct

                            angle =
                                eTime * 360

                            newRotationComps =
                                Tuple3.mapFirst ((+) (angle))
                                    (Vec3.components trans.rotation)
                        in
                            { trans
                                | rotation = Geo.Vector3d newRotationComps
                            }
                    )
                }
            , Graph.Edge 2 0
                { data =
                    { translation = Geo.Vector3d (3, 2, -1)
                    , scale = 0.6
                    , rotation = Geo.Vector3d (0, 30, 0)
                    }
                , animate =
                    (\_ -> identity)
                }
            , Graph.Edge 1 2
                { data =
                    { translation = Geo.Vector3d (0.5, 1.5, 2)
                    , scale = 0.6
                    , rotation = Geo.Vector3d (0, 0, 0)
                    }
                , animate =
                    (\time trans ->
                        let
                            period =
                                16000

                            t =
                                round time % period

                            pct =
                                toFloat  t / toFloat period

                            eTime =
                                Ease.inOutExpo pct

                            angle =
                                eTime * 360

                            newRotationComps =
                                Tuple3.mapSecond (flip (-) (angle))
                                    (Vec3.components trans.rotation)
                        in
                            { trans
                                | rotation = Geo.Vector3d newRotationComps
                            }
                    )
                }
            ]
    }


(%%) : Float -> Float -> Float
(%%) small big =
    round small % round big |> toFloat


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    case msg of
        TimeUpdate diff ->
            { model | time = model.time + diff } ! []
                -- |> Debug.log "model"

        _ ->
            model ! []


subscriptions model =
    Ani.diffs TimeUpdate


view : Model -> Html msg
view model =
    let
        listContainingRootElementView =
            Graph.get model.rootId model.graph
                |> Maybe.map (viewElement model [])
                |> MaybeEx.toList
    in
        scene
            []
            ( listContainingRootElementView
                -- ++ [ camera [ position 0 10 0] [] ]
                ++
                [ sky [ color (Color.rgb 120 90 150)] []
                , light [ Light.type_ Light.Directional ] []
                ]
            )


viewElement : Model -> List Id -> NodeContext -> Html msg
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
                            |> Maybe.map (\at -> at.animate model.time at.data)
                    )
                |> Maybe.withDefault { emptyTransformation | scale = 1 }

        children : List NodeContext
        children =
            IntDict.keys nodeCtx.outgoing
                |> List.map (flip Graph.get model.graph)
                |> MaybeEx.values

        viewChild =
            if List.length ancestors < 8 then
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
        AFrame.Primitives.sphere
            [ uncurry3 position (Vec3.components t.translation)
            , scale t.scale t.scale t.scale
            , uncurry3 rotation (Vec3.components t.rotation)
            , color element.color
            , opacity element.opacity
            , Attr.metalness 1
            , Attr.roughness 1
            , Attr.shader "flat"
            , height 0.01
            ]
            (
                List.map viewChild children
                    -- ++ [ lamp 0.5, lamp -0.5 ]
            )



emptyTransformation =
    { translation = vector3dZero
    , scale = 1
    , rotation = vector3dZero
    }

            --
            -- [ sphere
            --     [ position 0 1 0
            --     , radius 1.25
            --     , color (Color.rgb 240 173 0)
            --     , opacity 0.5
            --     ]
            --     [ box
            --         [ position 0 0 0
            --         , radius 0.5
            --         , width 10
            --         , height 0.5
            --         , depth 1
            --         , color (rgb 127 209 59)
            --         ]
            --         []
            --     ]
            -- , cylinder
            --     [ position 1 0.75 -1
            --     , radius 0.5
            --     , height 1.5
            --     , color (rgb 6 181 204)
            --     ]
            --     []
            -- , plane
            --     [ rotation -90 0 0
            --     , width 4
            --     , height 4
            --     , color (rgb 90 99 120)
            --     ]
            --     []
            -- , sky
            --     []
            --     []
            -- ]
            --
            --


main =
    Html.program
        { init = model ! [], view = view, update = update, subscriptions = subscriptions }



uncurry3 : (a -> b -> c -> d) -> (a, b, c) -> d
uncurry3 func (x, y, z) =
    func x y z


vector3dZero =
    Geo.Vector3d (0,0,0)
