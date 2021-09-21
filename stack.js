console.clear()

class Stack {
  constructor() {
    this.queue = []
  }
  push(item) {
    this.queue.push(item)
  }
  pop() {
    const isEmpty = this.queue.length === 0
    if (isEmpty) return "ERROR: Stack is empty" 
    return this.queue.pop()
  }
  getQueue() {
    return this.queue
  }
}

let myStack = new Stack()
myStack.push("Pen")
myStack.push("Pineapple")
console.log(myStack.getQueue())
console.log(myStack.pop())
console.log(myStack.getQueue())
console.log(myStack.pop())
console.log(myStack.getQueue())
console.log(myStack.pop())
console.log(myStack.getQueue())
