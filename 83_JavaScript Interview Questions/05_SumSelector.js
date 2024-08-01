// 5. The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumUntilNegative(numbers) {

    let sum = 0;

    for (let num of numbers) {
        
        if (num < 0) {
            break;
        }
        
        sum += num
    }
    return sum
}


console.log(sumUntilNegative([1,2,3,4,-3,6,7]))
console.log(sumUntilNegative([1,2,3,]))
console.log(sumUntilNegative([1,2,3,4,2]))