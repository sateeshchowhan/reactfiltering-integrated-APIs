const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    img:{type:String,required:true},
    title:{type:String,required:true},
    rating:{type:Number,required:true},
    prevPrice:{type:Number,required:true},
    newPrice:{type:Number,required:true},
    company:{type:String,required:true},
    color:{type:String,required:true},
    category:{type:String,required:true},
})

module.exports = mongoose.model('Product',productSchema)