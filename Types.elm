module Types exposing (..)

import Graph
import OpenSolid.Geometry.Types exposing (..)
import Color exposing (Color)



-- ALIASES

type alias Graph =
    Graph.Graph Element Transformation


type alias Node =
    Graph.Node Element


type alias Edge =
    Graph.Edge Transformation


type alias Id =
    Graph.NodeId


type alias NodeContext =
    Graph.NodeContext Element Transformation


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


-- MODEL

type alias Model =
    { graph : Graph
    , rootId : Id
    }


-- MSG

type Msg
    -- STAGE VIEW
    = ZoomIn
    | ZoomOut
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
