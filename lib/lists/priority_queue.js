var Queue = require('./queue');

/* composed with obejct with following properties
{
	name: 'ObjectName',
	code: 1         		//1 => high,    5 => low
}
*/

function PriorityQueue(){}

PriorityQueue.prototype = new Queue();

PriorityQueue.prototype.dequeue = function(){
	var priority = this.front().code;

	this.dataStore.forEach(function(obj, i){
		priority = obj.code < priority && obj.code || priority;
	});

	return this.dataStore.splice(priority, 1);
}

module.exports = PriorityQueue;