(function () {
    'use strict';

    /**
    * A node is a record consisting of one or more fields that are links to other nodes, and a data field
    *
    * @class Node
    * @constructor
    * @param {Object} Value of the Node, null if nothing passed in
    */
    var Node = function (val) {

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

    module.exports = Node;
}());