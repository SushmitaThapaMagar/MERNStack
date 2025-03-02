const express = require('express') //const : cannot edit later
const app = express()
// const mongoose =require('mongoose')
const connectToDatabase=require('./database')
const Book = require('./model/bookModel')

// const ConnectionString ="mongodb+srv://sushmitachan44:12345@cluster0.kquvw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//Alternative
// const app = require('express')()


app.use(express.json())

connectToDatabase()

app.get("/",(req,res)=>{

    res.status(200).json({
        message : "Success"
    })
} )
    //create book
    app.post("/book",async(req,res)=>{ //async and await is like two wheel 

        const {bookName,bookPrice,isbnNumber,authorName,publishedAt,publication}=req.body
        await Book.create({ //await takes time to display
           bookName, //it can be write as bookName : bookName,
           bookPrice,
           isbnNumber,
           authorName,
           publishedAt,
           publication

        })
        res.status(201).json({ //201 is created
            message:"Book Created Succesfully"
        })

    })

//all read

app.get("/book",async (req,res)=>{
    const books = await Book.find() //find returns array data
    console.log(books)
    res.status(200).json({
        message : "Books fetched succesfully",
        data : books
    })
})

//single read
app.get("/book/:id",async(req,res)=>{ 
    const id=req.params.id
    const book = await Book.findById(id) //returns object
    if(!book){
        res.status(400).json({
            message : "Nothing Found"
        })
    }else{
        res.status(200).json({
            message : "Single Book Fetched Succcessfully",
            data:book
          

        })
    }
    
})

//delete operation
app.delete("/book/:id",async(req,res)=>{
    const id=req.params.id
    await Book.findByIdAndDelete(id)
    res.status(200).json({
        message : "Book Deleted Succcessfully",
    })

})

//update operation
app.patch("/book/:id",async(req,res)=>{

    const id=req.params.id //which book to update
    const{bookName,bookPrice,isbnNumber,authorName,publishedAt,publication}=req.body
    await Book.findByIdAndUpdate(id,{
        bookName:bookName,
        bookPrice:bookPrice,
        authorName:authorName,
        publication:publication,
        publishedAt:publishedAt,
        isbnNumber:isbnNumber

    })
    res.status(200).json({
        message:"Updated Successfully!"
    })

})


app.listen(3000, ()=>{
    console.log("Node.js server has started at port 3000")
})








