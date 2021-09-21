console.clear()

class Stack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item)
  }
  pop() {
    const isEmpty = this.stack.length === 0
    if (isEmpty) return "ERROR: Stack is empty" 
    return this.stack.pop()
  }
  getStack() {
    return this.stack
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
