// var Vertex = require('../data_structure/vertex');

function Graph(v){
	this.vertices = v;
	this.edges = 0;
	this.adj = [];

	for(var i = 0; i < this.vertices; i++){
		this.adj[i] = [];
		this.adj[i].push('');
	}
}

Graph.prototype = {
	add: function(v, w){
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges++;
	},
	showGraph: function(){
		for(var i=0; i < this.vertices; i++){
			for (var j=0; j < this.vertices; j++) {
				if(this.adj[i][j]){
					console.log(i + ' --> ' + this.adj[i][j]);
				}
			}
		}
	}
}

module.exports = Graph;