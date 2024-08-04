const fs = require("fs")
// const fs = require("fs/promises")
// console.log(fs);

// in this fs module we are doing writeFile, readFile and appendFile
console.log('Starting');

// fs.writeFileSync("Ranjan.txt", "Ranjan1 is a good boy")


fs.writeFile("Ranjan2.txt", "Ranjan is a good boy2", () => {
    console.log("done")
    fs.readFile("Ranjan2.txt", (error,data)=>{
        console.log(error,data.toString())
    })
  
}
)

fs.appendFile("Ranjan.txt", "Ranjanaaaaadude", (e,d) => {
  console.log(d)
}
)


console.log("Ending")