module Types exposing (..)

import Graph
import OpenSolid.Geometry.Types exposing (..)
import OpenSolid.Vector3d as Vec3
import Color exposing (Color)
import Dict exposing (Dict)
import Time exposing (Time)
import AFrame.Primitives exposing (sphere, box, cylinder, plane, sky)
import Monocle.Lens as Lens exposing (Lens)
import Tuple3
import Element as El
import Element.Input as Input
import Json.Decode as Decode exposing (Decoder)
import Json.Encode as Encode
import Color.Convert exposing (colorToHex, hexToColor)
import Window


-- ALIASES


type alias Graph =
    Graph.Graph Entity (Animated Transformation)


type alias Node =
    Graph.Node Entity


type alias Edge =
    Graph.Edge (Animated Transformation)


type alias Id =
    Graph.NodeId


type alias NodeContext =
    Graph.NodeContext Entity (Animated Transformation)



-- GRAPH LABELS


type alias Entity =
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
    , examples : List ( String, Graph )
    , rootId : Id
    , editing : Maybe Editable
    , focusedUi : UiElement
    , device : El.Device
    , webGLSupport : Bool
    }


type Editable
    = Node Id
    | Edge Id Id


type UiElement
    = NoElem
    | ExamplesMenu
    | NewNodeMenu
    | NewEdgeMenu
    | EditEdgeMenu
    | EditNodeShapeMenu
    | WasdHelp


type UiAppearence
    = Show UiElement
    | Hide
    | Toggle UiElement



-- MSG


type
    Msg
    -- SCENE VIEW
    = ZoomIn
    | ZoomOut
    | TimeUpdate Time
    | Click Id
      -- SIDEBAR
    | Edit (Editable)
    | Delete Editable
    | NewNode Id
    | NewEdge Id Id
    | ChangeColor Id String
    | ChangeOpacity Id Float
    | ChangeShape Id Shape
    | ChangeTransformation TransformAttribute XYorZ Id Id Float
    | EdgeFromTo Id Id Id Id
      -- META
    | Save
    | Load String
    | ShowOrHideUi UiAppearence
    | WindowResize Window.Size
    | NoOp


type TransformAttribute
    = Translation
    | Scale
    | Rotation


type alias TransformUtils =
    { edgeLens : Lens Edge Vector3d
    , min : Float
    , max : Float
    , step : Float
    }


transformUtils : TransformAttribute -> TransformUtils
transformUtils attribute =
    case attribute of
        Translation ->
            TransformUtils edgeLensTranslation -4 4 0.1

        Scale ->
            TransformUtils edgeLensScale 0 2 0.01

        Rotation ->
            TransformUtils edgeLensRotation -180 180 1


vec3Set_ tupleMap new_ =
    Vector3d << tupleMap (\_ -> new_) << Vec3.components


vec3SetX : Float -> Vector3d -> Vector3d
vec3SetX =
    vec3Set_ Tuple3.mapFirst


vec3SetY : Float -> Vector3d -> Vector3d
vec3SetY =
    vec3Set_ Tuple3.mapSecond


vec3SetZ : Float -> Vector3d -> Vector3d
vec3SetZ =
    vec3Set_ Tuple3.mapThird


type XYorZ
    = X
    | Y
    | Z


vec3Set : XYorZ -> (Float -> Vector3d -> Vector3d)
vec3Set xyorz =
    case xyorz of
        X ->
            vec3SetX

        Y ->
            vec3SetY

        Z ->
            vec3SetZ


(%%) : Float -> Float -> Float
(%%) small big =
    round small % round big |> toFloat


noAnimation : a -> Animated a
noAnimation data =
    { data = data, isAnimating = False, animate = \_ -> identity }


emptyTransformation =
    { translation = vector3dZero
    , scale = Vector3d ( 1, 1, 1 )
    , rotation = vector3dZero
    }


vector3dZero =
    Vector3d ( 0, 0, 0 )



-- LENS
-- LENS


nodeLensEntity : Lens Node Entity
nodeLensEntity =
    Lens .label (\l n -> { n | label = l })


elementLensColor : Lens Entity Color
elementLensColor =
    Lens .color (\c e -> { e | color = c })


elementLensOpacity : Lens Entity Float
elementLensOpacity =
    Lens .opacity (\o e -> { e | opacity = o })


elementLensShape : Lens Entity Shape
elementLensShape =
    Lens .shape (\s e -> { e | shape = s })


nodeLensColor : Lens Node Color
nodeLensColor =
    Lens.compose nodeLensEntity elementLensColor


nodeLensOpacity : Lens Node Float
nodeLensOpacity =
    Lens.compose nodeLensEntity elementLensOpacity


nodeLensShape : Lens Node Shape
nodeLensShape =
    Lens.compose nodeLensEntity elementLensShape


edgeLensAniTransformation : Lens Edge (Animated Transformation)
edgeLensAniTransformation =
    Lens .label (\at e -> { e | label = at })


aniTransformationLensTransformation =
    Lens .data (\d at -> { at | data = d })


transformationLensScale : Lens Transformation Vector3d
transformationLensScale =
    Lens .scale (\s t -> { t | scale = s })


transformationLensRotation : Lens Transformation Vector3d
transformationLensRotation =
    Lens .rotation (\r t -> { t | rotation = r })


transformationLensTranslation : Lens Transformation Vector3d
transformationLensTranslation =
    Lens .translation (\tl tf -> { tf | translation = tl })


edgeLensScale : Lens Edge Vector3d
edgeLensScale =
    Lens.compose edgeLensAniTransformation aniTransformationLensTransformation
        |> flip Lens.compose transformationLensScale


edgeLensRotation : Lens Edge Vector3d
edgeLensRotation =
    Lens.compose edgeLensAniTransformation aniTransformationLensTransformation
        |> flip Lens.compose transformationLensRotation


edgeLensTranslation =
    Lens.compose edgeLensAniTransformation aniTransformationLensTransformation
        |> flip Lens.compose transformationLensTranslation


modelLensGraph : Lens Model Graph
modelLensGraph =
    Lens .graph (\g m -> { m | graph = g })



-- JSON


(=>) =
    (,)


type alias Value =
    Encode.Value


graphToJson : Graph -> String
graphToJson =
    Encode.encode 0 << encodeGraph


encodeGraph : Graph -> Value
encodeGraph graph =
    Encode.object
        [ "nodes" => Encode.list (List.map encodeNode <| Graph.nodes graph)
        , "edges" => Encode.list (List.map encodeEdge <| Graph.edges graph)
        ]


encodeNode : Node -> Value
encodeNode node =
    Encode.object
        [ "id" => Encode.int node.id
        , "label" => encodeEntity node.label
        ]


encodeEntity label =
    Encode.object
        [ "color" => Encode.string (colorToHex label.color)
        , "opacity" => Encode.float label.opacity
        , "shape" => Encode.string (toString label.shape)
        ]


encodeEdge edge =
    Encode.object
        [ "from" => Encode.int edge.from
        , "to" => Encode.int edge.to
        , "label" => encodeTransformation edge.label.data
        ]


encodeTransformation trans =
    Encode.object
        [ "translation" => encodeVec3 trans.translation
        , "scale" => encodeVec3 trans.scale
        , "rotation" => encodeVec3 trans.rotation
        ]


encodeVec3 vec =
    let
        ( x, y, z ) =
            Vec3.components vec
    in
        Encode.object
            [ "x" => Encode.float x
            , "y" => Encode.float y
            , "z" => Encode.float z
            ]


decodeGraph : String -> Result String Graph
decodeGraph =
    Decode.decodeString graphDecoder
        >> Result.map (\{ nodes, edges } -> Graph.fromNodesAndEdges nodes edges)


type alias AlmostGraph =
    { nodes : List Node, edges : List Edge }


graphDecoder : Decoder AlmostGraph
graphDecoder =
    Decode.map2 AlmostGraph
        (Decode.field "nodes" <| Decode.list nodeDecoder)
        (Decode.field "edges" <| Decode.list edgeDecoder)


nodeDecoder : Decoder Node
nodeDecoder =
    Decode.map2 Graph.Node
        (Decode.field "id" Decode.int)
        (Decode.field "label" entityDecoder)


entityDecoder : Decoder Entity
entityDecoder =
    Decode.map3 Entity
        (Decode.field "shape"
            <| Decode.map (shapeFromString >> Result.withDefault Box) Decode.string
        )
        (Decode.field "color"
            <| Decode.map (hexToColor >> Maybe.withDefault Color.black) Decode.string
        )
        (Decode.field "opacity" <| Decode.float)


edgeDecoder : Decoder Edge
edgeDecoder =
    Decode.map3 Graph.Edge
        (Decode.field "from" Decode.int)
        (Decode.field "to" Decode.int)
        (Decode.field "label" <| Decode.map noAnimation transformationDecoder)


transformationDecoder : Decoder Transformation
transformationDecoder =
    Decode.map3 Transformation
        (Decode.field "translation" decodeVec3)
        (Decode.field "scale" decodeVec3)
        (Decode.field "rotation" decodeVec3)


decodeVec3 : Decoder Vector3d
decodeVec3 =
    Decode.map3 (\x y z -> Vector3d ( x, y, z ))
        (Decode.field "x" Decode.float)
        (Decode.field "y" Decode.float)
        (Decode.field "z" Decode.float)


shapeFromString : String -> Result String Shape
shapeFromString str =
    case str of
        "Box" ->
            Ok Box

        "Sphere" ->
            Ok Sphere

        "Cylinder" ->
            Ok Cylinder

        _ ->
            Err ("I don't recognize this shape name: " ++ str)


fakeTransformation =
    { data = emptyTransformation
    , isAnimating = False
    , animate = \_ -> identity
    }
