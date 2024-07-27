console.log("This is Promise");


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 1")
    }
  else{
        setTimeout(() => {
            console.log('Yes I am done 1' );
            resolve("Ranjan 1")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
  else{
        setTimeout(() => {
            console.log('Yes I am done 2');
            resolve("Ranjan 2")
        }, 3000);
    }
})

let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 3")
    }
  else{
        setTimeout(() => {
            console.log('Yes I am done 3');
            resolve("Ranjan 3")
        }, 3000);
    }
})

let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 4")
    }
  else{         
        setTimeout(() => {
            console.log('Yes I am done 4');
            resolve("Ranjan 4")
        }, 3000);
    }            
})

let prom5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 5")
    }
  else{
        setTimeout(() => {
            console.log('Yes I am done 5');
            resolve("Ranjan 5")
        }, 3000);
    }
})

const p5 = Promise.resolve([prom1, prom2, prom3, prom4, prom5])
p5.then((a) => {
    console.log(a);
    
}).catch((err) => {
  console.log(err);
  
})
