import express from "express";
import mongoose from "mongoose";
import todoList from "./models/Todo.js"

let conn = await mongoose.connect('mongodb://localhost:27017/Todo');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todoList1 = new todoList({ desc: "I am from Nepal", isDone: false, days: 7 });
    todoList1.save()
    res.send("Hello World!")
})

app.get('/a', async (req, res) => {
    const todoList2 = await todoList.findOne({});
    res.json({ title: todoList2.title, desc: todoList2.desc })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})