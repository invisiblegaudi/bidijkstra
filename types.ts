export interface GraphNode {
  [key: string]: any;
}

export type Stack = GraphNode[];
export type Visited = string[];
export type Graph = GraphNode[] | any;

export interface HeuristicFunction {
  (a: string, b: string): number;
}

export interface AlgorithmFunction {
  (node?: GraphNode, stack?: Stack, visited?: Visited, heuristic?: HeuristicFunction): Stack;
}

export interface DijkstraNode {
  [key: string]: {
    adjacent: GraphNode[];
    distance: number;
  };
}
