class LinkedList {
  #head = null;
  #tail = null;

  append(value) {
    let node = new Node(value);
    if (this.#head === null) {
      this.#head = node;
      this.#tail = node;
      return;
    }

    this.#tail.nextNode = node;
    this.#tail = node;
  }

  prepend(value) {
    let node = new Node(value, this.#head);
    this.#head = node;

    if (this.#head.nextNode === null) {
      this.#tail = this.#head;
    }
  }

  size() {
    if (this.#head === null) return 0;

    let count = 1;
    let curr = this.#head;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
      count++;
    }
    return count;
  }

  head() {
    return this.#head;
  }

  tail() {
    return this.#tail;
  }

  at(index) {
    if (this.#head === null) throw new Error("empty list");

    let curr = this.#head;
    let n = 0;
    while (n < index && curr.nextNode !== null) {
      n++;
      curr = curr.nextNode;
    }

    if (n === index) return curr;
    throw new Error("list size exceeded");
  }

  pop() {
    if (this.#tail === null) {
      throw new Error("Empty list");
    }

    if (this.#head.nextNode === null) {
      let temp = this.#head;
      this.#tail = null;
      this.#head = null;
      return this.#head;
    }

    let curr = this.#head;
    let prev = null;
    while (curr.nextNode !== null) {
      prev = curr;
      curr = curr.nextNode;
    }

    this.#tail = prev;
    if (this.#tail !== null) this.#tail.nextNode = null;
    return curr;
  }

  contains(target) {
    if (this.#head === null) return false;
    if (this.#head.value === target) return true;

    let curr = this.#head;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
      if (curr.value === target) return true;
    }

    return false;
  }

  find(target) {
    if (this.#head === null) return null;
    if (this.#head.value === target) return 0;

    let index = 0;
    let curr = this.#head;
    while (curr.nextNode !== null) {
      index++;
      curr = curr.nextNode;
      if (curr.value === target) return index;
    }

    return null;
  }

  toString() {
    if (this.#head === null) return null;

    let result = [`( ${this.#head.value} )`];

    let curr = this.#head;
    while (curr.nextNode !== null) {
      curr = curr.nextNode;
      result.push(`( ${curr.value} )`);
    }
    result.push('null');

    return result.join(' -> ');
  }
}

class Node {
  #value = null;
  #nextNode = null;

  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }

  get value() {
    return this.#value;
  }

  set value(v) {
    this.#value = v;
  }

  get nextNode() {
    return this.#nextNode;
  }

  set nextNode(n) {
    this.#nextNode = n;
  }
}

// TESTS

// let list = new LinkedList();
// console.log('size: ', list.size());
// list.append(2);
// list.append(3);
// list.prepend(1);
// list.prepend(0);
// console.log('size: ', list.size());
// console.log('head: ', list.head().value);
// console.log('tail: ', list.tail().value);
// console.log(list.at(0).value);
// console.log(list.at(1).value);
// console.log(list.at(2).value);
// console.log(list.at(3).value);

// console.log('popping: ', list.pop().value);
// console.log('size: ', list.size());
// console.log('head: ', list.head().value);
// console.log('tail: ', list.tail().value);

// console.log(list.contains(4));
// console.log(list.contains(2));
// console.log(list.contains(1));
// console.log(list.find(2));
// console.log(list.find(3));

// console.log(list.toString());
// list.pop();
// console.log(list.toString());
// list.pop();
// console.log(list.toString());
// list.pop();
// console.log(list.toString());
// list.append(2);
// list.prepend(1);
// list.append(3);
// list.prepend(0);
// console.log(list.toString());
// console.log(list.head().value);
// console.log(list.tail().value);
