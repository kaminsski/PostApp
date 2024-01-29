const express = require('express');
const { updatePost, createPost, getPosts, deletePost } = require('../controllers/post');

const router = express.Router()

router.get("/getPosts", getPosts)
router.post("/createpost", createPost)
router.patch("/updatepost/:id", updatePost)
router.delete("/deletepost/:id", deletePost)



module.exports=router
