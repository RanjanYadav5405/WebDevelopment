//JavaScript Arrays properties and method
//====================================================================
//Array is mutable. it can be change and type of array is object 

let arr = [1, 2, 4, 5, 7]
// Index  0  1  2  3  4

// console.log(arr, typeof arr) // returns typeof arr is object
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

// arr[0] = 534
// console.log(arr[0]) // it can be changed

console.log(arr.toString()) // it will return string like (1,2,4,5) seperated by comma
console.log(arr.join(" and ")) // joins all the array elements using  a separator like (1 and 2 and 4 and 5 and 7)

console.log(arr.pop())  // removes last elment from the arra
// console.log(arr)

console.log(arr.push(9)) // Adds a new element at the end of the array
// console.log(arr)

console.log(arr.shift()) // it is simmilar to (pop) but removes first element and returns it
// console.log(arr)

console.log(arr.unshift(0)) // it is similar to (push) but add element to the beginning returns new array length
// console.log(arr) 

console.log(delete arr[2]) // Array elements an be deleted using the delete operator but empte space it there  but value is not there
// console.log(arr)

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]
let a3 = [7, 8, 9]
console.log(a1.concat(a2, a3)) // used to join arrays to the given array

let sort = [3, 5, 7, 2, 1]
console.log(sort.sort()) // sorts the array in ascending order and also use (compare function)

let numbers = [1, 2, 3, 4, 5]
// console.log(numbers.splice(1,2)) // splice can be used to add new items to an array
// console.log(numbers.splice(1,3))
console.log(numbers.splice(1, 3, 222, 333)) // output is [1, 222, 333, 5]

const num = [1, 2, 3, 4]
console.log(num.slice(2)) // slices out a piece fromm an array it creates a new array
console.log(num.slice(1, 3))

console.log(num.reverse()) // Reverses the element in the source array

