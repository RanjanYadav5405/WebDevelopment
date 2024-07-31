// Js _ch12_practice set

//===============================================================================================================
// 1. Write a JavaScript Program to print the following after 2 second delay
// Hello
// world


// function main(){
// setTimeout(() => {
//     console.log("Hello\nWorld")
// }, 2000);
// }
// main();

//==============================================================================================================
//2. Write a JavaScript program to find average of number in an array using spread syntax.

// function Agv(a,b,c){
//     let f = a + b + c;
//     return f/3
// }

// let arr = [2,2,2]
// console.log(Agv(...arr))

//============================================================================================================================
//3. Write a JavaScript function which resolves a Promise after n seconds. The function takes n as the parameter. Use an IIFE yo execute the functions with different va;;ues of n

function main(n){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(`Resolved after ${n} seconds`);
        }, n* 1000);
    })
}

(function par(){
   main(2).then(console.log);
   main(4).then(console.log);
   main(3).then(console.log);
})()

//==================================================================================================
//4. Write a simple interest calculator using JavaScript?

function calculateSimpleInterest(principal, rate, time) {
    const simpleInterest = (principal * rate * time) / 100;
    return simpleInterest;
  }
  
  const interest = calculateSimpleInterest(1000, 5, 3);
  console.log(`The simple interest is: ${interest}`);
  