const mongoose = require('mongoose')
const {v4}= require('uuid')
const userSchema= new mongoose.Schema({

    _id:{
        type:String,
        default: v4
    },
    name:{
        type:String,
        required:true
    } ,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},
{
    timestamps: true
})

const user= mongoose.model('User',userSchema)

module.exports = user