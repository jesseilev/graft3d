module Graph.Extra exposing (..)

import Graph exposing (Graph)
import IntDict
import List.Extra as ListEx
import Maybe.Extra as MaybeEx



getEdge : Graph.NodeId -> Graph.NodeId -> Graph n e -> Maybe (Graph.Edge e)
getEdge from to =
    Graph.edges >> ListEx.find (edgeEqualsFromTo from to)


getNode nodeId =
    Graph.get nodeId >> Maybe.map .node


neighborCount graph node =
    let adjCount = IntDict.keys >> List.length in
    Graph.get node.id graph
        |> Maybe.map
            (\{incoming, outgoing} -> adjCount incoming + adjCount outgoing)
        |> Maybe.withDefault 0
        |> Debug.log "neighborcount"


edgeEqualsFromTo from to edge =
    edge.from == from && edge.to == to


edgeEquals : Graph.Edge e -> Graph.Edge e -> Bool
edgeEquals edge =
    edgeEqualsFromTo edge.from edge.to


updateNode id updater =
    updateNodes
        <| List.map (\n -> if n.id == id then updater n else n)


updateNodes updater graph =
    Graph.fromNodesAndEdges (updater (Graph.nodes graph)) (Graph.edges graph)


updateEdge from to updater =
    updateEdges
        <| List.map (\e -> if edgeEqualsFromTo from to e then updater e else e)


updateEdges : (List (Graph.Edge e) -> List (Graph.Edge e)) -> Graph n e -> Graph n e
updateEdges updater graph =
    Graph.fromNodesAndEdges (Graph.nodes graph) (updater (Graph.edges graph))


insertEdge : Graph.Edge e -> Graph n e -> Graph n e
insertEdge newEdge graph =
    let
        alreadyExists =
            ListEx.find (edgeEquals newEdge) (Graph.edges graph)
                |> MaybeEx.isJust
                |> Debug.log "edge already exists?"

        newEdges =
            if alreadyExists then [] else [ newEdge ]
    in
        Graph.fromNodesAndEdges (Graph.nodes graph)
            (Graph.edges graph ++ newEdges)
