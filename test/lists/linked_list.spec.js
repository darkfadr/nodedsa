var expect 		= require('chai').expect,
	LinkedList 	= require('../../lib/lists/linked_list');

var llist = new LinkedList();

describe('LinkedList', function(){
	describe('constructor()', function(){
		it('should initialize the head node', function(done){
			expect(llist.head.data).to.equal('head');
			done();
		})

		it('should initialize the tail node', function(done){
			expect(llist.tail.data).to.equal('head');
			done();
		})
	});

	describe('append()', function(){
		it('should append node to end of linked list', function(done){
			llist.append('first');
			llist.append('third');

			expect(llist.tail.data).to.equal('third');
			done();
		});
	});

	describe('insert()', function(){
		it('should insert node after the specified item', function(done){
			llist.insert('second', 'first');

			expect(llist.find('first').next.data).to.equal('second');
			done();
		});

		it('should append the node if specified item is not found', function(done){
			llist.insert('fifth', 'fourth');

			expect(llist.tail.data).to.equal('fifth');
			done();
		});
	});

	describe('find', function(){
		it('should return the node containing the data', function(done){
			llist.append('fourth');

			expect(llist.find('fourth').data).to.equal('fourth');

			done();
		});

		it('should return null if element does not exist', function(done){
			expect(llist.find('Ashley')).to.be.null;
			done();
		});
	});

	describe('remove()', function(){
		it('should remove node with specified data', function(done){
			llist.remove('fourth');

			expect(llist.find('fourth')).to.be.null;
			done();
		});
	});
});