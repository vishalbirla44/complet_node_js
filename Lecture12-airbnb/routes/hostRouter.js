// core module 
const path  = require("path")

const express = require("express")

const hostRouter = express.Router()

// local module
const rootDir = require("../utils/pathUtil")


hostRouter.get("/add-home", (req,res,next) => {
    res.sendFile(path.join(  rootDir,"views" , "addhome.html"))
})

const ragisteredHomes = []
hostRouter.post("/add-home", (req,res,next) => {
    console.log(req.body.houseName)
     ragisteredHomes.push({houseName: req.body.houseName})
     res.sendFile(path.join(  rootDir ,"views" , "homeAdded.html"))
})



exports.hostRouter = hostRouter ;
exports.ragisteredHomes = ragisteredHomes
