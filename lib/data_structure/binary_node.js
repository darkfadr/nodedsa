function BinaryNode(data, lft, rht){
	this.data 	= data || null;
	this.left 	= lft || null;
	this.right 	= rht || null;
}

BinaryNode.prototype.show = function(){
	return this.data;
}

module.exports = BinaryNode;