var assert = require("assert")
, dsjs = require("../dsjs")
;

describe('dsjs', function(){
	describe('Node', function(){
		it('should be created with null values', function(){
			var node = new dsjs.Node();
			assert.notStrictEqual(node, undefined);
			assert.strictEqual(node.previous, null);
			assert.strictEqual(node.next, null);
			assert.strictEqual(node.value, null);
			assert.strictEqual(node.parent, null);
		})
	})
})

/*describe('dsjs', function(){
  describe('#first', function(){
    it('should just run the method without failing', function(){
      dsjs.first("arg");
    })
  })
});

describe('dsjs', function(){
  describe('#second', function(){
    it('should throw an exception', function(){
      assert.throws( function() { dsjs.second("haha") }, /haha/);
    })
  })
});*/