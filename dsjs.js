(function () {

    'use strict';

    /**
    * Data Structures in Javascript for entertainment only!
    * -- Alfonso Harita
    * 
    * @module DSjs
    */
    var dsjs = {};

    /**
    * A node is a record consisting of one or more fields that are links to other nodes, and a data field
    *
    * @class Node
    * @constructor
    * @param {Object} Value of the Node, null if nothing passed in
    */
    dsjs.Node = function (val) {

        /**
        * Previous linked Node
        * 
        * @property previous
        * @type {Node}
        * @default null
        */
        this.previous = null;

        /**
        * Next linked Node
        * 
        * @property next
        * @type {Node}
        * @default null
        */
        this.next = null;

        /**
        * Node value
        * 
        * @property value
        * @type {Object}
        * @default null
        */
        this.value = val || null;

        /**
        * Node parent, which is the LinkedList that contains it
        * 
        * @property parent
        * @type {LinkedList}
        * @default null
        */
        this.parent = null;
    };

    /**
    * In computer science, a linked list is a data structure consisting of a group of nodes which together represent a sequence.
    * Simple linked lists by themselves do not allow random access to the data, or any form of efficient indexing.
    * 
    * @class LinkedList
    * @cionstructor
    */
    dsjs.LinkedList = function () {

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
    * an exception if it's not passed in a Node instance
    * @method addFirst
    * @param {Node} Node that will be assigned as the first item in the LinkedList
    **/
    dsjs.LinkedList.prototype.addFirst = function (node) {
        if (node instanceof dsjs.Node) {
            this.first = node;
        } else {
            throw "Need to pass a Node instance";
        }
    };

    module.exports = dsjs;
}());
