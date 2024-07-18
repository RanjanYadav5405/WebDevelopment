// Chapter 4 - Practice Set ( String)

//======================================================================
// 1. What will the following print in javaScript?

console.log("Ran\"".length)

//====================================================================
// 2. Explore the includes, starts with & endswith functions of  a string

let text = "Ranjan Yadav";
console.log(text.slice(0, 8))

//======================================================================
// 3. Write a program to convert a given string to LowerCase

let real_name = "Ranjan Yadav";
console.log(real_name.toLowerCase());


//=======================================================================
// 4. Extract the amount out of this string ?
let char = "Please give Rs 1000 and Rs 300";
console.log(char.match(/\d+/g))

//=======================================================================
// 5. Try to change 4th character of given string were you able to do it

let ex = "RanjanKumarYadav";
let newEx = ex.substring(0,3)+ "P" + ex.substring(4)
console.log(newEx)