const http = require("http")
const requestHandler = require("./app")
 
const server = http.createServer(requestHandler)


const PORT = 3000

server.listen(PORT, () => { console.log("server run suceefuly") })