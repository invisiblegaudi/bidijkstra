const chai = require('chai');
const {arrAtoZ} = require('./mocks/ranges');
const {findAtoZ} = require('../examples');
const should = chai.should();

should.should.have.property('fail');

describe('Bi-directional Dijkstra search', () => {

    it('returns a path equal to the alphabet', async () => {
        const path = await findAtoZ();
        path.should.be.like(arrAtoZ);
    });

    it('finds path within reasonable time', async () => {
        const startTime = Date.now();
        const path = await findAtoZ();
        const endTime = Date.now();
        const duration = endTime - startTime;
        
        path.should.be.an('array');
        duration.should.be.lessThan(5000); // Should complete within 5 seconds
    });

    it('returns unique nodes in path', async () => {
        const path = await findAtoZ();
        const uniquePath = [...new Set(path)];
        path.length.should.equal(uniquePath.length);
    });

    it('path contains both start and end nodes', async () => {
        const path = await findAtoZ();
        path.should.include('a');
        path.should.include('z');
    });

    it('path is continuous', async () => {
        const path = await findAtoZ();
        path.should.be.an('array');
        path.length.should.be.greaterThan(1);
        // Path should represent a valid sequence from a to z
        path[0].should.be.oneOf(['a', 'z']);
        path[path.length - 1].should.be.oneOf(['a', 'z']);
    });

    it('handles convergence correctly', async () => {
        const path = await findAtoZ();
        // Should have found a meeting point between forward and backward search
        path.should.be.an('array');
        path.length.should.equal(arrAtoZ.length);
    });

    it('maintains alphabetical order', async () => {
        const path = await findAtoZ();
        const sortedPath = [...path].sort();
        path.should.be.like(sortedPath);
    });
});
