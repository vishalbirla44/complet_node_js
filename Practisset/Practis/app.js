const express = require("express")

// Local module
const userRouter = require("./routes/userRouter")
const contectRouter = require( "./routes/contect-us")
const rootDir = require("./utils/utils")

// core module
const path = require("path")

const app = express()

// app.use((req,res,next) => {
//     console.log( "this is thered middleware",req.url ,req.method)
//     res.send("<h1>this is node page </h1>")
// })

app.use(userRouter)

app.use(express.urlencoded())

app.use(contectRouter)

app.use((req,res,next) => {
    res.status(400).sendFile(path.join(rootDir, "views", "404.html"))
})




const PORT = 3000
app.listen(PORT , () => {
    console.log("server run sucesfily")
})