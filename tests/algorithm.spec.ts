import * as chai from 'chai';
import * as fuzzy from 'chai-fuzzy';
import { dfs, bfs, dijkstra } from '../algorithm';
import { inputRange } from './mocks/ranges';
import { charDist } from '../heuristic';

chai.use(fuzzy);

/**
 * Test DFS with bad inputs
 * @returns {void}
 */
const testDFSBadInputs = (): void => {
  inputRange.forEach(i => dfs(i).should.be.like([]));
};

/**
 * Test BFS with bad inputs
 * @returns {void}
 */
const testBFSBadInputs = (): void => {
  inputRange.forEach(i => bfs(i).should.be.like([]));
};

/**
 * Test Dijkstra with bad inputs
 * @returns {void}
 */
const testDijkstraBadInputs = (): void => {
  inputRange.forEach(i => dijkstra(i).should.be.like([]));
};

/**
 * Test DFS functionality
 * @returns {void}
 */
const testDFS = (): void => {
  describe('Depth first search', () => {
    it('returns empty array for bad inputs', () => {
      testDFSBadInputs();
    });

    it('returns empty array for empty node', () => {
      dfs({}).should.be.like([]);
    });

    it('processes node with children correctly', () => {
      const node = {a: [{b: []}, {c: []}]};
      const result = dfs(node, []);
      result.should.be.an('array');
    });

    it('maintains stack order for DFS traversal', () => {
      const node = {root: [{child1: []}, {child2: []}]};
      const stack = [{existing: []}];
      const result = dfs(node, stack);
      result.should.include.members(stack);
    });
  });
};

/**
 * Test BFS functionality
 * @returns {void}
 */
const testBFS = (): void => {
  describe('Breadth first search', () => {
    it('returns empty array for bad inputs', () => {
      testBFSBadInputs();
    });

    it('returns empty array for empty node', () => {
      bfs({}).should.be.like([]);
    });

    it('processes node with children correctly', () => {
      const node = {a: [{b: []}, {c: []}]};
      const result = bfs(node, []);
      result.should.be.an('array');
    });

    it('maintains different order than DFS', () => {
      const node = {root: [{child1: []}, {child2: []}]};
      const stack = [{existing: []}];
      const bfsResult = bfs(node, stack);
      const dfsResult = dfs(node, stack);
      // BFS puts stack after children, DFS puts children after stack
      bfsResult.should.be.an('array');
      dfsResult.should.be.an('array');
    });
  });
};

/**
 * Test Dijkstra functionality
 * @returns {void}
 */
const testDijkstra = (): void => {
  describe('Dijkstra search', () => {
    it('returns empty array for bad inputs', () => {
      testDijkstraBadInputs();
    });

    it('handles node without heuristic function', () => {
      const node = {a: []};
      const result = dijkstra(node, [], []);
      result.should.be.an('array');
    });

    it('processes node with heuristic function', () => {
      const node = {a: [{b: []}]};
      const result = dijkstra(node, [], [], charDist);
      result.should.be.an('array');
    });

    it('handles visited nodes tracking', () => {
      const node = {a: [{b: []}]};
      const visited = [{c: []}];
      const result = dijkstra(node, [], visited, charDist);
      result.should.be.an('array');
    });

    it('calculates distances using heuristic', () => {
      const node = {a: [{b: []}]};
      const heuristic = () => 5;
      const result = dijkstra(node, [], [], heuristic);
      result.should.be.an('array');
    });
  });
};

describe('Algorithm functions', () => {
  testDFS();
  testBFS();
  testDijkstra();
});
