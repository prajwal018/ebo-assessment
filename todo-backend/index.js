// todo-backend/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://user1:1jbG0jpp8vaPRa19@todo-app.7wikaox.mongodb.net/?retryWrites=true&w=majority&appName=todo-app",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const TodoSchema = new mongoose.Schema({
  text: String,
});

const Todo = mongoose.model("Todo", TodoSchema);

app.get("/api/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.post("/api/todos", async (req, res) => {
  const newTodo = new Todo({
    text: req.body.text,
  });
  await newTodo.save();
  res.json(newTodo);
});

app.delete("/api/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
