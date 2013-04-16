(function () {
    'use strict';

    var Node = require('./node.js'),

        /**
        * In computer science, a linked list is a data structure consisting of a group of nodes which together represent a sequence.
        * Simple linked lists by themselves do not allow random access to the data, or any form of efficient indexing.
        * 
        * @class LinkedList
        * @constructor
        */
        LinkedList = function () {

            /**
            * First Node in the LinkedList
            * 
            * @property first
            * @type {Node}
            * @default null
            */
            this.first = null;

            /**
            * Last Node in the LinkedList
            * 
            * @property last
            * @type {Node}
            * @default null
            */
            this.last = null;

            /**
            * Number of Nodes in the LinkedList
            * 
            * @property count
            * @type {Number}
            * @default 0
            */
            this.count = 0;
        };

    /**
    * Adds a node as the first element of the LinkedList. Will throw
    * an exception if it's not passed in a Node instance.
    * If a first node already exists, it will be switched as next, and the new node
    * will be the first
    * @method addFirst
    * @param {Node} Node that will be assigned as the first item in the LinkedList
    **/
    LinkedList.prototype.addFirst = function (node) {
        if (node instanceof Node) {
            if (this.first === null) {
                this.first = this.last = node;
            } else {
                var tempNode = this.first;
                this.first = node;
                node.next = tempNode;
                tempNode.previous = node;
            }
            node.parent = this;
            this.count += 1;
        } else {
            throw "Need to pass a Node instance";
        }
    };

    /**
    * Adds a node as the last element of the LinkedList. Will throw
    * an exception if it's not passed in a Node instance.
    * If a last node already exists, it will be switched as previous, and the new node
    * will be the last
    * @method addLast
    * @param {Node} Node that will be assigned as the last item in the LinkedList
    **/
    LinkedList.prototype.addLast = function (node) {
        if (node instanceof Node) {
            if (this.last === null) {
                this.first = this.last = node;
            } else {
                var tempNode = this.last;
                this.last = node;
                node.previous = tempNode;
                tempNode.next = node;
            }
            node.parent = this;
            this.count += 1;
        } else {
            throw "Need to pass a Node instance";
        }
    };

    /**
    * Clears all the nodes in the LinkedList
    * @method clear
    **/
    LinkedList.prototype.clear = function () {
        this.first = null;
        this.last = null;
        this.count = 0;
    };

    /**
    * Removes the first Node from the LinkedList, it will set the next Node as the
    * first, otherwise, the first position will be null
    * @method removeFirst
    **/
    LinkedList.prototype.removeFirst = function () {
        if (this.first !== null) {
            var tempNode = this.first;

            if (this.count === 1) {
                this.first = null;
                this.last = null;
            } else {
                this.first = tempNode.next;
                this.first.previous = null;
            }

            tempNode.next = null;
            tempNode.parent = null;
            this.count -= 1;
        }
    };

    /**
    * Removes the last Node from the LinkedList, it will set the previous Node as the
    * last, otherwise, the last position will be null
    * @method removeLast
    **/
    LinkedList.prototype.removeLast = function () {
        if (this.last !== null) {
            var tempNode = this.last;

            if (this.count === 1) {
                this.first = null;
                this.last = null;
            } else {
                this.last = tempNode.previous;
                this.last.next = null;
            }

            tempNode.previous = null;
            tempNode.parent = null;
            this.count -= 1;
        }
    };

    /**
    * Looks for the Node that contains the value passed in from the start of the list
    * until the end. It will return the first Node instance that matches the value
    * @method findFirst
    * @param {Object} Value that we're looking for in the Node
    * @return {Node} Returns the found Node, or null
    **/
    LinkedList.prototype.findFirst = function (val) {
        if (this.first !== null) {
            var current = this.first;
            do {
                if (current.value === val) {
                    return current;
                }
                current = current.next;
            } while (current.next !== null);
        }
        return null;
    };

    /**
    * Looks for the Node that contains the value passed in from the end of the list
    * until the beginning. It will return the first Node instance that matches the value
    * @method findLast
    * @param {Object} Value that we're looking for in the Node
    * @return {Node} Returns the found Node, or null
    **/
    LinkedList.prototype.findLast = function (val) {
        if (this.first !== null) {
            var current = this.last;
            do {
                if (current.value === val) {
                    return current;
                }
                current = current.previous;
            } while (current.previous !== null);
        }
        return null;
    };

    module.exports = LinkedList;
}());