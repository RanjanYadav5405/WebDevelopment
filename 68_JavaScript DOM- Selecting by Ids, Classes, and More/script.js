console.log("JavaScript - Selecting by Ids, Classes, and More")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"; // It selects first element (.CSS Selector)

// console.log(document.querySelectorAll(".box")) // not work without for loop

// document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "green";
// })

let e = document.getElementsByTagName("div")
console.log(e)

console.log(e[3].matches("#redbox"))

console.log(e[3].closest("#redbox"))
console.log(e[2].closest(".container"))
console.log(e[2].closest("html"))


console.log(document.querySelector(".container").contains(e[4]))

console.log(document.querySelector(".container").contains(document.querySelector("body")))