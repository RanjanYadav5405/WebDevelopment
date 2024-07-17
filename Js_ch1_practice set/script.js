// 1. Create a variable of type string and try to add a number to it

let a = "Ranjan";
let b = 7;
let c = a + b;

console.log(c);

//==============================================================
// 2. use typeof operator to find the datatype of the string in last question

console.log(typeof a)

//=============================================================
// 3.Create a const object in javascript can you change it to hold a number later?

const person = {
    first_name: "Ranjan",
    last_name: "Yadav",
    Age: 20,
    About: "Web Developer and Competitive Programmer"
};

// console.log(person);

// It is possible

person.first_name = 45;
person.last_name = "Yadav";
person.Age = 22;
person.About = "Commerce undergraduate";

// console.log(person);

// it is not possible

// const person={
// "first_name":"Aryan",
// "last_name":"Yadav",
// "Age":22,
// "About":"Commerce undergraduate"
// }

//=====================================================================
// 4.Try to add a new key to the const object in problem 3 were you able to do it?

// Yes, We can add new key value to the const

const employee = {
    first_name: "Ranjan",
    last_name: "Yadav",
    Age: 20,
    About: "Web Developer and Competitive Programmer"
};
// console.log(employee);

// employee.gender = "Male"

// console.log(empolyee)

//=======================================================================
// 5. write a Js program to create a word-meaning dictionary of 5 words

var dict = {

    Name: "Eric",
    Job: "Freelancer",
    Skills : "JavaScript"
  };

console.log(dict)

dict.country = "nepal"
console.log(dict)
