module Examples exposing (..)

import Types exposing (..)
import Graph
import OpenSolid.Geometry.Types as Geo exposing (Vector3d)
import OpenSolid.Vector3d as Vec3
import Tuple3
import Ease
import Color
import AFrame
import AFrame.Primitives exposing (sphere, box, cylinder, plane, sky)
import Dict exposing (Dict)


removeNothings : ( String, Maybe Graph ) -> List ( String, Graph ) -> List ( String, Graph )
removeNothings ( name, maybeGraph ) graphs =
    case maybeGraph of
        Nothing ->
            graphs

        Just graph ->
            ( name, graph ) :: graphs


loadJson =
    json
        |> List.map (Tuple.mapSecond (decodeGraph >> Result.toMaybe))
        |> List.foldr removeNothings []


json : List ( String, String )
json =
    [ "Starter"
        => "{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#ff5b00\",\"opacity\":0.69,\"shape\":\"Sphere\"}},{\"id\":1,\"label\":{\"color\":\"#6b0e2b\",\"opacity\":0.55,\"shape\":\"Sphere\"}}],\"edges\":[{\"from\":1,\"to\":1,\"label\":{\"translation\":{\"x\":-1.8,\"y\":0.5,\"z\":-2.6},\"scale\":{\"x\":0.65,\"y\":0.86,\"z\":0.78},\"rotation\":{\"x\":14,\"y\":-50,\"z\":-55}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":-0.7,\"y\":-1.5,\"z\":1.7},\"scale\":{\"x\":0.52,\"y\":0.56,\"z\":0.7},\"rotation\":{\"x\":-1,\"y\":31,\"z\":-20}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":0.4,\"y\":-1,\"z\":-0.1},\"scale\":{\"x\":1.18,\"y\":1.03,\"z\":0.84},\"rotation\":{\"x\":2,\"y\":-13,\"z\":10}}}]}"
    , "Simple"
        => "{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#ffbc00\",\"opacity\":0.69,\"shape\":\"Sphere\"}},{\"id\":1,\"label\":{\"color\":\"#f52064\",\"opacity\":0.55,\"shape\":\"Sphere\"}}],\"edges\":[{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":-1,\"y\":-1.4,\"z\":1.2},\"scale\":{\"x\":0.46,\"y\":0.61,\"z\":0.44},\"rotation\":{\"x\":0,\"y\":30,\"z\":0}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":0.4,\"y\":-0.2,\"z\":0.2},\"scale\":{\"x\":1.21,\"y\":0.94,\"z\":1.08},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}}]}"
    , "Flower"
        => "{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#1d1f4d\",\"opacity\":0.24,\"shape\":\"Sphere\"}},{\"id\":1,\"label\":{\"color\":\"#e6187b\",\"opacity\":0.22,\"shape\":\"Sphere\"}},{\"id\":2,\"label\":{\"color\":\"#d3b7d0\",\"opacity\":0.6,\"shape\":\"Sphere\"}}],\"edges\":[{\"from\":2,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":1,\"z\":0},\"scale\":{\"x\":1,\"y\":1.18,\"z\":1.08},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":1.2,\"z\":-0.9},\"scale\":{\"x\":0.39,\"y\":0.68,\"z\":1.02},\"rotation\":{\"x\":0,\"y\":11,\"z\":180}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":3.1,\"y\":-1,\"z\":-0.2},\"scale\":{\"x\":0.81,\"y\":1,\"z\":0.91},\"rotation\":{\"x\":1,\"y\":4,\"z\":51}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":0,\"y\":2.5,\"z\":-0.4},\"scale\":{\"x\":2,\"y\":0.88,\"z\":1.04},\"rotation\":{\"x\":15,\"y\":-6,\"z\":-4}}}]}"
    , "Phosphorescent   "
        => "{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#215584\",\"opacity\":0.53,\"shape\":\"Sphere\"}},{\"id\":1,\"label\":{\"color\":\"#ff99a0\",\"opacity\":0.17,\"shape\":\"Sphere\"}},{\"id\":2,\"label\":{\"color\":\"#00ff80\",\"opacity\":0.17,\"shape\":\"Sphere\"}}],\"edges\":[{\"from\":2,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":-0.1,\"z\":0},\"scale\":{\"x\":0.68,\"y\":1.32,\"z\":0.78},\"rotation\":{\"x\":91,\"y\":301,\"z\":286}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":0.2,\"z\":0.2},\"scale\":{\"x\":0.6,\"y\":1,\"z\":0.48},\"rotation\":{\"x\":360,\"y\":360,\"z\":360}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":0.6,\"y\":0.2,\"z\":0.1},\"scale\":{\"x\":1.33,\"y\":1.48,\"z\":0.45},\"rotation\":{\"x\":255,\"y\":184,\"z\":166}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":0,\"y\":0.4,\"z\":0.4},\"scale\":{\"x\":1.45,\"y\":0.69,\"z\":0.9},\"rotation\":{\"x\":0,\"y\":0,\"z\":346}}}]}"
    , "Smarties"
        => "{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#00a8c1\",\"opacity\":0.22,\"shape\":\"Sphere\"}},{\"id\":1,\"label\":{\"color\":\"#cfb164\",\"opacity\":0.2,\"shape\":\"Sphere\"}},{\"id\":2,\"label\":{\"color\":\"#aa3bd9\",\"opacity\":0.16,\"shape\":\"Sphere\"}}],\"edges\":[{\"from\":2,\"to\":2,\"label\":{\"translation\":{\"x\":-0.5,\"y\":-1.1,\"z\":0},\"scale\":{\"x\":0.61,\"y\":0.65,\"z\":0.64},\"rotation\":{\"x\":360,\"y\":69,\"z\":59}}},{\"from\":2,\"to\":1,\"label\":{\"translation\":{\"x\":0,\"y\":0,\"z\":0},\"scale\":{\"x\":0.43,\"y\":0.43,\"z\":0.33},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":-0.2,\"z\":0.2},\"scale\":{\"x\":0.86,\"y\":0.86,\"z\":0.82},\"rotation\":{\"x\":0,\"y\":61,\"z\":0}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":-1,\"y\":-0.2,\"z\":1.3},\"scale\":{\"x\":0.94,\"y\":1,\"z\":1},\"rotation\":{\"x\":283,\"y\":0,\"z\":0}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":-0.2,\"y\":0.6,\"z\":0.1},\"scale\":{\"x\":0.61,\"y\":0.68,\"z\":0.7},\"rotation\":{\"x\":0,\"y\":61,\"z\":0}}}]}"
    -- , "Duck Tower"
    --     => "{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#434f80\",\"opacity\":0.8,\"shape\":\"Sphere\"}},{\"id\":1,\"label\":{\"color\":\"#7d740f\",\"opacity\":0.45,\"shape\":\"Sphere\"}},{\"id\":2,\"label\":{\"color\":\"#008080\",\"opacity\":0.6,\"shape\":\"Sphere\"}}],\"edges\":[{\"from\":2,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":0.6,\"z\":-0.1},\"scale\":{\"x\":1,\"y\":1.34,\"z\":1.08},\"rotation\":{\"x\":0,\"y\":349,\"z\":0}}},{\"from\":1,\"to\":1,\"label\":{\"translation\":{\"x\":0.4,\"y\":-0.6,\"z\":0.7},\"scale\":{\"x\":0.85,\"y\":0.6,\"z\":1.15},\"rotation\":{\"x\":0,\"y\":263,\"z\":0}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":-0.2,\"z\":0.2},\"scale\":{\"x\":0.6,\"y\":1.09,\"z\":0.48},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":2.4,\"y\":-1.4,\"z\":-1.6},\"scale\":{\"x\":1.12,\"y\":0.5,\"z\":1.34},\"rotation\":{\"x\":0,\"y\":311,\"z\":0}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":-0.4,\"y\":2.8,\"z\":0.4},\"scale\":{\"x\":0.96,\"y\":1.5,\"z\":0.66},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}}]}"
    ]


graph1 : Graph
graph1 =
    Graph.fromNodesAndEdges
        [ Graph.Node 0
            { shape = Box
            , color = Color.rgb 0 90 180
            , opacity = 0.15
            }
        , Graph.Node 1
            { shape = Box
            , color = Color.rgb 0 150 100
            , opacity = 0.25
            }
        ]
        [ Graph.Edge 0 1
            <| noAnimation
                { translation = Geo.Vector3d ( 2, -0.5, 0 )
                , scale = Geo.Vector3d ( 0.5, 0.25, 1 )
                , rotation = Geo.Vector3d ( 0, 0, 0 )
                }
        , Graph.Edge 1 0
            <| noAnimation
            <| { translation = Geo.Vector3d ( 0, -0.5, 1 )
               , scale = Geo.Vector3d ( 0.6, 1, 0.2 )
               , rotation = Geo.Vector3d ( 0, 30, 0 )
               }
        , Graph.Edge 0 0
            <| noAnimation
            <| { translation = Geo.Vector3d ( 0.25, 1, 0 )
               , scale = Geo.Vector3d ( 0.4, 0.4, 0.4 )
               , rotation = Geo.Vector3d ( 90, 0, 0 )
               }
        ]


graph0 : Graph
graph0 =
    Graph.fromNodesAndEdges
        [ Graph.Node 0
            { shape = Box
            , color = Color.rgb 0 90 180
            , opacity = 0.75
            }
        , Graph.Node 1
            { shape = Box
            , color = Color.rgb 0 150 100
            , opacity = 0.5
            }
        , Graph.Node 2
            { shape = Box
            , color = Color.rgb 250 200 0
            , opacity = 0.8
            }
        , Graph.Node 3
            { shape = Box
            , color = Color.rgb 80 200 100
            , opacity = 0.9
            }
        ]
        [ Graph.Edge 0
            1
            { data =
                { translation = Geo.Vector3d ( 2, -3.5, 2 )
                , scale = Geo.Vector3d ( 2.5, 2.5, 1.5 )
                , rotation = Geo.Vector3d ( 0, 0, 0 )
                }
            , isAnimating = True
            , animate =
                (\time trans ->
                    let
                        percent =
                            percentOfDuration 12000 Ease.inOutCubic time

                        newScaleComps =
                            Tuple3.mapFirst ((*) percent >> ((+) 1.5))
                                (Vec3.components trans.scale)
                    in
                        { trans | scale = Geo.Vector3d newScaleComps }
                )
            }
        , Graph.Edge 2
            2
            { data =
                { translation = Geo.Vector3d ( -3, -0.5, -4 )
                , scale = Geo.Vector3d ( 1.4, 3, 0.5 )
                , rotation = Geo.Vector3d ( 0, 0, 0 )
                }
            , isAnimating = True
            , animate =
                (\time trans ->
                    let
                        percent =
                            percentOfDuration 1000 Ease.inOutExpo time

                        angle =
                            percent * 360

                        newScaleComps =
                            Tuple3.mapSecond ((*) (percent * 1) >> ((+) 1))
                                (Vec3.components trans.scale)
                    in
                        { trans
                            | scale = Geo.Vector3d newScaleComps
                        }
                )
            }
        , Graph.Edge 2
            0
            { data =
                { translation = Geo.Vector3d ( 1, -5, 1 )
                , scale = Geo.Vector3d ( 2.6, 1, 2 )
                , rotation = Geo.Vector3d ( 0, 30, 0 )
                }
            , isAnimating =
                False
            , animate =
                (\_ -> identity)
            }
        , Graph.Edge 1
            2
            { data =
                { translation = Geo.Vector3d ( 0.5, -3.5, 2 )
                , scale = Geo.Vector3d ( 0.1, 3.5, 1 )
                , rotation = Geo.Vector3d ( 0, 0, 0 )
                }
            , isAnimating =
                False
            , animate =
                (\time trans ->
                    let
                        percent =
                            percentOfDuration 16000 Ease.inOutCubic time

                        angle =
                            percent * 360

                        newRotationComps =
                            Tuple3.mapSecond (flip (-) (angle))
                                (Vec3.components trans.rotation)
                    in
                        { trans
                            | rotation = Geo.Vector3d newRotationComps
                        }
                )
            }
        , Graph.Edge 2
            3
            { data =
                { translation = Geo.Vector3d ( 3, -2, 1 )
                , scale = Geo.Vector3d ( 2.6, 4, 2 )
                , rotation = Geo.Vector3d ( 0, 0, 0 )
                }
            , isAnimating =
                False
            , animate =
                (\_ -> identity)
            }
        , Graph.Edge 3
            1
            { data =
                { translation = Geo.Vector3d ( 0, -3, 1 )
                , scale = Geo.Vector3d ( 0.6, 0.5, 2 )
                , rotation = Geo.Vector3d ( 0, 0, 0 )
                }
            , isAnimating =
                False
            , animate =
                (\_ -> identity)
            }
        ]


percentOfDuration duration ease time =
    time %% duration / duration |> ease
