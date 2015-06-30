var Node = require('../data_structure/binary_node');

function BSTree(){
	this.root 	= null;
	this.count 	= 0;
}

BSTree.prototype = {
	insert: function(data){
		var node 	= new Node(data),
			current = this.root,
			parent 	= current;

		if(current === null){
			this.root = node;
			this.count++;
		} else {
			while(true){
				parent = current;
				if(node.data < current.data){
					current = current.left;
					if(current === null){
						parent.left = node;
						this.count++;
						break;
					}
				} else {
					current = current.right;
					if(current === null){
						parent.right = node;
						this.count++;
						break;
					}
				}
			}
		}
	},
	find: function(data){
		var current = this.root;

		while(current !== data){
			current = (data < current.data) && current.left || current.right;

			if(current.data === null){
				return null;
			}
		}
		return current;
	},
	remove: function(data){
		if(this.find !== null){
			this.removeNode(this.root, data);
			count--;
			return 1;
		}

		return -1;
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
			node.right = this.emoveNode(node.right, temp.data);
			return node;

		} else if(data < node.data){
			node.left = this.removeNode(node.left, data);
			return node;
		} else{
			node.right = this.removeNode(node.right, data);
			return node;
		}
	},
	getMin: function(node){
		var current = node || this.root;

		while(current !== null){
			current = current.left;
		}
		return current;
	},
	getMax: function(node){
		var current = node || this.root;
		while(current !== null){
			current = current.right;
		}
		return current;
	},
	length: function(){
		return this.count;
	},
	inOrder: function(node){
		if(node !== null){
			this.inOrder(node.left);
			putstr(node.show() + ' ');
			this.inOrder(node.right());
		}
	},
	preOrder: function(node){
		if(node !== null){
			putstr(node.show() +  ' ');
			this.preOrder(node.left);
			this.preOrder(node.right);
		}
	},
	postOrder: function(node){
		if(node !== null){
			this.postOrder(node.left);
			this.postOrder(node.right);
			putstr(node.show() + ' ');
		}
	}
}

module.exports = BSTree;