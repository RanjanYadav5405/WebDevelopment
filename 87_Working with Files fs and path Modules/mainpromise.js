// When you are importing then use type:module in json because it use ECMAScript module not common module

import fs from "fs/promises"

let a = await fs.readFile("Ranjan.txt")
let b = await fs.appendFile("Ranjan.txt","\n\n\nthis is amazing promise")
console.log(a.toString(),b)