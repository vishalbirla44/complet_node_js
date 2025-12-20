const express = require("express")
// core module
const path = require("path")

const contectRouter = express.Router()
// local module
const rootDir = require("../utils/utils")

contectRouter.get("/contect-us",(req,res,next)=> {
  res.sendFile(path.join(rootDir , "views","contect.html" ))
})

contectRouter.post("/contect-us",(req,res,next) => {
  console.log(req.body)
   res.sendFile(path.join(rootDir , "views" , "contect-sucess.html"))
})


module.exports = contectRouter