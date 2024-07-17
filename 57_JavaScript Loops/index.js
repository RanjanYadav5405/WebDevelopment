console.log("I am a tutorial on loops")

let a = 1;

// console.log(a)
// console.log(a + 1)
// console.log(a + 2)

//============================================================
// for loop
for (let i = 0; i < 100; i++) {
    console.log(a + i)
}

//=======================================================
// for in loop. it key and value it is use for object. it can access

let object = {
    name: "John",
    age: 30,
    city: "New York"
}

for (const key in object) {
    const element = object[key];
    console.log(key, element)
}

//==================================================================
// for of loop. it is use for array and string. it can access and not for object

for (const iterator of "Ranjan") {
    console.log(iterator)
}


//=================================================================
// while loop

let i =0;
while (i <= 100) {
    console.log(i)
    i++;
}

//===================================================================
// do while loop. it atleast print one times

j=10;
{
    console.log(j);
    j++;
}
while(i<6); // here in do-while loop we need to do semicolon(compulsory)

