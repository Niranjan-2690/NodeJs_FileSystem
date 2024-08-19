const fs = require("node:fs")

const timeStamp = new Date().toString()
const content = `Task ${timeStamp}`

function createFile(){
    fs.writeFile("./files/date-time.txt", content, (err)=>{
    if(err){
        console.log("Error", err)
    }else{
        console.log("Success creating the file")
    }
})
}

createFile()


function readFileSync(){
    fs.readFile("./files/date-time.txt", (err, data)=>{
    if(err){
        console.log("Error", err)
    }else{
        console.log(data.toString())
    }
})
}

readFileSync()

function directory(){
    fs.readdir("./files", (err, files)=>{
    if(err){
        console.log(err)
    }else{
        console.log(files)
    }
})
}

directory()