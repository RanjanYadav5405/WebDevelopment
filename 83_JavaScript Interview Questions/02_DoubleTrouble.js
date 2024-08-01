// 2. The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1, 2, 2, 3, 4, 5]

let newArr = []

for (i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] != arr[i - 1]) {
        newArr.push(arr[i] * 2)
    } else {
        newArr.push(arr[i])
    }
}
console.log(newArr)


//============================================================

let arr1 = [1, 2, 2, 4, 5, 2, 6,7];

let newArr1 = arr1.map((e, index) => {
    if (index === 0 || e !== arr1[index - 1]) {
        return e * 2;
    } else {
        return e;
    }
});

console.log(newArr1);  // Output: [2, 4, 2, 8, 10, 12, 14]







// let arr = [1,2,2,4,5,6,7]

// let newArr = arr.map((e) => {
//   return e**2;
// })

// // using filter to remove duplicate value
// let removeDuplicateValues = newArr.filter((item, index) => {
//     return newArr.indexOf(item) == index;
// })

// console.log(removeDuplicateValues)

// //====================================================

// // another way using new set() method to remove duplicate value

// let arr1 =[...new Set(newArr)];
// console.log(arr1)