const multer=require('multer')

const storage = multer.diskStorage({ //a function to determine filenames
    destination : function(req,file,cb){ //destination path for uploaded files
     
        const allowedFileTypes = ['image/png','image/jpeg','image/jpg']
        if(!allowedFileTypes.includes(file.mimetype)){
            cb(new Error("This filetype is not supported"))
            return
        }
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