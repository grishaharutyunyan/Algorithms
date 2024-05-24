class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

   pop(){
    
   }

  isEmpty() {
    return this.length === 0;
  }

  printList() {
    let list = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(list.join(' --> '));
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.printList();  
console.log(list.isEmpty())

