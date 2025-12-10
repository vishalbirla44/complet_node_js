const express = require("express")

const app = express()

app.use((req,res,next) => {
    console.log( "this is first middleware",req.url ,req.method)
    next()
})
app.use((req,res,next) => {
    console.log( "this is second middleware",req.url ,req.method)
})

const PORT = 3000
app.listen(PORT , () => {
    console.log("server run sucesfily")
})