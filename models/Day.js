const mongoose = require('mongoose')
const Activity = require('./Activity')

const daySchema = new mongoose.Schema({
    date:{
        type: Date,
        required: true
    },
    activities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    }]
});
module.exports = mongoose.model('days',daySchema)










