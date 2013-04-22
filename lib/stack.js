(function () {
    'use strict';

    var Node = require('./node.js'),
        LinkedList = require('./linkedlist.js'),

        /**
        * In computer science, a stack is a particular kind of abstract data type or collection in 
        * which the principal (or only) operations on the collection are the addition of an entity 
        * to the collection, known as push and removal of an entity, known as pop.
        * 
        * @class Stack
        * @constructor
        */
        Stack = function () {
            this.linkedList = new LinkedList();
        };

    /**
    * Clears all the nodes in the Stack
    * @method clear
    **/
    Stack.prototype.clear = function () {
        this.linkedList.clear();
    };

    /**
    * Returns the last item that got into the Stack, without deleting it
    * @method peek
    * @return {Node} Returns the found Node, or null
    **/
    Stack.prototype.peek = function () {
        var val = this.linkedList.first;
        return val;
    };

    /**
    * Returns the last item that got into the Stack, deleting it from it
    * @method pop
    * @return {Node} Returns the found Node, or null
    **/
    Stack.prototype.pop = function () {
        var val = this.linkedList.first;

        if (val !== null) {
            this.linkedList.removeFirst();
        }
        return val;
    };

    /**
    * Adds a new element or instance of a Node into the Stack
    * @method push
    * @param {Object} Value Node instance, or any object. If an object is passed, it will be wrapped into a Node instance
    **/
    Stack.prototype.push = function (val) {
        if (val instanceof Node) {
            this.linkedList.addFirst(val);
        } else {
            var node = new Node(val);
            this.linkedList.addFirst(node);
        }
    };

    module.exports = Stack;
}());