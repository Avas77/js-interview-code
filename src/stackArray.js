class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  push(value) {
    this.stack.push(value);
    console.log(this.stack);
    return this.stack;
  }
  pop() {
    this.stack.pop();
    console.log(this.stack);
    return this.stack;
  }
}

const myStack = new Stack();
myStack.push(5);
myStack.push(6);
myStack.push(7);
myStack.push(2);
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
