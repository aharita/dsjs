/*global describe, it*/

(function () {

    'use strict';

    var assert = require("assert"),
        dsjs = require("../index");

    describe('dsjs', function () {
        describe('Node', function () {
            it('should have null values on a new instance', function () {

                var node = new dsjs.Node();

                assert.notStrictEqual(node, undefined);
                assert.strictEqual(node.previous, null);
                assert.strictEqual(node.next, null);
                assert.strictEqual(node.value, null);
                assert.strictEqual(node.parent, null);
            });

            it('should be able to keep the previous and next nodes', function () {

                var node = new dsjs.Node(),
                    previousNode = new dsjs.Node(),
                    nextNode = new dsjs.Node();

                node.previous = previousNode;
                node.next = nextNode;

                assert.strictEqual(node.previous, previousNode);
                assert.strictEqual(node.next, nextNode);
            });

            it('should be able to assign the value in the constructor', function () {

                var node = new dsjs.Node(10);

                assert.strictEqual(node.value, 10);
            });
        });
    });
}());