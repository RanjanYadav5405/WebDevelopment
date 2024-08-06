//crud

use("crud")

// console.log(db)

// Create
db.createCollection("courses")

// Insert

// db.courses.insert({
//     "name":"Ranjan Web Developer",
//     "price":2000,
//     "course":"Js"
// })

// db.courses.insertMany([
//     {
//       "name": "Ranjan Web Developer",
//       "price": 2000,
//       "course": "Js"
//     },
//     {
//       "name": "Priya Frontend Developer",
//       "price": 2100,
//       "course": "React"
//     },
//     {
//       "name": "Alex Full Stack Developer",
//       "price": 2200,
//       "course": "Node.js"
//     },
//     {
//       "name": "Sofia Backend Developer",
//       "price": 2300,
//       "course": "Python"
//     },
//     {
//       "name": "Rahul Data Scientist",
//       "price": 2400,
//       "course": "Machine Learning"
//     },
//     {
//       "name": "Emily Mobile Developer",
//       "price": 2500,
//       "course": "Swift"
//     },
//     {
//       "name": "John DevOps Engineer",
//       "price": 2600,
//       "course": "AWS"
//     },
//     {
//       "name": "Anita UI/UX Designer",
//       "price": 2700,
//       "course": "Design Principles"
//     },
//     {
//       "name": "David Game Developer",
//       "price": 2800,
//       "course": "Unity"
//     },
//     {
//       "name": "Maya Security Specialist",
//       "price": 2900,
//       "course": "Cybersecurity"
//     }
//   ]
//   )



// Read

// let a =db.courses.find({price:2300})
// console.log(a.toArray())

// let a =db.courses.findOne({price:2300}) // find first one
// console.log(a.toArray())

// db.courses.findMany({prcie:2500})


// Update

// db.courses.updateOne({price:2000}, {$set:{price:500000}}) // update first one
// db.courses.updateMany({price:2000}, {$set:{price:500000}})


// Delete
db.courses.deleteOne({price:500000}) // delete first one
db.courses.deleteMany({price:21000})

// https://www.mongodb.com/docs/manual/reference/operator/query/