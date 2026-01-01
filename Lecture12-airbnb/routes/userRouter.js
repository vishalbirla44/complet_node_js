// core module 
const path = require("path")
const express = require("express")
const rootDir = require("../utils/pathUtil")
const {ragisteredHomes} = require("./hostRouter")
const userRouter = express.Router()


userRouter.get("/",(req,res,next) =>{
    console.log(ragisteredHomes)
res.sendFile(path.join(rootDir ,"views" , "home.html"))
})


module.exports = userRouter