// Js _ch7_practice set

//====================================================================================================================
// 1. Create a navbar and change the color of its first element to red

// const navbar = document.body.querySelector(".navbar ul");

// const firstElement = navbar.children[0];

// firstElement.style.backgroundColor = 'red'

//Shorcut

document.body.querySelector(".navbar ul").children[0].style.backgroundColor = "red"

// console.log(document.body.querySelector(".navbar ul").children[0].style.backgroundColor = "green")

//===========================================================================================

// 2. Create a table without tbody. Now use "view page source" button to check whether it has a tbody or not?

console.log(document.body.querySelector("table").outerHTML) // it is added automatically if it isnot present

//===============================================================================================

// 3. Create an element with 3 childern. Now Change the color of first and last element to green.?

//   document.body.querySelector(".container").firstElementChild.style.backgroundColor="green"
//   document.body.querySelector(".container").lastElementChild.style.backgroundColor="green"

  // another method

   document.body.querySelector(".container").children[0].style.backgroundColor = "green"
   document.body.querySelector(".container").children[2].style.backgroundColor = "green"

//=========================================================================================================

// 4. Write a javascript code to change background of all <li> tags to cyan

document.querySelectorAll(".all").forEach(e=>{
    e.style.backgroundColor = "cyan"
})

//====================================================================================================================

// 5. Which of the following is used to look for the farthest ancestor that matches a given css selector

//  ans is  (b)closest (ancestor)


console.log(document.getElementById("div-03").closest("#div-02")) // it is not a ancestor(it means an element that contains another element)
console.log(document.getElementById("div-03").closest("#div-03")) // it is because it is itself
console.log(document.getElementById("div-03").closest("artcile > div")) // it is beacuse it is inside articleso it is ancestor
console.log(document.getElementById("div-03").closest("div div")) // it is not 


