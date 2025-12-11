
// external module 
const express = require("express")

//  local module 

const app = express()

// first middleware
app.use((req,res,next) =>{
    console.log( "this is first middleware",req.url, req.method)
    next()
})
 
// second middleware
app.use((req,res,next) =>{
    console.log( "this is second  middleware",req.url, req.method)
    next()
})
// therid middleware
app.use((req,res,next) => {
    console.log("this is thered middleware ")
    res.send("<h1> Hello this node learninig page </h1>")
})

const PORT = 3000

app.listen(PORT, () => { console.log("server run suceefuly") })