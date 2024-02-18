"use strict";

import LinkedList from "./LinkedList.js";

window.addEventListener('DOMContentLoaded', start);


const node1 = {
    prev: null,
    next: null, 
    data: "A"
}

const node2 = {
    prev: null,
    next: null,
    data: "B"
}

const node3 = {
    prev: null,
    next: null,
    data: "C"
}

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

function start() {
    console.log("JavaScript is running");
    testing();
}

function testing() {
    const ll = new LinkedList(node1, node3);

    const node4 = {
        prev: null,
        next: null, 
        data: "D"
    }

    const node0 = {
        prev: null,
        next: null,
        data: "Ø"
    }

    const nodeÆ = {
        prev: null,
        next: null,
        data: "Æ"
    }

    ll.add(node4);

    ll.addFirst(node0);

    ll.insertBefore(2, nodeÆ);

    ll.dumpList();

}