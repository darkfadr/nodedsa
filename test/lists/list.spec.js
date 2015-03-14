var list,
	chai = require('chai'),
	List = require('../../lib/lists/list');

beforeEach(function(){
	list = new List();
});

describe('List', function(){
	it('append', function(done){
		list.append('Hello');
		console.log(list.length(), list);

		done();
	});
});