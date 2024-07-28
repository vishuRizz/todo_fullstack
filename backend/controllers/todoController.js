
const todo = require('../db');

// Update the completion status of a todo by ID
exports.updateTodoStatus = async (req, res) => {
  const { id } = req.body;

  try {
    if (!id) {
      return res.status(400).json({ msg: 'ID is required' });
    }

    const result = await todo.updateOne(
      { _id: id },
      { $set: { completed: true } }
    );

    if (result.nModified === 0) {
      return res.status(404).json({ msg: 'Todo not found or already updated' });
    }

    const updatedTodo = await todo.findById(id);

    res.json(updatedTodo);
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(500).send('Server Error');
  }
};
