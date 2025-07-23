import { GraphNode, Stack, Visited, HeuristicFunction, AlgorithmFunction, DijkstraNode } from './types';
import { getChildren, getNode } from './graph';

const dfs: AlgorithmFunction = (node: GraphNode = {}, stack: Stack = []): Stack => [
  ...getChildren(node),
  ...stack,
];

const bfs: AlgorithmFunction = (node: GraphNode = {}, stack: Stack = []): Stack => [
  ...stack,
  ...getChildren(node),
];

const dijkstra: AlgorithmFunction = (
  node: GraphNode = {},
  stack: Stack = [],
  visited: Visited = [],
  heuristic: HeuristicFunction = () => Infinity
): Stack => {
  
  const getAdjacent = (n: GraphNode): GraphNode[] => 
    "adjacent" in getChildren(n) ? (getChildren(n) as any).adjacent : getChildren(n);
  
  const calcDist = (d: GraphNode, j: GraphNode): number => 
    heuristic(getNode(d), getNode(j));
  
  const getDistance = (n: DijkstraNode): number => 
    Object.values(n)[0].distance;
  
  const dijkNode = (n: GraphNode): DijkstraNode => Object.assign(
    {},
    {[getNode(n)]: {
      adjacent: getAdjacent(n),
      distance: calcDist(node, n)
    }}
  );

  const dijkStack: Stack = [
    ...getAdjacent(node),
    ...stack
  ]
    .filter((n: GraphNode) => !visited.includes(getNode(n)))
    .map(dijkNode)
    .sort((d: DijkstraNode, j: DijkstraNode) => getDistance(d) - getDistance(j));

  return dijkStack;
};

export { dfs, bfs, dijkstra };
