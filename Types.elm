module Types exposing (..)

import Graph
import OpenSolid.Geometry.Types exposing (..)
import Color exposing (Color)
import Time exposing (Time)



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
    { color : Color
    , opacity : Float
    }


type Shape
    = Circle
    | Square
    | Triangle
    | HalfWedge
    | QuarterWedge


type alias Transformation =
    { translation : Vector3d
    , scale : Float
    , rotation : Vector3d
    }


type alias Animated a =
    { data : a
    , animate : Time -> a -> a
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
    | NoOp


-- UTILS

shapeFromString : String -> Result String Shape
shapeFromString s =
    case s of
        "Circle" -> Ok Circle
        "Triangle" -> Ok Triangle
        "Square" -> Ok Square
        "HalfWedge" -> Ok HalfWedge
        "QuarterWedge" -> Ok QuarterWedge
        _ -> Err ("'" ++ s ++ "' is not a valid Shape type")
