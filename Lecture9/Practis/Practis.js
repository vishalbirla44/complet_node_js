const express = require("express")

const app = express()

app.use((req,res,next) => {
    console.log( "this is first middleware",req.url ,req.method)
    next()
})
app.use((req,res,next) => {
    console.log( "this is second middleware",req.url ,req.method)
    next()
})
// app.use((req,res,next) => {
//     console.log( "this is thered middleware",req.url ,req.method)
//     res.send("<h1>this is node page </h1>")
// })

app.get((req,res,next) => {
   console.log("this is handle / get method ")
   res.send(`<h1> this is home page </h1>`)
})

app.get("/contect-us",(req,res,next)=> {
  console.log(`this is get for contect us `)
  res.send(`<h1>file you details </h1>
    <form action="/contect-us" method="POST">
     <lable for="name"> Name</lable>
     <input type= "text" name="username" placeholder="Enter you Name" >
      <lable for="name"> email</lable>
     <input type= "text" name="gmail" placeholder="Enter your gmail">
     <input type="submit">
    </form>`)
})

app.post("/contect-us",(req,res,next) => {
    res.send("<h1>this is post method for form </h1>")
})




const PORT = 3000
app.listen(PORT , () => {
    console.log("server run sucesfily")
})