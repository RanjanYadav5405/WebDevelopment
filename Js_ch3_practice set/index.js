// Chapter 3 - Pratice Set (loops and function)

//=====================================================================
// 1. Write a program to print the the marks of a student in an object using for loop
// obj = { Ranjan: 22, Rahan: 30, Aakash: 7}

const obj = {
    Ranjan: 22,
    Rahan: 30,
    Aakash: 7
};

let students = Object.keys(obj) // object.keys() is used to convert object to array

// for(let i =0; i<students.length;i++){
//     let student = students[i];
//     console.log(`The marks of ${student} is ${obj[student]}`)
// }

//=============================================================================
// 2. Write a program in Q1 using for in loop

for (let key in obj){
    console.log(key,obj[key])
}

//================================================================================
// 3. Write a program to print "try again" until the user enters the correct number

let UserInput = 34;
const correctNumber = 45;

if(UserInput=== correctNumber){
    console.log("Correct")
   }
   else{
    console.log("Try again")
   }
 //    let  UserInput = prompt("Enter a number: ")


//=========================================================================================
// 4. Write a function to find mean of number?
 






