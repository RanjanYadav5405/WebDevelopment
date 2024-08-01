// Map() and Filter() and reduce()

//========================================
// 1. without Map() function => Creates a new array by by performing some operation on each array element

const arr = [1, 13, 5, 7, 11]
// let newArr = []

// THis is a long way to make new array using pervious array

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     newArr.push(element**2)

// }
// console.log(newArr)

//=======================================================================
// using map() function
//If you do not provide the index(optional) and array(optional) parameters , JavaScript will ignore them and just use the provided parameter(e) aor current value(element)

let newArr = arr.map((e, index, array) => {
    return e ** 2
})

// console.log(newArr)

//=================================================
// one line shortCut

console.log(arr.map((e) => e ** 2))

//==================================================================================

// Using filter() function  => Filter an array with values that passes a test. creates a new array

// Long cut
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))


const arrayWithDuplicates = [1, 2, 3, 4, 4, 5, 1];
const uniqueArray = arrayWithDuplicates.filter((item, index) => arrayWithDuplicates.indexOf(item) === index); // remove duplicate value using filter

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


//=========================================================

// one line shourtCut

console.log(arr.filter((e) => e > 7 ? true : false))


//=================================================================
// reduce() method function Reduces an array to a single value

let arr2 = [1, 2, 3, 4, 5, 6]

const red = (a, b) => {
    return a + b
}

console.log(arr2.reduce(red))

//=================================================================
// Array.from => used to create an array from any other object

console.log(Array.from("Ranjan"))
