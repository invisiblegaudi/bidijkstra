const bidijkstra = require('./bidijkstra');

const findAtoZ = async (): Promise<string[]> => {
    const path = await bidijkstra('z','graphBFS','charDist','a','graphBFSreverse','charDistRev');
    console.log('Match found! Result of both paths converging:', path);

    return path;
};

findAtoZ();

export { findAtoZ };
