const express = require("express")
const postRouter = express.Router()
const Post = require('../models/post.js')

// Get All posts
postRouter.get("/", (req, res, next) => {
  Post.find((err, posts) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(posts)
  })
})

// Add new post
postRouter.post("/", (req, res, next) => {
  console.log(req.body)
  req.body.user = req.auth._id
  const newPost = new Post(req.body)
  newPost.voters.push(req.auth._id)
  newPost.save((err, savedPost) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedPost)
  })
})

//Get posts by user id
postRouter.get("/:user", (req, res, next) => {
  Post.find({user: req.auth._id}, (err, posts) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(posts)
  })
})

// Delete post
postRouter.delete("/:postId", (req, res, next) => {
  Post.findOneAndDelete(
    { _id: req.params.postId, user: req.auth._id },
    (err, deletedPost) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted post: ${deletedPost.title}`)
    }
  )
})

// Update post
postRouter.put("/:postId", (req, res, next) => {
  Post.findOneAndUpdate(
    { _id: req.params.postId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedPost) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedPost)
    }
  )
})

module.exports = postRouter