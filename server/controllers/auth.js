const Auth = require("../models/Auth")
const jwt = require("jsonwebtoken");
const bcryptjs = require('bcryptjs');




const register = async(req,res) =>{
    try {
        const {username, password, email} = req.body

        const user = await Auth.findOne({email})
        if (user){
            return res.status(500).json({msg: "Already taken"})
        }
        if (password.length < 6){
            return res.status(500).json({msg: "Password must be more than six characters"})
        }
        const hashed = await bcryptjs.hash(password, 12)

        const newUser = await Auth.create({username, password:hashed, email})
        const token =  jwt.sign({id:newUser._id}, process.env.SECRET_KEY, {expiresIn: "3h"})

        res.status(201).json({
            newUser,
            token
        })
        
    } catch (error) {
        console.log(error);
    }
}

const login = async(req,res) =>{
    try {
        const {email, password} = req.body
        const user = await Auth.findOne({email})

        if(!user){
            return res.status(500).json({msg:"User not found"})
        }
        const compare = bcryptjs.compare(password, user.password)
        if(!compare){
            return res.status(500).json({msg:"Incorrect password"})
        }
        const token =  jwt.sign({id:user._id}, process.env.SECRET_KEY, {expiresIn: "3h"})

        res.status(201).json({
            user,
            token
        })
    } catch (error) {
        console.log(error);
    }

}

module.exports = {login,register}