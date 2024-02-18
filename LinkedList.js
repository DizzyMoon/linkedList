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

export default LinkedList;