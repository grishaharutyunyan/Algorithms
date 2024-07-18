class Stack {
    constructor() {
        this.MAX = 1000;
        this.top = -1;
        this.stack = new Array(this.MAX);
    }

    push(value) {
        if (this.top >= (this.MAX - 1)) {
            console.log("Stack Overflow");
            return false;
        } else {
            this.stack[++this.top] = value;
            console.log(value + " pushed into stack");
            return true;
        }
    }

    pop() {
        if (this.top < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            let x = this.stack[this.top--];
            return x;
        }
    }

    peek() {
        if (this.top < 0) {
            console.log("Stack is Empty");
            return 0;
        } else {
            let x = this.a[this.top];
            return x;
        }
    }

    isEmpty() {
        return (this.top < 0);
    }
}

const s = new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log(s.pop() + " Popped from stack");
s.pop();
s.pop()
console.log("Top element is: " + s.peek());

console.log("Elements present in stack: ");
while (!s.isEmpty()) {
    console.log(s.peek() + " ");
    s.pop();
}


