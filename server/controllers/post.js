const Post = require('../models/Post');

 
 const getPosts = async(req,res)=>{
    try {
        const getPosts = await Post.find()
        res.status(200).json(getPosts)
    } catch (error) {
        console.log(error);
    }
 }

 const createPost = async(req,res)=>{
    try {
        const newPost = await Post.create(req.body)
        res.status(200).json(newPost)
    } catch (error) {
        console.log(error);
    }
 }

 const deletePost = async(req,res)=>{
    try {
        const id = req.params.id

        await Post.findByIdAndDelete(id)
        res.status(200).json({msg: "Delete"})
    } catch (error) {
        console.log(error);
    }
 }

 const updatePost = async(req,res)=>{
    try {
        const id = req.params.id
        const update = await Post.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).json(update)
    } catch (error) {
        console.log(error);
    }
 }

 module.exports={
    createPost, updatePost, getPosts, deletePost
 }