const mongoose = require('mongoose')
const Day = require('./Day')


const activitySchema = new mongoose.Schema({
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
    },
    day:{
        type: String
    }
})

module.exports = mongoose.model('Activity', activitySchema)