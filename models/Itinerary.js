const mongoose = require('mongoose')
const Day = require('./Day')

const itinerarySchema = new mongoose.Schema({
    Name: {
        type: String
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
    }],
    Hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    }
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema)
module.exports = Itinerary
