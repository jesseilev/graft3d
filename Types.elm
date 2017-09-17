module Types exposing (..)

import Graph
import OpenSolid.Geometry.Types exposing (..)
import Color exposing (Color)
import Time exposing (Time)
import AFrame.Primitives exposing (sphere, box, cylinder, plane, sky)



-- ALIASES


type alias Graph =
    Graph.Graph Element (Animated Transformation)


type alias Node =
    Graph.Node Element


type alias Edge =
    Graph.Edge (Animated Transformation)


type alias Id =
    Graph.NodeId


type alias NodeContext =
    Graph.NodeContext Element (Animated Transformation)


-- GRAPH LABELS


type alias Element =
    { shape : Shape
    , color : Color
    , opacity : Float
    }


type Shape
    = Box
    | Sphere
    | Cylinder


type alias Transformation =
    { translation : Vector3d
    , scale : Vector3d
    , rotation : Vector3d
    }


type alias Animated a =
    { data : a
    , animate : Time -> a -> a
    , isAnimating : Bool
    }





-- MODEL

type alias Model =
    { time : Time
    , graph : Graph
    , rootId : Id
    }


-- MSG

type Msg
    -- STAGE VIEW
    = ZoomIn
    | ZoomOut
    | TimeUpdate Time
    | Click Id
    | NoOp


(%%) : Float -> Float -> Float
(%%) small big =
    round small % round big |> toFloat
