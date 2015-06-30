var expect = require('chai').expect,
	BSTree = require('../../lib/tree/bst');

var bst = new BSTree();

describe('BSTree', function(){
	describe('insert()', function(){
		it('should insert a node into the tree', function(done){
			bst.insert(50);
			bst.insert(25);
			bst.insert(75);
			bst.insert(35);

			expect(bst.length()).to.equal(4);
			done();
		});
	});
	describe('getMin()', function(){
		it('should return the node with the smallest weight', function(){
			expect(bst.getMin()).to.equal(25);
			console.log(bst.getMin());
			done();
		});
	});
	describe('getMax()', function(){
		it('should return the node with the highest weight', function(done){
			expect(bst.getMax()).to.equal(75);
			done();
		});
	});
});