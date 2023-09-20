const { default: mongoose } = require("mongoose");
const Day = require('./Day')


const activtySchema = new mongoose.Schema({
    name:{
        type: String,
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
    },
    address:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Activity', activtySchema)