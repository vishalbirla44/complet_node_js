// core module
const path = require("path")


const express  = require("express")
const rootDir = require("./utils/pathUtil")


// local moduel 

const useRouter = require("./routes/userRouter")
const {hostRouter} = require("./routes/hostRouter")

const app = express()

app.use(express.urlencoded())

app.use(express.static(path.join( rootDir ,"public")))

app.use(useRouter)
app.use("/host" ,hostRouter)


app.use((req,res,next) => {
res.status(400).sendFile(path.join( rootDir ,"views" , "404.html"))
})


const PORT = 3000
app.listen(PORT,() => {
    console.log("server run sucessfuly")
})