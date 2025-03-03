const multer=require('multer')

const storage = multer.diskStorage({ //a function to determine filenames
    destination : function(req,file,cb){ //destination path for uploaded files
        cb(null,'./storage') //--> cb(error,success)
    },
    filename : function(req,file,cb){
        cb(null,Date.now() + "-"+ file.originalname)
    }
})

module.exports = {
    storage,
    multer
}