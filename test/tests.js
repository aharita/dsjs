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

                assert.strictEqual(list.count, 0);

                list.addFirst(node);

                assert.strictEqual(list.first, node);
                assert.strictEqual(list.first.value, 10);
                assert.strictEqual(list.first.parent, list);
                assert.strictEqual(list.last, node);
                assert.strictEqual(list.last.value, 10);
                assert.strictEqual(list.last.parent, list);
                assert.strictEqual(list.count, 1);
                
            })

            it('should be able to assign a Node as the first item when a first node already exists', function(){

                var list = new dsjs.LinkedList();
                var node = new dsjs.Node(10);
                var node2 = new dsjs.Node(20);

                assert.strictEqual(list.count, 0);

                list.addFirst(node);
                list.addFirst(node2);

                assert.strictEqual(list.count, 2);
                assert.strictEqual(list.first, node2);
                assert.strictEqual(list.first.value, 20);
                assert.strictEqual(list.first.parent, list);
                assert.strictEqual(list.first.next, node);
                assert.strictEqual(list.first.next.parent, list);
                assert.strictEqual(list.first.next.previous, node2);
                assert.strictEqual(list.last, node);
                assert.strictEqual(list.last.value, 10);
                assert.strictEqual(list.last.parent, list);
                assert.strictEqual(list.last.previous, node2);
                assert.strictEqual(list.last.previous.parent, list);
                assert.strictEqual(list.last.previous.next, node);
            })

            it('should be able to switch nodes as they are being added as first', function(){

                var list = new dsjs.LinkedList();
                var node = new dsjs.Node(10);
                var node2 = new dsjs.Node(20);
                var node3 = new dsjs.Node(30);

                assert.strictEqual(list.count, 0);

                list.addFirst(node);
                list.addFirst(node2);
                list.addFirst(node3);

                assert.strictEqual(list.count, 3);
                assert.strictEqual(list.first, node3);
                assert.strictEqual(list.first.value, 30);
                assert.strictEqual(list.first.parent, list);
                assert.strictEqual(list.first.next, node2);
                assert.strictEqual(list.first.next.parent, list);
                assert.strictEqual(list.first.next.previous, node3);
                assert.strictEqual(list.last, node);
                assert.strictEqual(list.last.value, 10);
                assert.strictEqual(list.last.parent, list);
                assert.strictEqual(list.last.previous, node2);
                assert.strictEqual(list.last.previous.parent, list);
                assert.strictEqual(list.last.previous.next, node);
            })

            it('should be able to return the correct nodes in the correct order', function(){

                var list = new dsjs.LinkedList();
                var node = new dsjs.Node(10);
                var node2 = new dsjs.Node(20);
                var node3 = new dsjs.Node(30);
                var node4 = new dsjs.Node(40);
                var node5 = new dsjs.Node(50);

                assert.strictEqual(list.count, 0);

                list.addFirst(node5);
                list.addFirst(node4);
                list.addFirst(node3);
                list.addFirst(node2);
                list.addFirst(node);

                assert.strictEqual(list.count, 5);
                assert.strictEqual(list.first, node);
                assert.strictEqual(list.last, node5);
                assert.strictEqual(list.first.next, node2);
                assert.strictEqual(list.first.next.next, node3);
                assert.strictEqual(list.first.next.next.next, node4);
                assert.strictEqual(list.first.next.next.next.next, node5);
                assert.strictEqual(list.first.next.next.next.next.next, null);
                assert.strictEqual(list.last.previous, node4);
                assert.strictEqual(list.last.previous.previous, node3);
                assert.strictEqual(list.last.previous.previous.previous, node2);
                assert.strictEqual(list.last.previous.previous.previous.previous, node);
                assert.strictEqual(list.last.previous.previous.previous.previous.previous, null);
            })

            it('should throw an exception if other than an instance of Node is passed', function(){

                var list = new dsjs.LinkedList();

                assert.throws( function() { list.addFirst(10); }, /Need to pass a Node instance/);
            })
        })
    })
});