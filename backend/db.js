const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://vishurizz01:RzfgxKDYAOSSooKq@cluster0.7ozbuch.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false,
  }
});
const todo = mongoose.model("Todo", todoSchema);
module.exports = { todo };
