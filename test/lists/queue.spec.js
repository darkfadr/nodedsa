var q,
	expect = require('chai').expect,
	Queue = require('../../lib/lists/queue');

describe('Queue', function(){
	beforeEach(function(){
		q = new Queue();

		q.enqueue('first');
		q.enqueue('second');
		q.enqueue('third');
		q.enqueue('fourth');
	});

	describe('enqueue()', function(){
		it('should add element to Queue', function(done){
			expect(q.length()).to.equal(4);
			q.enqueue('fifth');
			expect(q.length()).to.equal(5);
			done();
		});
	});

	describe('dequeue()', function(){
		it('should remove next element from the front of the queue', function(done){
			expect(q.length()).to.equal(4);
			q.dequeue();
			expect(q.length()).to.equal(3);
			expect(q.peek()).to.equal('second');
			done();
		});
	});

	describe('peek()', function(){
		it('should peek for the next element in the queue', function(done){
			expect(q.peek()).to.equal('first');
			done();
		});
	});

	describe('front()', function(){
		it('should return the element at the friont of the queue', function(done){
			expect(q.front()).to.equal('first');
			done();
		});
	});

	describe('back()', function(){
		if('should return the element at the back of the queue', function(done){
			expect(q.back()).to.equal('fourth');
			done();
		});
	});

	describe('clear()', function(){
		it('should clear the queue', function(done){
			expect(q.length()).to.equal(4);
			q.clear();
			expect(q.length()).to.equal(0);
			done();
		});
	});
});