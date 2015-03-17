var Node = require('./node');

function BinaryNode(data){
	this.data = data;
	this.prev = null;
}

// BinaryNode.prototype.prev = function(data){
// 	data && this.prev = data || return this.prev;
// }

module.exports = BinaryNode;