import * as search from '../search';
import { GraphNode, Stack, HeuristicFunction, AlgorithmFunction } from '../types';

const getPath = (
  target: string,
  graph: GraphNode,
  algorithm: AlgorithmFunction,
  heuristic?: HeuristicFunction
): string[] => {
  let path: string[];
  let job: { done?: boolean; value?: string[] } = {};
  let searching = (search as any)(target, graph, algorithm, heuristic);

  while(!job.done) {
    job = searching.next();
    path = job.value ? job.value : path;
  }

  return path!;
};

export { getPath };
