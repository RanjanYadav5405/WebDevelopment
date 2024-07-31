// IIFE

// async function sleep(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);
//     })
// }

// (async function main(){
//     let a  = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b)
// })()

//==========================================================
// Destructing

let [x, y, ...rest] = [1,2,3,4,6,8,9]
console.log(x,y, rest)


let obj = {
    a: 1, 
    b : 2,
    c: 3
}
let {a, b} = obj;
console.log(a, b) // 1 2


//========================================================================
// spread Syntax

const sum = (a, b, c)=>{
    return a+b+c
}

let arr = [1, 4, 6]
console.log(sum(arr[0], arr[1], arr[2]))
console.log(sum(...arr))

//===================================================================
// Hosting
// Hosting is a process in which the function is called before the code is executed. It is used
// It ony can access var not let and cost

console.log(a1);
var a1 = 6;

const sleep = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}