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
*/
dsjs.Node = function () {
    'use strict';

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
    this.value = null;

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
* @constructor
*/
dsjs.LinkedList = function () {
    'use strict';

    /**
    * Returns the first Node in the LinkedList
    * 
    * @property first
    * @type {Node}
    * @default null
    */
    this.first = null;

    /**
    * Returns the last Node in the LinkedList
    * 
    * @property last
    * @type {Node}
    * @default null
    */
    this.last = null;

    /**
    * Returns number of Nodes in the LinkedList
    * 
    * @property count
    * @type {Number}
    * @default 0
    */
    this.count = 0;
};

dsjs.LinkedList.prototype = function () {
    'use strict';
};

module.exports = dsjs;