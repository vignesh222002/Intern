let stack = [1,2,3,4,5,6]
let i = 1
let half = Math.floor(stack.length/2)

function remove(popValue) {
    if (i < half) {
        i++
        remove(stack.pop())
    }
    else if (i == half) {
        stack.pop()
    }
    stack.push(popValue)
}
remove(stack.pop())
console.log(stack)