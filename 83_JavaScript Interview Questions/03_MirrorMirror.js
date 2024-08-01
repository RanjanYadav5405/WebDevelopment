// 3. The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.
// Example: mirror("hello") returns "helloolleh"

function mirrorString(original){
    const reversed = original.split('').reverse().join('')
    const concate  = original + reversed
    return concate;
    
}

const result = mirrorString("hello")
console.log(result) 

//==============================================================

// another way

let name1 = "Ranjan"
let leng = name1.length;
let rev =""
let concate;
for(let i = leng-1; i>=0;i--){
    rev = rev + name1.charAt(i);
}
concate  = name1.concat(rev)
console.log(concate)