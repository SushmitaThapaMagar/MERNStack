const express = require('express') //const : cannot edit later
const app = express()
// const mongoose =require('mongoose')
const connectToDatabase=require('./database')

// const ConnectionString ="mongodb+srv://sushmitachan44:12345@cluster0.kquvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//Alternative
// const app = require('express')()


// app.use(express.json())
// app.use

connectToDatabase()

app.get("/",(req,res)=>{

    res.status(200).json({
        "message" : "Success"
    })
})
    
    app.post("/book",(req,res)=>{
        console.log(req.body)
    })




app.listen(3000, ()=>{
    console.log("Node.js server has started at port 3000")
})
