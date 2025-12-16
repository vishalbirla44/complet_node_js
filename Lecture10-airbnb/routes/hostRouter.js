const express = require("express")

const hostRouter = express.Router()


hostRouter.get("/host/add-home", (req,res,next) => {
    res.send(`
        <form action="/host/add-home" method = "POST">
        <input type="text" name="houseName" placeholder="Enter your Home name">
        <input type="submit">
        </form>
        `)
})


hostRouter.post("/host/add-home", (req,res,next) => {
    console.log(req.body)
    res.send(`
       <h1> home ragistered sucessfuly</h1>
       <a href="/"> go to home  </a>
        `)
})




module.exports = hostRouter ;