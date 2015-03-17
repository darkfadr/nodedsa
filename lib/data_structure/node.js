function Node(data){
	this.data = data || null;
	this.next = null;
}

Node.prototype.next = function(node){
	node && this.next = node || return this.next;
}

module.exports = Node;