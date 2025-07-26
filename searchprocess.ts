import * as algorithms from './algorithm';
import * as heuristics from './heuristic';
import * as bfs from './bfs.mock.json.js';
import * as bfs_rev from './bfs_rev.mock.json.js';
import * as dfs from './dfs.mock.json.js';
import { subscribeToJob } from './job';
import * as mockGraphs from './tests/mocks/graphs';
import { GraphNode, HeuristicFunction, AlgorithmFunction } from './types';

const searchProcess = async (...args: string[]): Promise<void> => {

  const [target, graph, algorithm, heuristic] = process && process.argv ? process.argv.slice(2) : [...args];
  const graphs: { [key: string]: GraphNode } = { bfs, dfs, ...mockGraphs };

  try {
    await subscribeToJob(
      process,
      target,
      (graph ? graphs[graph] : (() => null)) as GraphNode,
      (algorithm ? (algorithms as any)[algorithm] : (() => null)) as AlgorithmFunction,
      (heuristic ? (heuristics as any)[heuristic] : (() => null)) as HeuristicFunction,
    );
  } catch(e) {
    throw new Error(e as string);
  }
};

searchProcess();
