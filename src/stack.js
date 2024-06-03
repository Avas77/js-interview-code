class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdPointer = this.top;
      this.top = newNode;
      this.top.next = holdPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return this;
    }
    if (this.top.value === this.bottom.value) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
    return this;
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
