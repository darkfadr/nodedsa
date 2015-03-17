var expect = require('chai').expect,
	Queue = require('../../lib/lists/queue');

var q = new Queue();

describe('Queue', function(){

	describe('enqueue()', function(){
		it('should add element to Queue', function(done){
			q.enqueue('first');
			q.enqueue('second');
			q.enqueue('third');
			q.enqueue('fourth');
			expect(q.length()).to.equal(4);

			q.enqueue('fifth');

			expect(q.length()).to.equal(5);
			q.clear();
			done();
		});
	});

	describe('dequeue()', function(){
		it('should remove next element from the front of the queue', function(done){
			q.enqueue('first');
			q.enqueue('second');
			q.enqueue('third');
			q.enqueue('fourth');
			expect(q.length()).to.equal(4);

			q.dequeue();

			expect(q.length()).to.equal(3);
			expect(q.peek()).to.equal('second');
			q.clear();
			done();
		});
	});

	describe('peek()', function(){
		it('should peek for the next element in the queue', function(done){
			q.enqueue('first');
			q.enqueue('second');
			q.enqueue('third');
			q.enqueue('fourth');
			expect(q.length()).to.equal(4);

			expect(q.peek()).to.equal('first');
			q.clear();
			done();
		});
	});

	describe('front()', function(){
		it('should return the element at the friont of the queue', function(done){
			q.enqueue('first');
			q.enqueue('second');
			q.enqueue('third');
			q.enqueue('fourth');
			expect(q.length()).to.equal(4);

			expect(q.front()).to.equal('first');
			q.clear();
			done();
		});
	});

	describe('back()', function(){
		if('should return the element at the back of the queue', function(done){
			q.enqueue('first');
			q.enqueue('second');
			q.enqueue('third');
			q.enqueue('fourth');
			expect(q.length()).to.equal(4);

			expect(q.back()).to.equal('fourth');
			q.clear();
			done();
		});
	});

	describe('clear()', function(){
		it('should clear the queue', function(done){
			q.enqueue('first');
			q.enqueue('second');
			q.enqueue('third');
			q.enqueue('fourth');
			expect(q.length()).to.equal(4);

			q.clear();

			expect(q.length()).to.equal(0);
			done();
		});
	});
});