// remove element at certain index without changing original
let arr = [0,1,2,3,4,5]
let newArr = [...arr]
newArr.splice(1,1)//remove 1 element from index 1
console.log(arr) // [0,1,2,3,4,5]
console.log(newArr)// [0,2,3,4,5]