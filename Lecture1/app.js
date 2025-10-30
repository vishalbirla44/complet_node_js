const http = require('http')

 const server = http.createServer((req,res) => {
    console.log(req)
 })


 port = 3000


server.listen(port, () => {
    console.log(`server run  http://localhost:${port}`)
})