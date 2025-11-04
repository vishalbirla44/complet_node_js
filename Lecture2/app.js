const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req.method,req.url,req.headers)

    res.setHeader('Content-Type', 'text/html')
    res.write("<html>")
    res.write("<header> <title> my page</title> </header>")
    res.write("<body> <h1>Like Share Subscribe </h1> </body>")
    res.write("</html>")
})


const PORT = 3000 

server.listen(PORT ,  () =>{
    console.log(`suceesfull done on  http://localhost:${PORT}` )
})
