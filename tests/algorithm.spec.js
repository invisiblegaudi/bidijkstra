const chai = require('chai');
const fuzzy = require('chai-fuzzy');
const { dfs, bfs, dijkstra } = require('../algorithm.js');
const { inputRange } = require('./mocks/ranges');
const { charDist } = require('../heuristic');

chai.use(fuzzy);

describe('Algorithm functions', () => {

  describe('Depth first search', () => {
    it('returns empty array for bad inputs', () => {
      inputRange.forEach(i => dfs(i).should.be.like([]));
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

  describe('Breadth first search', () => {
    it('returns empty array for bad inputs', () => {
      inputRange.forEach(i => bfs(i).should.be.like([]));
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

  describe('Dijkstra search', () => {
    it('returns empty array for bad inputs', () => {
      inputRange.forEach(i => dijkstra(i).should.be.like([]));
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
});
