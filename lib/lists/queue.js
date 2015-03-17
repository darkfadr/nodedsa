function Queue(){
	this.dataStore = [];
	this.size = 0;
}

Queue.prototype = {
	enqueue:function(element){
		this.dataStore.push(element);
		this.size++;
	},
	dequeue: function(){
		this.size--;
		return this.dataStore.shift();
	},
	peek: function(){
		return this.front();
	},
	front: function(){
		return this.dataStore[0];
	},
	back: function(){
		return this.dataStore[this.dataStore.length -1];
	},
	empty: function(){

	},
	clear: function(){
		this.dataStore = [];
		this.size = 0;
	},
	length: function(){
		return this.size;
	},
	toString: function(){
		var str = '';
		this.dataStore.forEach(function(el){
			str += el + '\n';
		});
		return str;
	}
}

module.exports = Queue;