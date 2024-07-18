class CircularQueue {
  constructor(maxLength) {
    this.queue = new Array(maxLength + 1); 
    this.front = 0;
    this.rear = 0;
    this.maxLength = maxLength + 1; 
  }

  enqueue(value) {
    if (this.checkOverflow()) return;
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxLength; 
  }

  dequeue() {
    if (this.checkEmpty()) {

      return;
    }
    const y = this.queue[this.front];
    this.queue[this.front] = '*'; 
    this.front = (this.front + 1) % this.maxLength; 
    return y; 
  }

  
  checkEmpty() {
    return this.front === this.rear;
  }

  checkOverflow() {
    return (this.rear + 1) % this.maxLength === this.front;
  }

  display(output = (value) => console.log(value)) {
    for (let index = 0; index < this.maxLength; index++) {
      output(this.queue[index]);
    }
  }

  length() {
    if (this.checkEmpty()) {
      return 0;
    } else if (this.rear > this.front) {
      return this.rear - this.front;
    } else {
      return this.maxLength - (this.front - this.rear);
    }
  }

  peek() {
    if (this.checkEmpty()) {
      return null; 
    }
    return this.queue[this.front];
  }
}



const queue = new CircularQueue(5);

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log("Queue after enqueuing 5 elements:");
queue.display();

queue.enqueue(60);

console.log("Dequeued element:", queue.dequeue());
console.log("Dequeued element:", queue.dequeue());

console.log("Queue after dequeuing 2 elements:");
queue.display();

queue.enqueue(60);
queue.enqueue(70);

console.log("Queue after enqueuing 2 more elements:");
queue.display();

console.log("Current queue length:", queue.length());

console.log("Front element of the queue:", queue.peek());

console.log("Dequeued element:", queue.dequeue());
console.log("Dequeued element:", queue.dequeue());
console.log("Dequeued element:", queue.dequeue());
console.log("Dequeued element:", queue.dequeue());
console.log("Dequeued element:", queue.dequeue());
console.log("Dequeued element:", queue.dequeue());



console.log("Queue after dequeuing all elements:");
queue.display();

console.log("Is the queue empty?", queue.checkEmpty());
