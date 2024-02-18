"use strict";

import LinkedList from "./LinkedList.js";
import LinkedNode from "./Node.js";

window.addEventListener('DOMContentLoaded', start);

const node1 = new LinkedNode(null, null, "A");
const node2 = new LinkedNode(null, null, "B");
const node3 = new LinkedNode(null, null, "C");
const ll = new LinkedList(node1, node3);
const node4 = new LinkedNode(null, null, "D");
const node0 = new LinkedNode(null, null, "Ø");
const nodeÆ = new LinkedNode(null, null, "Æ");

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
    

    console.log(`-----------Original List-------------`)
    ll.dumpList();
    resetList();

    console.log(`-----------add()---------------------`)
    ll.add(node4);
    ll.dumpList()
    resetList();

    console.log(`-----------addFirst()----------------`)
    ll.addFirst(node0);
    ll.dumpList()
    resetList();

    console.log(`-----------clear()-------------------`)
    ll.clear();
    ll.dumpList();

    resetList();

    console.log(`-----------get()---------------------`)
    console.log("Using get() at index 2. Result: " + ll.get(2));
    console.log(`-----------indexOfNode()-----------------`)
    console.log("Using indexOfNode() on node3. Result: "+ ll.indexOfNode(node3));
    console.log(`-----------indexOfData()----------------`)
    console.log("Using indexOfData() on B. Result: "+ ll.indexOfData("B"));
    console.log(`-----------insertAfter()----------------`)
    console.log("Inserting Æ after 1");
    ll.insertAfter(1, nodeÆ)
    ll.dumpList();
    resetList();
    console.log(`-----------insertBefore()----------------`)
    console.log("Inserting Æ before 1");
    ll.insertBefore(1, nodeÆ);
    ll.dumpList();
    resetList();
    console.log(`-----------first()----------------`)
    console.log(ll.first());
    console.log(`-----------last()-----------------`)
    console.log(ll.last());
    console.log(`-----------remove()---------------`)
    console.log("Removing index 1")
    ll.remove(1);
    ll.dumpList();
    resetList();
    console.log(`-----------removeFirst()----------`)
    ll.removeFirst();
    ll.dumpList();
    resetList();
    console.log(`-----------removeLast()-----------`)
    ll.removeLast();
    ll.dumpList();
    resetList();
    console.log(`-----------insertAfterNode()------`)
    console.log("Inserting Æ after node1")
    ll.insertAfterNode(nodeÆ, node1);
    ll.dumpList();
    resetList();
    console.log(`-----------insertBeforeNode()-----`)
    console.log("Inserting Æ before node3");
    ll.insertBeforeNode(nodeÆ, node3);
    ll.dumpList();
    resetList();
    console.log(`-----------removeNode()-----------`)
    console.log("Removing node2");
    ll.removeNode(node2);
    ll.dumpList();
    resetList();
    console.log(`-----------nodeAt()---------------`)
    console.log("Using nodeAt() on index 2");
    console.log(ll.nodeAt(2));
    console.log(`-----------swapNodes()------------`)
    console.log("Swapping node1 with node3")
    ll.swapNodes(node1, node3);
    ll.dumpList();
    resetList();

    console.log(`-----------New list---------------`)

    ll.addFirst(node0);
    ll.add(node4);
    ll.dumpList();

    console.log(`-----Swapping node1 with node4----`)
    ll.swapNodes(node1, node4);
    ll.dumpList();


    //ll.swapNodes(node0, node4);

}