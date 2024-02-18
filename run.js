"use strict";

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

class LinkedList{
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }

    dumpList() {
        let a_node = this.head;
        while (a_node != null) {
            console.log(`
            node: ${a_node.data}
            --------------
                prev: ${a_node.prev?.data}
                next: ${a_node.next?.data}
            `);
            a_node = a_node.next;
        } 
    }

    add(payload) {
        this.tail.next = payload;
        payload.prev = this.tail;
        this.tail = payload;
    }

    addFirst(payload) {
        this.head.prev = payload;
        payload.next = this.head;
        this.head = payload;
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    get(i) {
        let j = 0;
        let current = this.head;
        while (i != j){
            j++;
            current = current.next;
        }
        return current;
    }

    indexOf(payload) {
        let i = 0;
        let current = this.head;
        while (current !== null && current.data !== payload) {
            i++;
            current = current.next;
        }
        if (current == null) {
            return -1
        }
        return i;  
    }

    insertAfter(i, payload) {
        payload.next = this.get(i).next;
        payload.prev = this.get(i);
        this.get(i).next = payload;
        payload.next.prev = payload;
    }

    insertBefore(i, payload) {
        payload.next = this.get(i);
        payload.prev = this.get(i).prev;
        this.get(i).prev.next = payload;
        this.get(i).prev = payload;
    }
}

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