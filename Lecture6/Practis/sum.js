const sumHandler = (req, res) => {
    console.log("this sum request handler", req.url)
    const body = []
    req.on("data", chunk => body.push(chunk))
    req.on("end", () => {
        const bodyStr = Buffer.concat(body).toString()
        const Params = new URLSearchParams(bodyStr)
        const bodyObj = Object.fromEntries(Params)
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result)
        res.setHeader('Content-Type', 'text/html');
        res.write(`
      <html>
        <head><title>Practise Set</title></head>
        <body>
          <h1>Your Sum is ${result}</h1>
        </body>  
      <html>` )
      return res.end()
    }
)
}

exports.sumHandler = sumHandler