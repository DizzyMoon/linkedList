"use strict";

import LinkedList from "./LinkedList.js";
import LinkedNode from "./Node.js";

window.addEventListener('DOMContentLoaded', start);


const node1 = new LinkedNode(null, null, "A");

const node2 = new LinkedNode(null, null, "B");

const node3 = new LinkedNode(null, null, "C");

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

function start() {
    console.log("JavaScript is running");
    testing();
}

function resetList() {
    node1.prev = null;
    node1.next = node2;
    node2.prev = node1;
    node2.next = node3;
    node3.prev = node2;
    node3.next = null;

    ll.head = node1;
    ll.tail = node3;
}

function testing() {
    const ll = new LinkedList(node1, node3);

    const node4 = new LinkedNode(null, null, "D");

    const node0 = new LinkedNode(null, null, "Ø");

    const nodeÆ = new LinkedNode(null, null, "Æ");

    console.log(`-----------Original List-------------`)

    ll.dumpList();



    console.log(`-----------add()---------------------`)
    ll.add(node4);
    ll.dumpList()

    ll.resetList();

    console.log(`-----------addFirst()----------------`)
    ll.addFirst(node0);
    ll.dumpList()

    ll.swapNodes(node0, node4);

}