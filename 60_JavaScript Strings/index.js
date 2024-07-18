console.log("This is strings tutorial")
// String is immutable

let a = "Ranjan"

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
// console.log(a[6])

// "Ranjan"Yadav"
// we have do like this "Ranjan\"Yadav" (\ means escape sequence)

console.log(a.length)

let real_name = "Ranjan"
let friend = "Ram";
console.log("His name is "+ real_name + "and his friends name is "+ friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`) // template literal back tick

let b = "shivamsh"
console.log(b.toUpperCase()) // .toUpperCase means function because () bracket is given
console.log(b.toLowerCase())
console.log(b.length) // .length means preperty because () bracket is not given
console.log(b.slice(1,5)) // it gives charater in specific range whatever you given in slice index (Note: - Not give last index value )
console.log(b.slice(1)) // 1 for only starts index and it will give upto last value
console.log(b.replace("sh", "77")) // sh replaced by 77 (Note: - If same character is twice then it will replace first incoming character )
console.log(b.concat(a, "Kumar", "Yadav")) // it wil concat whatever you given string 

console.log(b) // String is immutable. it can't change

console.log(b.indexOf("v")) // It will give index number number
console.log(b.split()) //Split a string into substrings using the specified separator and ( note: - return them as an array.)
console.log(b.endsWith("m")) // It gives in boolean form means true and false
console.log(b.startsWith("s")) // if it starts with s then it gives true same to endsWith
console.log(b.charAt(4)) // returns a character according to index
console.log(b.charCodeAt(1)) // it will gives ASCII code means (1 means index of that string and then return ascii code of that particular index character)
console.log(b.repeat(3)) // 3 Means It will repeat string three times
console.log(b.repeat(0)) // In 0 it will give empty
// console.log(b.repeat(-1)) // Throws RangeError

let c = "      Ranjan Yadav   "
console.log(c.trim()) // remove white space. it only remove leading and training space means (jote: - before string and after space)
