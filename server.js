//dependencies
const express = require("express")
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config()
const itineraryRoutes = require('./controllers/Itinerary')
const hotelController = require('./controllers/Hotel')
const activitesController = require('./controllers/Activity')

//app init
const app = express()

//MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));
    
const PORT = process.env.PORT

//routes
app.use('/itinerary',itineraryRoutes)
app.use('/hotels', hotelController)
app.use('/activities', activitesController)

//response phrase
app.listen(PORT, console.log(`listening on port ${PORT}`))