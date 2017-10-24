module Main exposing (..)

import Types exposing (..)
import Examples
import Time
import Dict exposing (Dict)
import Graph.Extra as GraphEx
import Html exposing (Html)
import Html.Attributes as HtmlAttr
import Html.Events as HtmlEvents
import Color exposing (rgb)
import Graph
import Maybe.Extra as MaybeEx
import Monocle.Lens as Lens
import View
import Color.Convert exposing (colorToHex, hexToColor)
import Window
import Element as El
import Task
import Update.Extra.Infix exposing ((:>))
import OpenSolid.Geometry.Types exposing (..)


type alias Flags =
    { webGLSupport : Bool }


init : Flags -> ( Model, Cmd Msg )
init flags =
    ( { time = 0
      , rootId = 0
      , backgroundColor = Color.rgb 100 120 160
      , graph = Examples.graph1
      , examples = Examples.loadJson
      , editing = Just (Edge 0 1)
      , focusedUi = NoElem
      , vrMode = False
      , device = El.classifyDevice (Window.Size 0 0) |> Debug.log "init size"
      , webGLSupport = flags.webGLSupport
      }
    , Task.perform WindowResize Window.size
    )
        :> update (Load "Simple")


main =
    Html.programWithFlags
        { init = init
        , view = View.root
        , update = update
        , subscriptions = subscriptions
        }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        TimeUpdate diff ->
            { model | time = model.time + diff } ! []

        -- |> Debug.log "model"
        Click id ->
            { model | graph = toggleAnimation id model.graph }
                ! []

        --|> Debug.log ("Click" ++ toString id)
        Edit editing ->
            { model | editing = Just editing } ! []

        Delete item ->
            let
                graphUpdater =
                    case item of
                        Node id ->
                            Graph.remove id

                        Edge from to ->
                            GraphEx.removeEdge from to

                        _ ->
                            identity
            in
                { model | graph = graphUpdater model.graph } ! []

        NewNode from ->
            let
                nextId =
                    Graph.nodeIdRange model.graph
                        |> Maybe.map (Tuple.second >> ((+) 1))
                        |> Maybe.withDefault 0

                node =
                    { id = nextId, label = basicEntity }

                newModel =
                    { model | graph = GraphEx.insertNode node model.graph }
            in
                update (NewEdge from nextId) newModel

        NewEdge from to ->
            let
                transformation =
                    { data =
                        { emptyTransformation
                            | translation = Vector3d ( -0.5, 0, 0 )
                        }
                    , isAnimating = False
                    , animate = \_ -> identity
                    }

                edge =
                    { from = from, to = to, label = transformation }
            in
                { model
                    | graph = GraphEx.insertEdge edge model.graph
                    , editing = Just (Edge from to)
                    , focusedUi = NoElem
                }
                    ! []

        ChangeBackgroundColor hex ->
            { model
                | backgroundColor =
                    Maybe.withDefault model.backgroundColor (hexToColor hex)
            }
                ! []

        ChangeRootId id ->
            { model | rootId = id } ! []

        ChangeColor id hex ->
            let
                setNewColor =
                    MaybeEx.unwrap identity nodeLensColor.set (hexToColor hex)
            in
                updateNode model id setNewColor ! []

        ChangeOpacity id newOpac ->
            updateNode model id (nodeLensOpacity.set newOpac) ! []

        ChangeShape id newShape ->
            updateNode model id (nodeLensShape.set newShape) ! []

        ChangeTransformation transformAttr xyorz from to newVal ->
            let
                modifier =
                    (vec3Set xyorz) newVal

                lens =
                    transformUtils transformAttr |> .edgeLens

                edgeUpdater =
                    Lens.modify lens modifier
            in
                { model | graph = GraphEx.updateEdge from to edgeUpdater model.graph } ! []

        EdgeFromTo from to newFrom newTo ->
            let
                newGraph =
                    GraphEx.getEdge from to model.graph
                        |> Maybe.map (\e -> GraphEx.updateEdgeFromTo newFrom newTo e model.graph)
                        |> Maybe.withDefault model.graph
            in
                { model | graph = newGraph, editing = Just (Edge newFrom newTo) } ! []

        NewProject ->
            { model
                | graph = Graph.fromNodesAndEdges [ Graph.Node 0 basicEntity ] []
                , editing = Just (Node 0)
            }
                ! []

        Save ->
            let
                json =
                    graphToJson model.graph
                        |> Debug.log "json"
            in
                update NoOp model

        Load title ->
            let
                newGraph =
                    Dict.fromList model.examples
                        |> Dict.get title
                        |> Maybe.withDefault model.graph
            in
                { model | graph = newGraph } ! []

        ShowOrHideUi uiAppearence ->
            let
                answer =
                    case uiAppearence of
                        Show uiElement ->
                            uiElement

                        Hide ->
                            NoElem

                        Toggle uiElement ->
                            if model.focusedUi == uiElement then
                                NoElem
                            else
                                uiElement
            in
                { model | focusedUi = answer } ! [] |> Debug.log "model after ui toggle"

        WindowResize size ->
            { model | device = El.classifyDevice size |> Debug.log "resize" }
                ! []

        _ ->
            model ! []


basicEntity =
    { color = Color.greyscale 0.65, opacity = 0.75, shape = Sphere }


updateNode model id updaterFunc =
    { model | graph = GraphEx.updateNode id updaterFunc model.graph }


toggleAnimation : Id -> Graph -> Graph
toggleAnimation id graph =
    case List.head (GraphEx.getEdgesTo id graph) of
        Nothing ->
            graph

        Just edge ->
            let
                updater e =
                    let
                        oldLabel =
                            e.label
                    in
                        { e
                            | label =
                                { oldLabel | isAnimating = not e.label.isAnimating }
                        }
            in
                GraphEx.updateEdge edge.from edge.to updater graph


subscriptions model =
    Window.resizes WindowResize
