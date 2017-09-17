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
        ]
        [ Graph.Edge 0 1
            { data =
                { translation = Geo.Vector3d (0, 0.5, 0)
                , scale = Geo.Vector3d (1.5, 0.5, 2)
                , rotation = Geo.Vector3d (0, 0, 0)
                }
            , isAnimating = False
            , animate =
                ( \time trans ->
                    let
                        percent =
                            percentOfDuration 24000 Ease.inOutCubic time

                        angle =
                            percent * 360

                        newRotationComps =
                            Tuple3.mapThird ((+) angle)
                                (Vec3.components trans.rotation)
                    in
                        { trans | rotation = Geo.Vector3d newRotationComps }
                )
            }
        , Graph.Edge 1 0
            { data =
                { translation = Geo.Vector3d (-3, 0.5, 0)
                , scale = Geo.Vector3d (1.4, 3, 0.3)
                , rotation = Geo.Vector3d (0, 0, 0)
                }
            , isAnimating = False
            , animate =
                ( \time trans ->
                    let
                        percent =
                            percentOfDuration 36000 Ease.inOutExpo time

                        angle =
                            percent * 360

                        newScaleComps =
                            Tuple3.mapSecond ((+) (percent * 4))
                                (Vec3.components trans.scale)
                    in
                        -- { trans
                        --     | scale = Geo.Vector3d newScaleComps
                        -- }
                        trans
                )
            }
        , Graph.Edge 2 0
            { data =
                { translation = Geo.Vector3d (1, 2, -10)
                , scale = Geo.Vector3d (3.6, 1, 2)
                , rotation = Geo.Vector3d (0, 30, 0)
                }
            , isAnimating =
                False
            , animate =
                (\_ -> identity)
            }
        , Graph.Edge 1 2
            { data =
                { translation = Geo.Vector3d (0.5, 1.5, 2)
                , scale = Geo.Vector3d (1.6, 0.5, 1)
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
        ]


percentOfDuration duration ease time =
    time %% duration / duration |> ease
