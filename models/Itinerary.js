const mongoose = require('mongoose')
const Day = require('./Day')

const itinerarySchema = new mongoose.Schema({
    number: {
        type: Number
    },
    startDate: {
        type: Date,
        // required
    },
    endDate: {
        type: Date,
        // required
    },
    Days: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    }]
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema)
module.exports = Itinerary
