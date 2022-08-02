const express = require("express")
const listRouter = express.Router()
const { v4: uuidv4 } = require('uuid')


const list = [
  {
    name: "finish vschool",
    description: "self explanatory",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: "23k4lh23h2"
  },
  {
    name: "The name",
    description: "The description of the todo",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: "23k4lh23h3"
  }
]

//routes
  //get all, post one

listRouter.route("/")
  .get((req, res) => {
    res.send(list)
  })
  .post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4();
    console.log(newTodo)
    list.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to the list!`)
  })

//get one 

listRouter.get('/:todoId', (req, res) => {
  const todoId = req.params.todoId
  const foundTodo = list.find(todo => todo._id === todoId)
  res.send(foundTodo)
})

//delete one

listRouter.delete("/:todoId", (req, res) => {
  const todoId = req.params.todoId
  const todoIndex = list.findIndex(todo => todo._id === todoId)
  list.splice(todoIndex, 1)
  res.send("Successfully deleted list item.")
})

listRouter.put("/:todoId", (req, res) => {
  const todoId = req.params.todoId
  const todoIndex = list.findIndex(todo => todo._id === todoId)
  const updatedTodo = Object.assign(list[todoIndex], req.body)
  res.send(updatedTodo)
})












module.exports = listRouter