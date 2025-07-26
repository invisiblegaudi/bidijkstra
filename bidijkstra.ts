import { spawn, ChildProcess } from 'child_process';
import { GraphNode, HeuristicFunction } from './types';

const bidijkstra = (
  node1: string,
  graph1: GraphNode,
  heuristic1: HeuristicFunction,
  node2: string,
  graph2: GraphNode,
  heuristic2: HeuristicFunction
): Promise<string[]> => {

  const search1: ChildProcess = spawn('node', ['./searchprocess.js', node1, JSON.stringify(graph1), 'dijkstra', heuristic1.name]);
  const search2: ChildProcess = spawn('node', ['./searchprocess.js', node2, JSON.stringify(graph2), 'dijkstra', heuristic2.name]);

  let path1: string[] = [];
  let path2: string[] = [];
  let done: (value: string[]) => void;

  const result = new Promise<string[]>(resolve => {
    done = resolve;
  });

   // console.log(search1)
    // TODO:
    // const start = () => {
    //   const search1.send('start',[node1,graph1,'dijkstra',heuristic1])
    //   const search2.send('start',[node2,graph2,'dijkstra',heuristic2])
    // }

    const finish = (): void => {

      search1.kill();
      search2.kill();
      const combinedPath = new Set([...path1, ...path2.reverse()]);

      return done([...combinedPath]);
    };

    const status1 = (search: { path: string[] }): void => {

      path1 = search.path;

      return path1.reduce((m: boolean, n: string) => path2.includes(n), false) ? finish() : undefined;
    };

    const status2 = (search: { path: string[] }): void => {

      path2 = search.path;

      return path2.reduce((m: boolean, n: string) => path1.includes(n), false) ? finish() : undefined;
    };

    search1.on('message', status1);
    search2.on('message', status2);
 
  return result;
};

export = bidijkstra;
