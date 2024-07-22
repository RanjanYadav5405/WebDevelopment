// Chapter 5 = Practice Set (Arrays)

//===============================================================================
// 1. Create an array of numbers and take inpput from the user to add numbers to this array

// let numbers = [];

// while (true) {
//     let input = prompt("Enter a number to add in array (or type stop to finish)");

//     if (input.toLowerCase() == "stop") {
//         break;
//     } else if (!isNaN(input) && input !== null && input !== "") {
//         numbers.push(input);
//         alert("Numbers added!");
//     } else {
//         alert("Invalid input! Try again");
//     }
// }

// alert("Numbers is: " + numbers.join());
// console.log("numbers is: " + numbers);

//===============================================================================================
// 2. Keep adding numbers to the array in (1) until 0 is added to the array

// let numbers = [];

// while (true) {
//     let input = prompt("Enter a number to add to the array (or type stop to finish)");

//     if (input.toLowerCase() === "stop") {
//         break;
//     } else if (!isNaN(input) && input !== null && input.trim() !== "") {
//         let number = Number(input);
//         numbers.push(number);
//         alert("Number added!");

//         // Break the loop if the added number is 0
//         if (number === 0) {
//             break;
//         }
//     } else {
//         alert("Invalid input! Try again");
//     }
// }

// alert("Numbers are: " + numbers.join(", "));
// console.log("Numbers are: " + numbers);


//====================================================================================================

// 3. filter for numbers divisible by 10 from a given array

// let numbers = [1,23,54,10,20,33,56,70,80,90,100];

// let divisibleByTen = numbers.filter(num=> num % 10 == 0 )

// console.log("Numbers divisible by 10: "+divisibleByTen.join(", "))

//===========================================================================

//4. Create an array of square of given numbers.

// let num = [1,2,3,4,5]

// let squares = num.map(numb => numb * numb);

// console.log("Squares of the given numbers: "+squares.join(", "))

//==========================================================================
// 5. Use redeuce to calculate factorial of a given number from an array of first n natural numbers ( n being the number whose factorial needs to be calculated)

let arr = [4, 5, 2, 8, 9]; // Example array, assuming it contains the number n


// Function to calculate factorial using reduce
const factorial = (n) => {
    // Create an array of numbers from 1 to n
    const numbers = Array.from({ length: n }, (_, i) => i + 1);
    
    // Use reduce to calculate the product of all numbers in the array
    return numbers.reduce((acc, curr) => acc * curr, 1);
};

// Assuming the array contains the number for which we want to calculate the factorial
const n = arr[0]; // For example, take the second element as n

console.log("Factorial of the number is: " + factorial(n));
