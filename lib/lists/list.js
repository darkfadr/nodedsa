/**
* List
*/

function List(){
	this.size = 0;
	this._pos = 0;
	this.dataStore = [];
}

List.prototype.append = function(element){
	this.dataStore[this.size++] = element;
}

List.prototype.remove = function(element){
	function find(element){
		for(var i=0; i < this.dataStore.length; i++){
			if(this.dataStore[i] === element){
				return i;
			}
		}

		return -1;
	}

	var found = find(element);

	if(found > -1){
		this.dataStore.splice(found, 1);
		this.size--;
		return true;
	}

	return false;
}
List.prototype.length = function(){
	return this.size;
}
List.prototype.contains = function(element){
	this.dataStore.foreEach(function(el){
		if (element === el){
			return true
		}
	});

	return false;
}
List.prototype.front = function(){
	this._pos = 0;
}
List.prototype.end = function(){
	this._pos = this.dataStore.length - 1;
}
List.prototype.prev = function(){
	this._pos > 0 && _pos--;
}
List.prototype.next = function(){
	this._pos  < this.size -1 && this._pos++;
}
List.prototype.curPos = function(){
	return this._pos;
}
List.prototype.moveTo = function(index){
	this._pos = index;
}
List.prototype.getElement = function(index){
	var i = index || this._pos;
	return this.dataStore[i];
}

List.prototype.clear = function(){
	delete this.dataStore;
	this.dataStore = [];
	this.size = this.pos = 0;
}

List.prototype.toString = function(){
	return this.dataStore
}

module.exports = List;