function Dictionary(){
	this.dataStore = new Array();
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
		var all = '';
		for each(var key in Object.keys(this.dataStore)){
			all += key + '+> ' + this.dataStore[key]; 
		}	

		return all;
	},
	length: function(){
		var count = 0; 
		for each(var key in Object.keys(this.dataStore)){
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