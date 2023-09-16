const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required
    },
    stayStartDate: {
        type: Date,
        required
    },
    stayEndDate: {
        type: Date,
        required
    },
    lon: {
        type: Number,
        required
    },
    lat: {
        type: Number,
        required
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model('Hotels',hotelSchema)