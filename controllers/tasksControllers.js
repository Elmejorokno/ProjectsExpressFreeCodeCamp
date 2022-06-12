const createCustomError = require('../errors/customErrorClass')
const asyncWrapper = require('../middlewares/asyncWrapper')
const Task = require('../models/Task')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  return res.status(200).json(tasks)
})

const getTask = asyncWrapper(async (req, res, next) => {
  const { idTask } = req.params
  const task = await Task.findById(idTask)

  if (!task) {
    const error = createCustomError(404, 'Task not found.')
    return next(error)
  }

  return res.status(200).json(task)
})

const createTask = asyncWrapper(async (req, res) => {
  const { name, completed } = req.body

  const task = await Task.create({ name, completed })
  console.log(task)

  return res.status(201).json(task)
})

const updateTask = asyncWrapper(async (req, res) => {
  const { idTask } = req.params
  const { name, completed } = req.body

  const updatedTask = await Task.findByIdAndUpdate(
    idTask,
    {
      name,
      completed
    },
    { new: true, runValidators: true } //these two options are very important.
  )

  if (!updatedTask) {
    const error = createCustomError(404, 'Task not found.')
    return next(error)
  }

  return res.status(200).json(updatedTask)
})

const deleteTask = asyncWrapper(async (req, res) => {
  const { idTask } = req.params

  const task = await Task.findByIdAndDelete(idTask)

  console.log(task)

  if (!task) {
    const error = createCustomError(404, 'Task not found.')
    return next(error)
  }

  return res.status(200).json(task)
})

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
}
