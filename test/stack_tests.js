/*global describe, it*/

(function () {

    'use strict';

    var assert = require("assert"),
        dsjs = require("../index");

    describe('dsjs', function () {
        describe('Stack', function () {
            describe('clear', function () {
                it('should be able to clear all the Nodes in the Stack', function () {

                    var stack = new dsjs.Stack();
                    stack.push(10);
                    stack.push(20);
                    stack.clear();

                    assert.strictEqual(stack.peek(), null);
                });
            });
            describe('push', function () {
                it('should be able to add a new Node in the stack', function () {

                    var stack = new dsjs.Stack(),
                        node = new dsjs.Node(10);
                    stack.push(node);

                    assert.notStrictEqual(stack.peek(), null);
                });
                it('should be able to add a new item in the stack, without being a Node', function () {

                    var stack = new dsjs.Stack();
                    stack.push(20);

                    assert.notStrictEqual(stack.peek(), null);
                });
            });
            describe('peek', function () {
                it('should return null when nothing has been inserted yet', function () {

                    var stack = new dsjs.Stack();

                    assert.strictEqual(stack.peek(), null);
                });
                it('should return an instance of a Node when called', function () {

                    var stack = new dsjs.Stack();
                    stack.push(10);

                    assert(stack.peek() instanceof dsjs.Node);
                });
                it('should always return the last item inserted', function () {

                    var stack = new dsjs.Stack();
                    stack.push(10);
                    stack.push(20);
                    stack.push(30);

                    assert.strictEqual(stack.peek().value, 30);
                    assert.strictEqual(stack.peek().value, 30);
                });
            });
            describe('pop', function () {
                it('should return null when nothing has been inserted yet', function () {

                    var stack = new dsjs.Stack();

                    assert.strictEqual(stack.pop(), null);
                });
                it('should return an instance of a Node when called', function () {

                    var stack = new dsjs.Stack();
                    stack.push(10);

                    assert(stack.pop() instanceof dsjs.Node);
                });
                it('should always return the last item inserted', function () {

                    var stack = new dsjs.Stack();
                    stack.push(10);
                    stack.push(20);
                    stack.push(30);

                    assert.strictEqual(stack.pop().value, 30);
                });
                it('should remove the last item popped', function () {

                    var stack = new dsjs.Stack();
                    stack.push(10);
                    stack.push(20);
                    stack.push(30);

                    assert.strictEqual(stack.pop().value, 30);
                    assert.strictEqual(stack.pop().value, 20);
                    assert.strictEqual(stack.pop().value, 10);
                    assert.strictEqual(stack.pop(), null);
                });
            });
        });
    });
}());