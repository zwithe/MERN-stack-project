const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    address:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Hotel', hotelSchema)