// CommonJs using require

// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// }); 

//=====================================================

// EcmaScript Modules using module exports are two type one is named and other is default and we have to put .json inside(type: module) 
// then work like export file oar promise type

// import {a, b, c, d} from "./mymodule.js"
// console.log(a,b,c,d);

// import ranjan from "./mymodule.js"
// console.log(ranjan)


//=====================================================================

// convert ecmaJs export to using require

const a = require("./mymodule2")

console.log(a, __dirname, __filename)


// require dirname and filename coming from this function but we can't see nodeJs automatically wrap

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });