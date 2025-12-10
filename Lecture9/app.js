
// external module 
const express = require("express")

//  local module 
const requestHandler = require("./user")

const app = express()

app.use("/",(req,res,next) =>{
    console.log( "this is first middleware",req.url, req.method)
    next()
})
 
app.use("/submit-details",(req,res,next) =>{
    console.log( "this is second  middleware",req.url, req.method)
    res.send("<h1> welcome to me </h1>")
})
 


const PORT = 3000

app.listen(PORT, () => { console.log("server run suceefuly") })