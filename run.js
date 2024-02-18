"use strict";

import { LinkedList } from "./LinkedList";
import { Node } from "./Node";

window.addEventListener('DOMContentLoaded', start);

function start() {
    console.log("JavaScript is running");
    createList();
}

function createList() {
    const node1 = new Node(null, null, "A");
    const node2 = new Node(node1, null, "B");

    const linkedList = new LinkedList(node1, node2);
}