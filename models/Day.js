const mongoose = require('mongoose')
const daySchema = new mongoose.Schema({
    date:{
        type: String,
        required
    },
    Activity:{
        type: []
    }
    })
    module.exports = mongoose.model('days',daySchema)










