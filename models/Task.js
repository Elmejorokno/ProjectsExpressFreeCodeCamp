const mongoose = require('mongoose')
const { Schema } = mongoose

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Must provide a name for the task.'],
    trim: true,
    maxlength: [25, `Name can't be more than 20 characters.`]
  },
  completed: { type: Boolean, default: false }
})

module.exports = mongoose.model('tasks', TaskSchema)
