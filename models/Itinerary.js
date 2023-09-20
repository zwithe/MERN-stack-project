const mongoose = require('mongoose')
const Day = require('./Day')

const itinerarySchema = new mongoose.Schema({
    number: {
        type: number
    },
    Days: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Day'
    }]
})