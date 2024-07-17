console.log("This is tutorial on function");

// function intro(name) {
//     console.log("Hello " + name + "you are nice");
//     console.log("Hello " + name + "you are good!");
//     console.log("Hello " + name + "your tshirt is nice! ");
//     console.log("Hello " + name + "your course is good too!");
// }

// intro("Ranjan")
// intro("Yadav")

//=======================================================

function sum(a, b , c= 3) {
    console.log(a, b , c)
    // console.log(a + b + c)
    return a + b + c;
}

// sum(5, 4)
// sum(7, 9)
// sum(6, 4 , 2)
// console.log(sum)

result1 = sum(3, 2) // if you want to store in result then you have to write  return in function
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

//============================================================
// Arrow function means just store function in any variable

const func1 = (x) =>{
    console.log("I am of arrow function",x)
}
func1(5)
func1(59)
func1(56)
func1(51)