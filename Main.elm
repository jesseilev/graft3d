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


model : Model
model =
    { time = 0
    , rootId = 0
    , graph = Examples.graph1
    , examples = Examples.loadJson
    , editing = Just (Edge 0 1)
    , menuHover = NoMenu
    }


main =
    Html.program
        { init = update (Load "Simple") model
        , view = View.root
        , update = update
        , subscriptions = \_ -> Sub.none
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
            in
                { model | graph = graphUpdater model.graph } ! []

        NewNode from ->
            let
                entity =
                    { color = Color.greyscale 0.5, opacity = 0.5, shape = Box }

                nextId =
                    Graph.nodeIdRange model.graph
                        |> Maybe.map (Tuple.second >> ((+) 1))
                        |> Maybe.withDefault 0

                node =
                    { id = nextId, label = entity }

                newModel =
                    { model | graph = GraphEx.insertNode node model.graph }
            in
                update (NewEdge from nextId) newModel

        NewEdge from to ->
            let
                transformation =
                    { data = emptyTransformation, isAnimating = False, animate = \_ -> identity }

                edge =
                    { from = from, to = to, label = transformation }
            in
                { model
                    | graph = GraphEx.insertEdge edge model.graph
                    , editing = Just (Edge from to)
                    , menuHover = NoMenu
                }
                    ! []

        ChangeColor nodeId hex ->
            let
                nodeUpdater =
                    hexToColor hex
                        |> Maybe.map (nodeLensColor.set)
                        |> Maybe.withDefault identity
            in
                { model | graph = GraphEx.updateNode nodeId nodeUpdater model.graph } ! []

        ChangeOpacity id newOpac ->
            let
                nodeUpdater =
                    nodeLensOpacity.set newOpac
            in
                { model | graph = GraphEx.updateNode id nodeUpdater model.graph } ! []

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

        ChangeMenuHover setter menuHover ->
            let
                answer =
                    case setter of
                        Show ->
                            menuHover

                        Hide ->
                            NoMenu

                        Toggle ->
                            if model.menuHover == menuHover then
                                NoMenu
                            else
                                menuHover
            in
                { model | menuHover = answer } ! []

        _ ->
            model ! []


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
    Sub.none
