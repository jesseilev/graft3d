module Types exposing (..)

import Graph
import OpenSolid.Geometry.Types exposing (..)
import OpenSolid.Vector3d as Vec3
import Color exposing (Color)
import Time exposing (Time)
import AFrame.Primitives exposing (sphere, box, cylinder, plane, sky)
import Monocle.Lens as Lens exposing (Lens)
import Tuple3
import Element.Input as Input


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
    , rootId : Id
    , editing : Maybe Editable
    }


type Editable
    = Node Id
    | Edge Id Id



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
    | ChangeTransformation TransformAttribute XYorZ Id Id Float
    | EdgeFrom Id Id Id
    | EdgeTo Id Id Id
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
            TransformUtils edgeLensRotation 0 360 1


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
