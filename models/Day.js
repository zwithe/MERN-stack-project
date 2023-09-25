const mongoose = require('mongoose')
const Activity = require('./Activity')

const daySchema = new mongoose.Schema({
    date:{
        type: Date,
        required: true
    }
   
});

module.exports = mongoose.model('Days',daySchema)










