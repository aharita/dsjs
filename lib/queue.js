(function () {
    'use strict';

    var Node = require('./node.js'),
        LinkedList = require('./linkedlist.js'),

        /**
        * In computer science, a queue is a particular kind of abstract data type or
        * collection in which the entities in the collection are kept in order and the principal
        * (or only) operations on the collection are the addition of entities to the rear terminal
        * position, known as enqueue, and removal of entities from the front terminal position, known
        * as dequeue.
        * 
        * @class Queue
        * @constructor
        */
        Queue = function () {
            this.linkedList = new LinkedList();
        };

    /**
    * Clears all the nodes in the Queue
    * @method clear
    **/
    Queue.prototype.clear = function () {
        this.linkedList.clear();
    };

    /**
    * Returns the item at the beginning of the Queue without deleting it
    * @method peek
    * @return {Node} Returns the found Node, or null
    **/
    Queue.prototype.peek = function () {
        var val = this.linkedList.last;
        return val;
    };

    /**
    * Returns the item at the beginning of the Queue, deleting it from it
    * @method dequeue
    * @return {Node} Returns the found Node, or null
    **/
    Queue.prototype.dequeue = function () {
        var val = this.linkedList.last;

        if (val !== null) {
            this.linkedList.removeLast();
        }
        return val;
    };

    /**
    * Adds a new element or instance of a Node into the Queue
    * @method enqueue
    * @param {Object} Value Node instance, or any object. If an object is passed, it will be wrapped into a Node instance
    **/
    Queue.prototype.enqueue = function (val) {
        if (val instanceof Node) {
            this.linkedList.addFirst(val);
        } else {
            var node = new Node(val);
            this.linkedList.addFirst(node);
        }
    };

    module.exports = Queue;
}());