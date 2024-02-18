export class node {
    prev;
    next;
    data;

    constructor(){}

    constructor(prev, next, data) {
        this.prev = prev;
        this.next = next;
        this.data = data;
    }

    getPrev() {
        return this.prev;
    }

    setPrev(prev){
        this.prev = prev;
    }

    getNext() {
        return this.next;
    }

    setNext(next){
        this.next = next;
    }

    getData(){
        return this.data;
    }

    setData(data) {
        this.data = data;
    }


    toString() {
        return data; 
    }
}