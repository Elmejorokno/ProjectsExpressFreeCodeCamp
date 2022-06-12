const express = require('express')
const {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/tasksControllers')

const router = express.Router()

router.get('/', getAllTasks)
router.get('/:idTask', getTask)
router.post('/', createTask)
router.patch('/:idTask', updateTask)
router.delete('/:idTask', deleteTask)

module.exports = router
