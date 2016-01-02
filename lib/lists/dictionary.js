function Dictionary(){
	this.dataStore = [];
}

Dictionary.prototype = {
	add: function(key, value){
		this.dataStore[key] = value;
		this.dataStore.sort();
	},
	find: function(key){
		return this.dataStore[key];
	},
	remove: function(key){
		delete this.dataStore[key];
	},
	showAll: function(){
		var key, all = '';
		for each(key in Object.keys(this.dataStore)){
			all += key + '+> ' + this.dataStore[key];
		}

		return all;
	},
	length: function(){
		var key, count = 0;
		for each(key in Object.keys(this.dataStore)){
			++count;
		}
		return count;
	},
	clear: function(){
		for each(var key in Object.keys(this.dataStore)){
			delete this.dataStore[key];
		}
	}
}