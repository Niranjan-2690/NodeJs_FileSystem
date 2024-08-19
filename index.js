const express = require("express");
const fs = require("node:fs")
const path = require("path")

const httpserver = express();

//Middleware
httpserver.use(express.json())

// httpserver.get("/", (req, res)=>{
//     return res.send("Niranjan")
// })

//Creating a file using post method
const filepath = path.join(__dirname, "./files/date-time.txt")

httpserver.post("/createfile", (req, res)=>{
    const timeStamp = new Date().toString()
    fs.appendFile(filepath, timeStamp, (err)=>{
        if(err){
            console.log("Error", err)
            res.status(500).send({ error: "Internal Server Error" });
        }else {
            res.status(200).send({ message: "Timestamp successfully added" });
        }
    })
})

//Reading file directory
const directoryPath = path.join(__dirname, "./files");

httpserver.post("/readdirectoryfiles", (req, res)=>{
    fs.readdir(directoryPath, (err, files)=>{
        if(err){
            console.log("Error", err)
            res.status(500).send({ error: "Internal Server Error" });
        }else {
            console.log("files in directory", files)
            res.status(200).send({ message: "Files are", files });
        }
    })
})

//Local server connection
httpserver.listen(3000, "localhost", (err)=>{
    if(err){
        console.log("Error", err)
    }else{
        console.log("Server is connected")
    }
})