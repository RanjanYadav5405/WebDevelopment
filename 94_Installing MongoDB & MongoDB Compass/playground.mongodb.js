/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

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