var Node = require('../data_structure/node');

function LinkedList(){
	this.head = this.tail = new Node('head');
}

LinkedList.prototype = {
	find: function(data){
		var node = this.head;

		while(node && node.data !== data){
			node = node.next;
		}
		return node;
	},
	insert: function(data, item){
		var node = new Node(data),
			curr = this.find(item);

		if(curr){
			node.next = curr.next;
			curr.next = node;
		} else{
			this.append(data);
		}
	},
	append: function(data){
		var node = new Node(data),
			curr = this.head;

		if(this.head.next === null){
			this.head.next = node;
		} else {
			this.tail.next = node;
		}

		this.tail = node;
	},
	remove: function(node){
		var prev,
			curr = this.head;

		while(curr && curr.data !== node){
			prev = curr;
			curr = curr.next;
		}

		prev.next = curr.next;
		curr.next = null;
	}
}

module.exports = LinkedList;