// 2. The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let arr = [1,2,2,4,5,6,7]

let newArr = arr.map((e) => {
  return e**2;
})
console.log(newArr)