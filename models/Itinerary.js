const mongoose = require('mongoose')
const Day = require('./Day')

const itinerarySchema = new mongoose.Schema({
    name: {
        type: String
    },
    startDate: {
        type: Date,
        max: this.endDate,
        required: true
    },
    endDate: {
        type: Date,
        min: this.startDate,
        required: true
    },
    days: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    }],
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    }
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema)
module.exports = Itinerary
