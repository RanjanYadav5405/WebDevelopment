// Chapter 1 - Practice Set

//====================================================================================
// 1. Use logical operator to find wheather the age of a person lies between 10 to?  20

let age = 15;

if (age >= 10 && age <= 20) {
    console.log(age, "age lies between 10 to 20");
}
else {
    console.log("Age does not lies between 10 to 20");
}

//==================================================================================
// 2. Demonstrate the use of switch case statments in javaScript?

let Day = 3;
switch (Day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        conaole.log("Friday");
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid Day");

}

// another way (Shortcut trick)

switch (Day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: conaole.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid Day");

}

//====================================================================================
// 3. Write a JavaScript Program to find whether a number is Divisible by 2 and 3

let num = 6;

if(num % 2==0 && num % 3 == 0){
    console.log("Divisible by 2 and 3")
}
else{
    console.log("Not Divisible by 2 and 3")
}

//==========================================================================================
// 4. Write a JavaScript program to find whether a number is Divisible by either 2 or 3

let num1 = 4;

if(num1 % 2==0 || num1 % 3 == 0){
    console.log("Divisible by 2 or 3")
}
else{
    console.log("Not Divisible by 2 or 3")
}

//====================================================================================================
// 6. Print "You Can Drive" or "You can't Drive" based on age being greater th 18 using ternary operator

let age1  = 19;

let c = age1 > 18 ? "You can Drive" : "You can't Drive";
console.log(c);
