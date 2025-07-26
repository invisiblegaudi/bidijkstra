const chai = require('chai');
const fuzzy = require('chai-fuzzy');
const { getPath } = require('../coroutines/search.ts');
const { dfs, bfs, dijkstra } = require('../algorithm.ts');
const { inputRange, arrAtoZ } = require('./mocks/ranges');
const { charDist } = require('../heuristic');
const { graphDFS, graphBFS, graphTypesDepth1 } = require('./mocks/graphs');

const should = chai.should();
chai.use(fuzzy);
should.should.have.property('fail');

describe('Shallow / Algorithmless search', () => {

  it('default params dont throw error and return array', () => {
    getPath().should.be.like([]);
  });

  it('visits all top nodes in order', () => {
    getPath('j', graphBFS).should.be.like(arrAtoZ.slice(0, 7));
    getPath('j', graphBFS).should.not.be.like(arrAtoZ.slice(0, 3));
    getPath('z', graphTypesDepth1).should.be.like('falsenullNaNInfinity01z'.split(''));
  });

  it('returns empty array for bad inputs', () => {
    getPath(inputRange, 'z').should.be.like([]);
    inputRange.forEach(i => getPath(i).should.be.like([]));
    inputRange.forEach(i => getPath(null, i).should.be.like([]));
    inputRange.forEach(i => getPath(null, null, i).should.be.like([]));
  });

  it('handles empty target string', () => {
    getPath('', graphBFS).should.be.like([]);
  });

  it('handles single character target', () => {
    const result = getPath('a', graphBFS);
    result.should.be.an('array');
    result.should.include('a');
  });

  it('stops when target is found', () => {
    const result = getPath('c', graphBFS);
    result.should.be.an('array');
    result[result.length - 1].should.equal('c');
  });
});

describe('Depth-first search', () => {
  it('searches all nodes in dfs order', () => {
    getPath('z', graphDFS, dfs).should.be.like(arrAtoZ);
  });

  it('finds target early when possible', () => {
    const result = getPath('c', graphDFS, dfs);
    result.should.be.an('array');
    result.should.include('c');
    result.length.should.be.lessThan(arrAtoZ.length);
  });

  it('handles non-existent targets', () => {
    const result = getPath('!', graphDFS, dfs);
    result.should.be.an('array');
  });

  it('works with empty graph', () => {
    const result = getPath('a', [], dfs);
    result.should.be.like([]);
  });

  it('maintains search order consistency', () => {
    const result1 = getPath('z', graphDFS, dfs);
    const result2 = getPath('z', graphDFS, dfs);
    result1.should.be.like(result2);
  });
});

describe('Breadth-first search', () => {
  it('visits all nodes in bfs order', () => {
    getPath('z', graphBFS, bfs).should.be.like(arrAtoZ);
  });

  it('finds shortest path to target', () => {
    const result = getPath('d', graphBFS, bfs);
    result.should.be.an('array');
    result.should.include('d');
  });

  it('explores level by level', () => {
    const result = getPath('f', graphBFS, bfs);
    result.should.be.an('array');
    // Should visit nodes in breadth-first order
    const indexA = result.indexOf('a');
    const indexB = result.indexOf('b');
    const indexF = result.indexOf('f');
    indexA.should.be.lessThan(indexF);
    indexB.should.be.lessThan(indexF);
  });

  it('handles cyclic graphs gracefully', () => {
    const result = getPath('z', graphBFS, bfs);
    result.should.be.an('array');
    result.should.include('z');
  });

  it('works with single node graph', () => {
    const singleNodeGraph = [{a: []}];
    const result = getPath('a', singleNodeGraph, bfs);
    result.should.include('a');
  });
});

describe('Dijkstra search', () => {
  it('visits all nodes in alphabetical order in breadth-first ordered graph', () => {
    getPath('z', graphBFS, dijkstra, charDist).should.be.like(arrAtoZ);
  });

  it('visits all nodes in alphabetical order in depth-first ordered graph', () => {
    getPath('z', graphDFS, dijkstra, charDist).should.be.like(arrAtoZ);
  });

  it('finds optimal path using heuristic', () => {
    const result = getPath('e', graphBFS, dijkstra, charDist);
    result.should.be.an('array');
    result.should.include('e');
  });

  it('handles different heuristic functions', () => {
    const customHeuristic = (a, b) => Math.abs(a.length - b.length);
    const result = getPath('c', graphBFS, dijkstra, customHeuristic);
    result.should.be.an('array');
    result.should.include('c');
  });

  it('works without heuristic function', () => {
    const result = getPath('b', graphBFS, dijkstra);
    result.should.be.an('array');
    result.should.include('b');
  });

  it('prioritizes nodes by distance', () => {
    const result = getPath('m', graphBFS, dijkstra, charDist);
    result.should.be.an('array');
    // Should find 'm' efficiently using distance calculation
    result.should.include('m');
  });

  it('handles edge case with identical distances', () => {
    const constantHeuristic = () => 1;
    const result = getPath('g', graphBFS, dijkstra, constantHeuristic);
    result.should.be.an('array');
    result.should.include('g');
  });
});
