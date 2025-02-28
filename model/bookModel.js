const mongoose=require("mongoose")

const Schema=mongoose.Schema

const blogSchema =new Schema({
    bookName :{
        type:String,
        unique:true
    },
    bookPrice:{
        type: Number
    },
    isbnNumber:{
        type:Number
    },
    authorName:{
        type:String
    },
    publishedAt:{
        type:String
    },

})

const Book=mongoose.model('Book',bookSchema)
module.exports=Book