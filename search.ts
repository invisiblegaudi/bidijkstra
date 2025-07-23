import { GraphNode, Graph, Stack, Visited, AlgorithmFunction, HeuristicFunction } from './types';
import { getNode } from './graph';

interface PopResult {
  next: GraphNode;
  stack: Stack;
}

const pop = (stack: Stack = []): PopResult => 
  Object.assign({}, { 
    next: stack.slice(0, 1)[0], 
    stack: stack.slice(1) 
  });

function* search(
  target: string = '', 
  graph: Graph = [], 
  algorithm: AlgorithmFunction = () => [], 
  heuristic?: HeuristicFunction
): Generator<Visited, Visited, unknown> {

  let found = false;
  let stack: Stack = graph instanceof Array ? graph.slice() : [];
  let visited: Visited = [];

  while (stack.length && !found) {
    let next: GraphNode;
    ({ next, stack } = pop(stack));

    const node = getNode(next);
    const adjacentNodes = algorithm(next, stack.slice(), visited.slice(), heuristic);

    visited = [...visited, ...(node ? [node] : [])];
    found = node && node === target;
    stack = [...(adjacentNodes && adjacentNodes.length ? adjacentNodes : stack)];

    yield visited;
  }

  yield visited;
}

export default search;
