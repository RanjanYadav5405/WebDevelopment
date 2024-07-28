// Js _ch9_practice set

//====================================================================================================
// 1. Write a program to load a javaScriptfile in a browser using Promises Use then() to display an alert when the load is complete

// Create a  function to load the JavaScript file

// function loadScript(src) {
//     return new Promise((resolve, rejection) => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.onload = () => resolve("Script loaded successfully");
//         script.onerror = () => rejection(`Failed to load script: ${src}`);
//         document.head.appendChild(script);
//     });
// }

// // Load the  JavaScript file and display  an alert when complete

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js")

//     .then((a) => {
//         alert(a)
//     })
//     .catch((error) => {
//         console.error(error);

//         //  return Promise.reject(error);   // Reject the Promise
//         // throw error;   // Reject the Promise
//     }
//     )

//====================================================================================================

// 2. Write the same program from previous question and use async/ await syntax

// Define a function that returns a promise

// function delayedHello(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(`Hello, ${name}!`);
//             resolve();
//         }, 3000);
//     }
//     )
// }

// // Define an async function that uses await

// async function main() {
//     console.log('Starting....');
//     await delayedHello("Ranjan")
//     console.log('finished');

// }
// main()

// another way

// async function main() {
//     try {
//       console.log("Starting...");
//       await delayedHello("Ranjan");
//       console.log("Finished!");
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//============================================================================================================
// 3. Create a Promise which rejects after 3 seconds use an async/await to get its value use a try catch to handle its error

// function dealyReject(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(`Promise rejected after ${ms}ms`)
//         }, ms);
//     })
// }

// async function example() {
//     try {
//         const result = await dealyReject(3000);
//         console.log(result);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// example()


//=========================================================================================================================================
// 4. Write a program using Promise.all() inside an async/await to await 3 Promises. compare its results with the case where we await these promises one by ones

// Simulated async function to mimic an API call
const asyncTask = (taskname, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${taskname} completed is ${delay}ms`);
        }, delay);
    })
}

// function using Promise.all()
const parallelExecution = async () => {
  console.time('Parallel Execution');

  const results = await Promise.all([
    asyncTask('Task 1', 1000), // 1 second
    asyncTask('Task 2', 2000), // 2 seconds
    asyncTask('Task 3', 3000), // 3 seconds
  ]);
  console.timeEnd('Parallel Execution');
  console.log('Parallel Results: ', results);
  
};

// function awaiting each promise one by one

const sequentialExecution = async () => {
  console.time('Sequential Execution');

  const result1 = await asyncTask('Task 1 ', 1000); // 1 second
  const result2 = await asyncTask('Task 2 ', 2000); // +2 seconds
  const result3 = await asyncTask('Task 3 ', 3000); // +3 seconds

  console.timeEnd('Sequential Execution');
  console.log('Sequential Results:', [result1, result2, result3]);
  
}

// Run both functions

const runCompare = async () => {
  
    await parallelExecution();
    await sequentialExecution();
}

runCompare();


