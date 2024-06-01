class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) return this.append(value);
    const newNode = new Node(value);
    const leader = this.traversal(index - 1);
    const holdPointer = leader.next;
    newNode.prev = leader;
    leader.next = newNode;
    holdPointer.prev = newNode;
    newNode.next = holdPointer;
    this.length++;
    return this;
  }
  traversal(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  printList() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }
  remove(index) {
    let leader = this.traversal(index - 1);
    let unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this;
  }
  reverse() {
    if (this.length <= 1) return this.head;
    console.log(this.head);
    let first = this.head;
    this.tail = this.head;
    this.tail.prev = first.next;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    this.head.prev = null;
    return this;
  }
}

const newList = new LinkedList(2);
newList.prepend(4);
newList.append(5);
newList.prepend(9);
// newList.insert(2, 8);
console.log("Reverse", newList.reverse());
