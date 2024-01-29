const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
const database = require('./config/db');
const authRouter = require("./routes/auth")
const postRouter = require('./routes/post');

dotenv.config()

const app = express()

app.use(cors())
app.use(bodyparser.json({extended:true}))
app.use(bodyparser.urlencoded({extended:true}))
app.use("/", authRouter)
app.use("/", postRouter)



const PORT = process.env.PORT || 5000

database()
app.listen(PORT, ()=>{
    console.log("server is running", PORT);
})