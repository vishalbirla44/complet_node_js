const express  = require("express")

// local moduel 

const useRouter = require("./routes/userRouter")
const hostRouter = require("./routes/hostRouter")

const app = express()

app.use(express.urlencoded())

app.use(useRouter)
app.use(hostRouter)


app.use((req,res,next) => {
res.status(400).send("<h1> Page not Found </h1>")
})


const PORT = 3000
app.listen(PORT,() => {
    console.log("server run sucessfuly")
})