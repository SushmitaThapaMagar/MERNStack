
const mongoose =require('mongoose')
const ConnectionString ="mongodb+srv://sushmitachan44:12345@cluster0.kquvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

async function connectToDatabase(){
    await mongoose.connect(ConnectionString) //when uesr time is more we use await
    console.log("Connected To DB Successfully")
 }
module.exports=connectToDatabase