const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const validate = require("./middlewares/validate");
const { updateTodoStatus } = require("./controllers/todoController");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5174",
  })
);

app.post("/todo", async (req, res, next) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "invalid input type",
    });
    return;
  }
  // check validations has been done now lets put the data into database
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.status(200).json({
    msg: "todo created successfully",
  });
});

app.get("/todos", (req, res) => {
  todo.find().then((data) => {
    res.status(200).json(data);
  });
});
/*  app.put("/completed", validate(updateTodo), updateTodoStatus)  */

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "invalid input type",
    });
    return;
  }

  await todo.update({ _id: req.body.id }, { completed: true });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
