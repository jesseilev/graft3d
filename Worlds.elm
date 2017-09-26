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
        [ Graph.Edge 0 1
            { data =
                { translation = Geo.Vector3d (2, -3.5, 2)
                , scale = Geo.Vector3d (2.5, 2.5, 1.5)
                , rotation = Geo.Vector3d (0, 0, 0)
                }
            , isAnimating = True
            , animate =
                ( \time trans ->
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
        , Graph.Edge 2 2
            { data =
                { translation = Geo.Vector3d (-3, -0.5, -4)
                , scale = Geo.Vector3d (1.4, 3, 0.5)
                , rotation = Geo.Vector3d (0, 0, 0)
                }
            , isAnimating = True
            , animate =
                ( \time trans ->
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
        , Graph.Edge 2 0
            { data =
                { translation = Geo.Vector3d (1, -5, 1)
                , scale = Geo.Vector3d (2.6, 1, 2)
                , rotation = Geo.Vector3d (0, 30, 0)
                }
            , isAnimating =
                False
            , animate =
                (\_ -> identity)
            }
        , Graph.Edge 1 2
            { data =
                { translation = Geo.Vector3d (0.5, -3.5, 2)
                , scale = Geo.Vector3d (0.1, 3.5, 1)
                , rotation = Geo.Vector3d (0, 0, 0)
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
            , Graph.Edge 2 3
                { data =
                    { translation = Geo.Vector3d (3, -2, 1)
                    , scale = Geo.Vector3d (2.6, 4, 2)
                    , rotation = Geo.Vector3d (0, 0, 0)
                    }
                , isAnimating =
                    False
                , animate =
                    (\_ -> identity)
                }
            , Graph.Edge 3 1
                { data =
                    { translation = Geo.Vector3d (0, -3, 1)
                    , scale = Geo.Vector3d (0.6, 0.5, 2)
                    , rotation = Geo.Vector3d (0, 0, 0)
                    }
                , isAnimating =
                    False
                , animate =
                    (\_ -> identity)
                }
        ]


percentOfDuration duration ease time =
    time %% duration / duration |> ease
