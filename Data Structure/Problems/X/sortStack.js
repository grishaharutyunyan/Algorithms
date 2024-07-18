class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    printStack() {
        console.log(this.stack.join(' '));
    }
}

function sortStack(stack) {
    let helperStack = new Stack();

    while (!stack.isEmpty()) {
        let temp = stack.pop();

        while (!helperStack.isEmpty() && helperStack.peek() > temp) {
            stack.push(helperStack.pop());
        }

        helperStack.push(temp);
    }

    while (!helperStack.isEmpty()) {
        stack.push(helperStack.pop());
    }
}

let stack = new Stack();
stack.push(34);
stack.push(3);
stack.push(31);
stack.push(98);
stack.push(92);
stack.push(23);

console.log("Original Stack:");
stack.printStack();

sortStack(stack);

console.log("Sorted Stack:");
stack.printStack();
