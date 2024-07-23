// Js _ch5_practice set

//===========================================================================
// 1. Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive

// let input = prompt("Enter Your age: ")
// if (input >= 18) {
//     alert("You can drive")
// }
// else {
//     alert("You can't drive ")
// }

//==========================================================================
// 2. In Q1 use confirm to ask the user if he wants to see the prompt again?

// let userInput = prompt("Enter Your input: ")

// if (userInput !== null) {
//     let seeAgain = confirm("You want see prompt again");
//     if (seeAgain) {
//         prompt("Enter Your input: ")
//     }
// }
// else {
//     alert("Good Bye!")
// }

//=============================================================================

// 3. In the previous queation, use console.error to log the error if the age entered is negative?

// let age = prompt("Enter Your input: ")

// if(age < 0){
//     console.error("Age can't be negative")
// }
// else{
//     console.log(`Your are ${age} years old`)
// }


//======================================================================================

// 4. Write a program to change the url to google.com (Redirection) if user enters a number grater than 4

// let user = parseInt(prompt("Enter Your number: "))

// if(user>4){
//     window.location.href = "https://www.google.com";
// }
// else{
//     alert("You number is not grater than 4")
// }

//=========================================================================================

// 5. Change the background of the page to yellow, red or any ither color based on user input through prompt

let color = prompt("Enter Your color for background: ")

if(color.toLowerCase() === "red"){
    document.body.style.backgroundColor = "red";
}
else if(color.toLowerCase() === "yellow"){
    document.body.style.backgroundColor = "yellow";
}
else{
    document.body.style.backgroundColor = "grey";
}
