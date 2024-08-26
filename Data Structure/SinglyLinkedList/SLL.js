class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null ;
    }
    

    print(head) {
        let current = head;
        let output = "";
        while (current !== null) {
            output += current.data;
            if (current.next !== null) {
                output += " -> ";
            }
            current = current.next;
        }
        console.log(output);
    }

    searchLinkedList(head, target) {
        while (head !== null) {
            if (head.data === target) {
                return true;
            }
            head = head.next;
        }
        return false;
    }

    findLength(head){
        let length = 0;
        let current = head;
        while(current !== null){
            length++
            current = current.next
        }
        return length ;
    }

}

