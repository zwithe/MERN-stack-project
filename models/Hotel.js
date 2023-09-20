const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    stayStartDate: {
        type: Date,
        // required
    },
    stayEndDate: {
        type: Date,
        // required
    },
    price: {
        type: Number
    },
    address:{
        type: String,
        // required: true
    }
})

const Hotel = mongoose.model('Hotel', hotelSchema)
module.exports = Hotel