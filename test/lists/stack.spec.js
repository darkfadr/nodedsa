var expect = require('chai').expect,
    Stack  = require('../../lib/lists/stack');

var stack = new Stack();


describe('Stack', function(){
    beforeEach(function(){
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.length()).to.equal(3);
    });

    afterEach(function(){
        stack.clear();
    });

    describe('push()', function(){
        it('should push element to the top of the stack', function(done){
            stack.push(4);
            expect(stack.length()).to.equal(4);
            done();
        });
    })

    describe('pop()', function(){
        it('should pop the element at the top of the stack', function(done){
            stack.pop();
            expect(stack.length()).to.equal(2);
            done();
        });
    });

    describe('peek()', function(){
        it('should return the element at the top of the stack', function(done){
            expect(stack.peek()).to.equal(3);
            done();
        });
    });

    describe('clear()', function(){
        it('should clear and empty out thte stack', function(done){
            stack.clear();
            expect(stack.length()).to.equal(0);
            done();
        });
    })
});
