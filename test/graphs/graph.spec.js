var graph,
	expect = require('chai').expect,
	should = require('chai').should(),
	Graph = require('../../lib/graphs/graph');

describe('Graph', function(){
	beforeEach(function(){
		
	});

	describe('add', function() {
		it('should add an edge to the graph', function(done){
			graph = new Graph(5);

			graph.add(0, 1);
			graph.add(0, 2);
			graph.add(1, 3);
			graph.add(2, 4);
			graph.showGraph();
			done();
		});
	});
})
