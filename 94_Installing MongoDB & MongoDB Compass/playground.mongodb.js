

// Select the database to use.
use('playground');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    {
      "name": "Java",
      "price": 2000,
      "instructor": "Ranjan"
    },
    {
      "name": "Python",
      "price": 1800,
      "instructor": "Alex"
    },
    {
      "name": "C++",
      "price": 2200,
      "instructor": "Priya"
    },
    {
      "name": "JavaScript",
      "price": 1700,
      "instructor": "Sofia"
    },
    {
      "name": "Ruby",
      "price": 1900,
      "instructor": "Rahul"
    },
    {
      "name": "Swift",
      "price": 2300,
      "instructor": "Emily"
    },
    {
      "name": "PHP",
      "price": 1600,
      "instructor": "John"
    },
    {
      "name": "Go",
      "price": 2100,
      "instructor": "Anita"
    },
    {
      "name": "Kotlin",
      "price": 2500,
      "instructor": "David"
    },
    {
      "name": "Rust",
      "price": 2400,
      "instructor": "Maya"
    }
  ]
  );

// print the message for output
console.log("Done inserting process!")