var expect 	= require('chai').expect,
	List 	= require('../../lib/lists/list');

var list = new List();

describe('List', function(){

	describe('append()', function(){
		it('should append an element to the list', function(done){
			list.append('First');
			list.append('second');
			list.append('fourth');
		    list.append('fifth');
		    expect(list.length()).to.equal(4);

			list.append('Hello');

			expect(list.length()).to.equal(5);
			expect(list.toString()[4]).to.equal('Hello');
			done();
		});
	});

	describe('remove()', function(){
		it('should remove specified existing element from the list', function(done){
			list.remove('fourth');
			expect(list.length()).to.equal(4);
			done();
		});
	});

	describe('find()', function(){
		it('should return the index of the found element', function(done){
			expect(list.find('second')).to.equal(1);
			done();
		});
	})

    describe('insert()', function(){
    	it('should insert element into the list after the specified element', function(done){
    	    list.insert('third', 'second');
    	    expect(list.toString()[2]).to.equal('third');
    	    done();
    	});
    });
});
