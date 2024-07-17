console.log("JavaScript Conditionals")


let age = 2;
let grace = 2;

// age +=grace;
// console.log(age)

console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)

/* I am a 
multiple line
comment
*/

if (age >= 18) {
    console.log("You are an adult");
}
else if (age == 0) {
    console.log("You are a baby");
}
else if (age == 1) {
    console.log("You are a still baby");
}


a=6;
b= 8;

let c = a < b ? (a + b) : (a - b);
console.log(c)

/*
translates to 
if(a>b){
let c= a + b
}
else{
  let c= a - b
}
  */