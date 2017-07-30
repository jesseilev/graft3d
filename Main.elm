module Main exposing (..)

import Types
    exposing (Model, Msg, Graph, Node, NodeContext, Id, Element, Transformation)
import Graph.Extra as GraphEx
import Html exposing (Html)
import Color exposing (rgb)
import Graph
import IntDict
import Maybe.Extra as MaybeEx
import OpenSolid.Geometry.Types as Geo exposing (Vector3d)
import OpenSolid.Vector3d as Vec3
import AFrame exposing (scene, entity)
import AFrame.Primitives exposing (sphere, box, cylinder, plane, sky)
import AFrame.Primitives.Camera exposing (camera)
import AFrame.Primitives.Light as Light exposing (light)
import AFrame.Primitives.Attributes
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
    { rootId = 0
    , graph =
        Graph.fromNodesAndEdges
            [ Graph.Node 0
                { color = Color.rgb 180 0 90
                , opacity = 0.75
                }
            , Graph.Node 1
                { color = Color.rgb 80 100 200
                , opacity = 0.75
                }
            ]
            [ Graph.Edge 0 1
                { translation = Geo.Vector3d (-0.5, -0.1, 0.25)
                , scale = 0.8
                , rotation = vector3dZero
                }
            , Graph.Edge 1 0
                { translation = Geo.Vector3d (0.25, -0.25, -0.5)
                , scale = 0.6
                , rotation = vector3dZero
                }
            , Graph.Edge 1 1
                { translation = Geo.Vector3d (0, 1, 0)
                , scale = 0.6
                , rotation = Geo.Vector3d (0, 0, 30)
                }
            ]
    }


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
    model ! []


subscriptions model =
    Sub.none



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
                [ sky [ color (Color.rgb 60 0 40)] []
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
                    )
                |> Maybe.withDefault { emptyTransformation | scale = 1 }

        children : List NodeContext
        children =
            IntDict.keys nodeCtx.outgoing
                |> List.map (flip Graph.get model.graph)
                |> MaybeEx.values

        viewChild =
            if List.length ancestors < 7 then
                viewElement model (nodeCtx.node.id :: ancestors)
            else
                \_ -> box [ width 0, height 0 ] []

        lamp =
            light
                [ position 0 0 0
                , Light.type_ Light.Point
                , color Color.purple
                , Light.intensity 0.1
                ]
                []
    in
        cylinder
            [ uncurry3 position (Vec3.components t.translation)
            , scale t.scale t.scale t.scale
            , uncurry3 rotation (Vec3.components t.rotation)
            , color element.color
            , opacity element.opacity
            , height 0.01
            ]
            (
                lamp ::
                (List.map viewChild children)
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
