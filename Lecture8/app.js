const http = require("http")
const syntax =  require("./Syntax")
const refrens =  require("./refrensh")
const logical = require("./logical")

const server = http.createServer((req,res)=> {
    console.log(req.url,req.method)
    // syntax()
    // refrens()
    logical()
    
})


const PORT = 3000
server.listen(PORT , () => {
    console.log("server is running")
})

