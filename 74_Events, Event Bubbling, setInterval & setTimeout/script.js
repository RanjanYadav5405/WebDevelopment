
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

let button = document.getElementById("btn")


// click Event

/*  button.addEventListener("click", () => {
      alert("button clicked")
})  */

// double Event

/*   button.addEventListener("dblclick", () => {
       alert("button clicked")
   })  */

// mouseover Event

/*   button.addEventListener("mouseover", () => {
  alert("button clicked")
  })  */


// mouseout Event

/*    button.addEventListener("mouseout", () => {
            alert("button clicked")
    })  */

// mouseenter Event

/* button.addEventListener("mouseenter", () => {
    alert("button clicked")
}) */

// mouseleave Event

/*  button.addEventListener("mouseleave", () => {
     document.querySelector("#ad").innerHTML = "I am Ranjan <b> from Nepal </b>"
     }) */


// contextmenu

/*  button.addEventListener("contextmenu", ()=>{
      alert("Dont hack us by Right click Please") // When I click Right mousse side
  }) */


// KeyWord Event

// Keydown
/* button.addEventListener("keydown", ()=>{
alert("clicked keyword") // When I click keyword
}) */

document.addEventListener("keydown", (e) => {
    console.log(e, e.key, e.keyCode)
})



