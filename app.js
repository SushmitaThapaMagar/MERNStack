const express = require('express') //const : cannot edit later
const app = express()

//Alternative
// const app = require('express')()

app.get("/",(req,res)=>{
    console.log(req)
    res.send("Hello and Bye World")
})

app.listen(3000, ()=>{
    console.log("Node.js server has started at port 3000")
})
