var tree,
	expect = require('chai').expect,
	should = require('chai').should(),
	BSTree = require('../../lib/tree/bst');

describe('BSTree', function(){
	beforeEach(function(){
		tree = new BSTree();
		tree.insert(23);
		tree.insert(45);
		tree.insert(16);
		tree.insert(37);
		tree.insert(3);
		tree.insert(99);
		tree.insert(22);
	});

	describe('insert()', function(){
		it('should insert a node into the tree', function(done){
			expect(tree.length()).to.equal(7);
			done();
		});
	});

	describe('remove()', function(){
		it('should remove the node with the matching value', function(done){
			
			tree.remove(37);
			expect(tree.length()).to.equal(6);
			tree.traverse('inOrder').should.eql([3, 16, 22, 23, 45, 99])
			done();
		});
	})

	describe('getMin()', function(){
		it('should return the node with the smallest weight', function(done){
			expect(tree.getMin().data).to.equal(3);
			done();
		});
	});

	describe('getMax()', function(){
		it('should return the node with the highest weight', function(done){
			expect(tree.getMax().data).to.equal(99);
			done();
		});
	});

	describe('find()', function(){
		it('should return the node with the matching value', function(done){
			expect(tree.find(45).data).to.equal(45);
			done();
		});
	});

	describe('length()', function(){
		it('should provide us with the number of nodes in the tree', function(done){
			expect(tree.length()).to.equal(7);
			done();
		});
	})
	describe('traverse() [inOrder, preOrder, postOrder]', function(){
		it('should output the tree in In-Order traversal', function(done) {
			tree.traverse('inOrder').should.eql([3, 16, 22, 23, 37, 45, 99]);
			done();
		});

		it('should output the tree in Pre-Order traversal', function(done) {
			tree.traverse('preOrder').should.deep.equal([23, 16, 3 ,22, 45, 37, 99]);
			done();
		});

		it('should output the tree in Post-Order traversal', function(done) {
			tree.traverse('postOrder').should.be.eql([3, 22, 16, 37, 99, 45, 23]);
			done();
		})
	})
});