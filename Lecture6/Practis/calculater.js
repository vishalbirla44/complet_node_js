const {sumHandler} =  require("./sum")


const calculatehome = (req,res) =>{
console.log(req.url,req.method)
if(req.url === "/"){

    res.setHeader('Content-Type', 'text/html')
    res.write("<body>")
    res.write('<h1>this is home page </h1>')
    res.write(`<a href="/calculater"> calculater</a>`)
    res.write("</body>")
    return res.end()
}
else if(req.url === "/calculater"){
res.setHeader('Content-Type', 'text/html')
res.write(`<html> <body>
    <h1> this calculater </h1>
    <form action="/calculate-result" method = "POST">
    <input type="text" name="first" placeholder="first">  
  <input type="text" name= "second" placeholder="second">
    <input type="submit" value="sum">
    </form>
    </body> </html> `)
return res.end()  
}
else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST"){
   return sumHandler(req,res)
}

else{
        res.setHeader('Content-Type', 'text/html')
    res.write("<body>")
    res.write('<h1>page not found 404 </h1>')
    res.write(`<a href="/"> Go to Home</a>`)
    res.write("</body>")
    return res.end()
}

}



module.exports = calculatehome