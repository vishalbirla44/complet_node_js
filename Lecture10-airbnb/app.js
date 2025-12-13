const express  = require("express")

// local moduel 

const useRouter = require("./routes/userRouter")

const app = express()

app.use((req,res,next) => {
    console.log(req.url,req.method)
    next()
})

app.use(express.urlencoded())



app.get("/host/add-home", (req,res,next) => {
    res.send(`
        <form action="/host/add-home" method = "POST">
        <input type="text" name="houseName" placeholder="Enter your Home name">
        <input type="submit">
        </form>
        `)
})


app.post("/host/add-home", (req,res,next) => {
    console.log(req.body)
    res.send(`
       <h1> home ragistered sucessfuly</h1>
       <a href="/"> go to home  </a>
        `)
})



const PORT = 3000
app.listen(PORT,() => {
    console.log("server run sucessfuly")
})