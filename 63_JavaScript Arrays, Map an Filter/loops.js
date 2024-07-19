// All  Loops 

let a = [1,93, 5, 6, 88]

//==================================================================
// for loop

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

//================================================================
// foreach loop

// a.forEach((element, index, array) => {
//     console.log(element, index, array)
// });

//===============================================================
// forin loop

let object = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(key, element)
        
    }
}

//============================================================
//forof loop

for (const iterator of a) {
    console.log(iterator)
}