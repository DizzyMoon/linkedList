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
        return this.nodeAt(i).data;
    }

    indexOf(payload) {
        let i = 0;
        let current = this.head;
        while (current !== null && current !== payload) {
            i++;
            current = current.next;
        }
        if (current == null) {
            return -1
        }
        return i;  
    }

    insertAfter(i, payload) {
        const insertAt = this.nodeAt(i);
        payload.next = insertAt.next;
        payload.prev = insertAt;
        insertAt.next = payload;
        payload.next.prev = payload;
    }

    insertBefore(i, payload) {
        const insertAt = this.nodeAt(i);
        payload.next = insertAt;
        payload.prev = insertAt.prev;
        insertAt.prev.next = payload;
        insertAt.prev = payload;
    }

    first() {
        return this.head;
    }

    last() {
        return this.tail;
    }

    remove(i) {
        const toDelete = this.nodeAt(i);

        if (toDelete == this.head){
            this.removeFirst()
            return null;
        }

        if (toDelete == this.tail) {
            this.removeLast();
            return null;
        }
        const prev = toDelete.prev;
        const next = toDelete.next;
        prev.next = next;
        next.prev = prev;
    }

    removeFirst() {
        this.head = this.head.next;
        this.head.prev = null;
    }

    removeLast() {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    insertAfterNode(payload, existingNode) {

        if (existingNode === this.tail) {
            this.add(payload);
            return null;
        }

        payload.prev = existingNode;
        payload.next = existingNode.next;
        existingNode.next.prev = payload;
        existingNode.next = payload;
    }

    insertBeforeNode(payload, existingNode) {

        if (existingNode === this.head) {
            this.addFirst(payload);
            return null;
        }

        payload.prev = existingNode.prev;
        payload.next = existingNode;
        existingNode.prev.next = payload;
        existingNode.prev = payload;
    }

    removeNode(node) {
        const toDelete = this.indexOf(node);
        this.remove(toDelete);
    }

    nodeAt(i) {
        let j = 0;
        let current = this.head;
        while (i != j){
            j++;
            current = current.next;
        }
        return current;
    }

    swapNodes(nodeA, nodeB) {
    const aPrev = nodeA.prev;
    const aNext = nodeA.next;
    const bPrev = nodeB.prev;
    const bNext = nodeB.next;

    if (aPrev !== null) {
        aPrev.next = nodeB;
    } else {
        this.head = nodeB;
    }
    if (aNext !== null) {
        aNext.prev = nodeB;
    } else {
        this.tail = nodeB;
    }

    if (bPrev !== null) {
        bPrev.next = nodeA;
    } else {
        this.head = nodeA;
    }
    if (bNext !== null) {
        bNext.prev = nodeA;
    } else {
        this.tail = nodeA;
    }

    const tempPrevA = nodeA.prev;
    nodeA.prev = nodeB.prev;
    nodeB.prev = tempPrevA;

    const tempNextA = nodeA.next;
    nodeA.next = nodeB.next;
    nodeB.next = tempNextA;
    }
}

export default LinkedList;