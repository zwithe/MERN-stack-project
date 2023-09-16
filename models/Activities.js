const { default: mongoose } = require("mongoose");
const Day = require('./Day')


const activtiesSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lat:{
       type: Number, 
       required: true
    },
    type:{
        type: String,
        required: true,
        enum: ['park', 'museum', 'resturant']
    },
    price:{
        type: Number
    },
    duration:{
        type: Number
    }
})