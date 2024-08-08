import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
  title: { type: String, required: true, default: "Rama" },
  desc: String,
  isDone: Boolean,
  days: Number
});

const todoList = mongoose.model('Todo', todoSchema);
export default todoList;