function Stack(){
	this.dataStore = [];
	this._top = 0;
}

Stack.prototype = {
	push: function(element){
		this.dataStore[this._top++] = element;
	},
	pop: function(){
		return this.dataStore[--this._top];
	},
	peek: function(){
		return this.dataStore[this._top-1];
	},
	length: function(){
		return this._top;
	},
	clear: function(){
		this._top = 0;
	},
	toString: function(){
		return this.dataStore;
	}
}

module.exports = Stack;