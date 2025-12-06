const fs = require("fs")
const { buffer } = require("stream/consumers")

const requestHandler = ((req, res) => {
    console.log(req.url, req.method)
    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html')
        res.write("<h1>Please fill our details  </h1></br> ")
        res.write(`<form action = "/submit-details"  method="POST">`)
        res.write(`<input type="text" id="name" name="username" placeholder="Enter your name" > </br>`)
        res.write(`<label for="gender">Gender</label> </br>`)
        res.write(`<label for="male" > Male</label>`)
        res.write(`<input type="radio" id="male" value="male" name="gender"/>`)
        res.write(`<label for="female" > Female</label>`)
        res.write(`<input type="radio" id="female" value="female" name="gender"/>`)
        res.write(`<button type="submit">Submit</button>`)
        res.write(`</form>`)
        return res.end()
    }

    else if (req.url === "/submit-details" && req.method == "POST") {

        // this learn about the chunks
        const body = []
        req.on("data", chunk => {
            console.log(chunk)
            body.push(chunk)
        })


        req.on("end", () => {
            const fullbody = Buffer.concat(body).toString()
            console.log(fullbody)
            const param = new URLSearchParams(fullbody)

            // same way to work this type 

            // const bodyobject = {}
            // for (const [key, val] of param.entries()) {
            //    bodyobject[key] = val
            // }

            const bodyobject = Object.fromEntries(param)
            console.log(bodyobject)
            fs.writeFile("user-details.txt", JSON.stringify(bodyobject), error => {
                console.log("file write sucefullly ")
            })

            res.statusCode = 302
            res.setHeader("Location", "/")
            return res.end()
        })


    } else {
        res.setHeader('Content-Type', 'text/html')
        res.write("<h1>hello world </h1> ")
        res.end()
    }
})

module.exports = requestHandler

