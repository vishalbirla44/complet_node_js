const http =  require("http")
const calculatehome =  require("./calculater")

const server = http.createServer(calculatehome)

const PORT = 3000
server.listen(PORT , () => {console.log("server run suceefuly")})
