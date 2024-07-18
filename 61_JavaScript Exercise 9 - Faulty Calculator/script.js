/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random();
console.log(random)

let a = prompt("Enter a num1");
let c = prompt("Enter a opertor");
let b = prompt("Enter a num2");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}

if (random > 0.1) {

    //perform correct calculation
    console.log(`THe result is ${a} ${c} ${b}`)
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else {
    // perform wrong calculation
    c = obj[c];
    console.log(`THe result is ${a} ${c} ${b}`)
    console.log(`The result is ${eval(`${a} ${c} ${b}`)}`)
}