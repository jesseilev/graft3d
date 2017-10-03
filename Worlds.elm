module Worlds exposing (..)

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


jsonExamples : Dict String String
jsonExamples =
    Dict.fromList
        [ "Simple"
            => "{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#005ab4\",\"opacity\":0.82,\"shape\":\"Box\"}},{\"id\":1,\"label\":{\"color\":\"#009664\",\"opacity\":0.55,\"shape\":\"Box\"}}],\"edges\":[{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":-0.5,\"z\":1},\"scale\":{\"x\":0.6,\"y\":1,\"z\":0.2},\"rotation\":{\"x\":0,\"y\":30,\"z\":0}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":-1.5,\"y\":0.1,\"z\":-0.2},\"scale\":{\"x\":1.14,\"y\":0.94,\"z\":1.9},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}}]}"
        , "Wavy Thing"
            => "{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#008040\",\"opacity\":0.24,\"shape\":\"Box\"}},{\"id\":1,\"label\":{\"color\":\"#e6e6e6\",\"opacity\":0.22,\"shape\":\"Box\"}},{\"id\":2,\"label\":{\"color\":\"#008080\",\"opacity\":0.6,\"shape\":\"Box\"}}],\"edges\":[{\"from\":2,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":1,\"z\":0},\"scale\":{\"x\":1,\"y\":1.34,\"z\":1.08},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":-0.2,\"z\":0.2},\"scale\":{\"x\":0.6,\"y\":1,\"z\":0.48},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":2.4,\"y\":-1,\"z\":-1.6},\"scale\":{\"x\":0.5,\"y\":1.09,\"z\":0.31},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":-0.1,\"y\":-0.1,\"z\":0.4},\"scale\":{\"x\":1.14,\"y\":0.67,\"z\":1.13},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}}]}"
        , "Sea Shell"
            => "{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#00964e\",\"opacity\":0.53,\"shape\":\"Box\"}},{\"id\":1,\"label\":{\"color\":\"#ff8000\",\"opacity\":0.17,\"shape\":\"Box\"}},{\"id\":2,\"label\":{\"color\":\"#00ff80\",\"opacity\":0.17,\"shape\":\"Box\"}}],\"edges\":[{\"from\":2,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":-0.1,\"z\":0},\"scale\":{\"x\":0.68,\"y\":1.32,\"z\":0.78},\"rotation\":{\"x\":91,\"y\":301,\"z\":286}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":0.2,\"z\":0.2},\"scale\":{\"x\":0.6,\"y\":1,\"z\":0.48},\"rotation\":{\"x\":360,\"y\":360,\"z\":360}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":0.6,\"y\":0.2,\"z\":0.1},\"scale\":{\"x\":1.33,\"y\":1.48,\"z\":0.45},\"rotation\":{\"x\":255,\"y\":184,\"z\":166}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":-0.1,\"y\":-0.1,\"z\":0.4},\"scale\":{\"x\":1.14,\"y\":0.67,\"z\":1.13},\"rotation\":{\"x\":0,\"y\":0,\"z\":346}}}]}"
        , "Gathering"
            => "{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#1d1f4d\",\"opacity\":0.24,\"shape\":\"Box\"}},{\"id\":1,\"label\":{\"color\":\"#e6e6e6\",\"opacity\":0.22,\"shape\":\"Box\"}},{\"id\":2,\"label\":{\"color\":\"#d35ac4\",\"opacity\":0.6,\"shape\":\"Box\"}}],\"edges\":[{\"from\":2,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":1,\"z\":0},\"scale\":{\"x\":1,\"y\":1.18,\"z\":1.08},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":0,\"z\":-0.5},\"scale\":{\"x\":0.6,\"y\":0.66,\"z\":0.48},\"rotation\":{\"x\":0,\"y\":0,\"z\":179}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":2.4,\"y\":-1,\"z\":-1.6},\"scale\":{\"x\":0.47,\"y\":1.09,\"z\":0.8},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":0,\"y\":0.9,\"z\":0.7},\"scale\":{\"x\":1.24,\"y\":0.67,\"z\":1.13},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}}]}"
        , "Maybe Duck Tower"
            => "{\"nodes\":[{\"id\":0,\"label\":{\"color\":\"#434f80\",\"opacity\":0.8,\"shape\":\"Box\"}},{\"id\":1,\"label\":{\"color\":\"#7d740f\",\"opacity\":0.45,\"shape\":\"Box\"}},{\"id\":2,\"label\":{\"color\":\"#008080\",\"opacity\":0.6,\"shape\":\"Box\"}}],\"edges\":[{\"from\":2,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":0.6,\"z\":-0.1},\"scale\":{\"x\":1,\"y\":1.34,\"z\":1.08},\"rotation\":{\"x\":0,\"y\":349,\"z\":0}}},{\"from\":1,\"to\":1,\"label\":{\"translation\":{\"x\":0.4,\"y\":-0.6,\"z\":0.7},\"scale\":{\"x\":0.85,\"y\":0.6,\"z\":1.15},\"rotation\":{\"x\":0,\"y\":263,\"z\":0}}},{\"from\":1,\"to\":0,\"label\":{\"translation\":{\"x\":0,\"y\":-0.2,\"z\":0.2},\"scale\":{\"x\":0.6,\"y\":1.09,\"z\":0.48},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}},{\"from\":0,\"to\":2,\"label\":{\"translation\":{\"x\":2.4,\"y\":-1.4,\"z\":-1.6},\"scale\":{\"x\":1.12,\"y\":0.5,\"z\":1.34},\"rotation\":{\"x\":0,\"y\":311,\"z\":0}}},{\"from\":0,\"to\":1,\"label\":{\"translation\":{\"x\":-0.4,\"y\":2.8,\"z\":0.4},\"scale\":{\"x\":0.96,\"y\":1.5,\"z\":0.66},\"rotation\":{\"x\":0,\"y\":0,\"z\":0}}}]}"
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
