/*global describe, it*/

(function () {

    'use strict';

    var assert = require("assert"),
        dsjs = require("../index");

    describe('dsjs', function () {
        describe('Queue', function () {
            describe('clear', function () {
                it('should be able to clear all the Nodes in the Queue', function () {

                    var queue = new dsjs.Queue();
                    queue.enqueue(10);
                    queue.enqueue(20);
                    queue.clear();

                    assert.strictEqual(queue.peek(), null);
                });
            });
            describe('enqueue', function () {
                it('should be able to add a new Node in the Queue', function () {

                    var queue = new dsjs.Queue(),
                        node = new dsjs.Node(10);
                    queue.enqueue(node);

                    assert.notStrictEqual(queue.peek(), null);
                });
                it('should be able to add a new item in the Queue, without being a Node', function () {

                    var queue = new dsjs.Queue();
                    queue.enqueue(20);

                    assert.notStrictEqual(queue.peek(), null);
                });
            });
            describe('peek', function () {
                it('should return null when nothing has been inserted yet', function () {

                    var queue = new dsjs.Queue();

                    assert.strictEqual(queue.peek(), null);
                });
                it('should return an instance of a Node when called', function () {

                    var queue = new dsjs.Queue();
                    queue.enqueue(10);

                    assert(queue.peek() instanceof dsjs.Node);
                });
                it('should always return the first item', function () {

                    var queue = new dsjs.Queue();
                    queue.enqueue(10);
                    queue.enqueue(20);
                    queue.enqueue(30);

                    assert.strictEqual(queue.peek().value, 10);
                    assert.strictEqual(queue.peek().value, 10);
                });
            });
            describe('dequeue', function () {
                it('should return null when nothing has been inserted yet', function () {

                    var queue = new dsjs.Queue();

                    assert.strictEqual(queue.dequeue(), null);
                });
                it('should return an instance of a Node when called', function () {

                    var queue = new dsjs.Queue();
                    queue.enqueue(10);

                    assert(queue.dequeue() instanceof dsjs.Node);
                });
                it('should always return the first item inserted', function () {

                    var queue = new dsjs.Queue();
                    queue.enqueue(10);
                    queue.enqueue(20);
                    queue.enqueue(30);

                    assert.strictEqual(queue.dequeue().value, 10);
                });
                it('should remove the last item popped', function () {

                    var queue = new dsjs.Queue();
                    queue.enqueue(10);
                    queue.enqueue(20);
                    queue.enqueue(30);

                    assert.strictEqual(queue.dequeue().value, 10);
                    assert.strictEqual(queue.dequeue().value, 20);
                    assert.strictEqual(queue.dequeue().value, 30);
                    assert.strictEqual(queue.dequeue(), null);
                });
            });
        });
    });
}());