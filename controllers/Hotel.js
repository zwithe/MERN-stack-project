const router = require('express').Router()
const Hotel = require('../models/Hotel')
const HotelSeedData = require('../models/HotelSeedData')

// GET all bread (postman only)
router.get('/', async (req, res) =>{
    const hotels = await Hotel.find()
    res.send(hotels)
})

// GET seed data
router.get('/seed', async (req, res) => {
    await Promise.all(Hotel.deleteMany())
    const hotels = await Hotel.insertMany(HotelSeedData)
    res.send(hotels)
})

module.exports = router