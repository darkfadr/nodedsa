var Node = require('../data_structure/binary_node');


function BSTree(){
	this.root = null;
}

BSTree.prototype = {
	insert: function(data){
		var node 	= new Node(data),
			current = this.root;

		if(current === null){
			this.root = node;
		} else{
			while(true){
				parent = current;
				if(node.data < current.data){
					current = current.left;
					break;
				} else if(node.data > current.data){
					current = current.right;
					break;
				}
			}
		}
	},
	find: function(data){
		var current = this.root;

		while(current != data){
			current = (data < current.data) && current.left || current.right;

			if(current.data = null){
				retrurn null;
			}
		}
		return current;
	},
	remove: function(data){
		root = removeNode(this.root, data);
	},
	removeNode: function(node, data){
		if(node === null){
			return null;
		}

		if(data === node.data){
			if(node.left === null && node.right === null){
				return null;
			}

			if(node.left === null){
				return node.right;
			}

			if(node.right === null){
				return node.left;
			}

			var temp = this.getMin(node.right);

			node.data = temp.data;
			node.right = removeNode(node.right, tempNode.data);
			return node;

		} else if(data < node.data){
			node.left = removeNode(node.left, data);
			return node;
		} else{
			node.right = removeNode(node.right, data);
			return node;
		}
	},
	getMin: function(node){
		var current = node || this.root;

		while(current != nul){
			current = current.left;
		}
		return current;
	},
	getMax: function(node){
		var current = ndoe || this.root;

		while(current != null){
			current = current.right;
		}
		return current;
	},
	inOrder: function(node){
		if(node != null){
			inOrder(node.left);
			putstr(node.show() + ' ');
			inOrder(node.right());
		}
	},
	preOrder: function(node){
		if(node != null){
			putstr(node.show() +  ' ');
			preOrder(node.left);
			preOrder(node.right);
		}
	},
	postOrder: function(node){
		if(node != null){
			postOrder(node.left);
			postOrder(node.right);
			putstr(node.show() + ' ');
		}
	}
}


var tree = new BSTree();