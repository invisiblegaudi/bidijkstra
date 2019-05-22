Bidijkstra (Bi-directional Dijkstra Algorithm)
---

This package is a rewrite of the algorithmic component of an art project I did in Sept 2017 for the DeptfordX festival in London. It was intended to work with semantic graphs rather than the usual spacial.

Originally it was really OO style which is no longer cool, so I aim to make it more

* elegant
* immutable
* functional

In addition, I wanted it to

* have reusable components (where possible)
* work with an almost schema-less data i.e. most simplified expression of a graph data structure
* have a pure search function allowing extensibilty of node structure (not fully there yet)
* demonstrate the relationship & difference between searches
* make use of es6+
* be fun to write (e.g. no semicolons, yep.)

Usage
---
Right now if you want to use it you may only use a preset heuristic function and/or graph.
These are limited to enough for me to write tests but you can add your own.
Please see the examples file for more details

TODO
---
Obviously (at only v0.5) this just only works and there much more to do 

* more functional
* optimisation
* browser compatable
* chainable heuristic patterns
* 3rd party symantic graph support & JSON-LD
* fix the tests!
* lovely comments
