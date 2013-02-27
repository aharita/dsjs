var assert = require("assert"),
    dsjs = require("../dsjs");

describe('dsjs', function(){
    describe('Node', function(){
        it('should have null values on a new instance', function(){

            var node = new dsjs.Node();

            assert.notStrictEqual(node, undefined);
            assert.strictEqual(node.previous, null);
            assert.strictEqual(node.next, null);
            assert.strictEqual(node.value, null);
            assert.strictEqual(node.parent, null);
        })

        it('should be able to keep the previous and next nodes', function(){

            var node = new dsjs.Node();
            var previousNode = new dsjs.Node();
            var nextNode = new dsjs.Node();

            node.previous = previousNode;
            node.next = nextNode;

            assert.strictEqual(node.previous, previousNode);
            assert.strictEqual(node.next, nextNode);
        })

        it('should be able to assign the value in the constructor', function(){

            var node = new dsjs.Node(10);

            assert.strictEqual(node.value, 10);
        })
    });

    describe('LinkedList', function(){
        it('should have null values on a new instance', function(){

            var list = new dsjs.LinkedList();

            assert.notStrictEqual(list, undefined);
            assert.strictEqual(list.first, null);
            assert.strictEqual(list.last, null);
            assert.strictEqual(list.count, 0);
        })

        describe('addFirst', function(){
            it('should be able to assign a Node as the first item', function(){

                var list = new dsjs.LinkedList();
                var node = new dsjs.Node(10);

                list.addFirst(node);

                assert.strictEqual(list.first, node);
                assert.strictEqual(list.first.value, 10);
            })

            it('should throw an exception if other than an instance of Node is passed', function(){

                var list = new dsjs.LinkedList();

                assert.throws( function() { list.addFirst(10); }, /Need to pass a Node instance/);
            })
        })
    })
});