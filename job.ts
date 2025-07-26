import * as search from './search';
import { GraphNode, HeuristicFunction, AlgorithmFunction } from './types';

interface ProcessLike {
  send: (data: any) => void;
}

const searchJob = (
  subscriber: ProcessLike = { send: () => null },
  target: string,
  graph: GraphNode,
  algorithm: AlgorithmFunction,
  heuristic?: HeuristicFunction
): string[] => {

  const searching = (search as any)(target, graph, algorithm, heuristic);

  let path: string[];
  let job = searching.next();

  while(!job.done) {

    path = job.value;
    subscriber.send({ path });
    job = searching.next();
  }

  return path!;

};

const subscribeToJob = (
  sub: ProcessLike | null,
  target: string,
  graph: GraphNode,
  algorithm: AlgorithmFunction,
  heuristic?: HeuristicFunction
): string[] | Error => sub && sub.send
      ? searchJob(sub, target, graph, algorithm, heuristic) : new Error('Subscriber not a valid process!!');

export { searchJob, subscribeToJob };
