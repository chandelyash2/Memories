const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name:{
        type:String
    },
    Email:{
type:String
    },
    Password:{
type:String
    }
})
module.exports=mongoose.model('UserData',userSchema)