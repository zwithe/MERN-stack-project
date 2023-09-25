const mongoose = require('mongoose')
const Activity = require('../models/Activity')
const Day = require('../models/Day')
const Hotel = require('../models/Hotel')

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
    Days: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    }],
    Hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    },
    Activities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    }]
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema)
module.exports = Itinerary
