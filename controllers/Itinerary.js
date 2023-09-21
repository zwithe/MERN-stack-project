router = require('express').Router()
<<<<<<< HEAD
Hotel = require('../models/Hotel')
Activity = require('../models/Activity')

//render data to the screen
router.get('/', (req,res) =>{
    console.log({Hotel})
    res.render('index', {hotel: Hotel})
})

router.get('/summary', (req,res)=>{
    res.render('tripSummary', {hotel: Hotel})
=======
Hotels = require('../models/Hotel')
Activities = require('../models/Activity')
Itinerary = require('../models/Itinerary')

// GET all itineraries
router.get('/', async (req,res) =>{
    const itineraries = await Itinerary.find()
    res.render('index', {itineraries})
})

router.get('/:id', async (req,res)=>{
    const {id} = req.params
    const itinerary = await Itinerary.findById(id)
    res.render('tripSummary', {itinerary})
>>>>>>> devJackson
})

//create
router.get('/create', (req,res)=>{
    res.render('tripCreator', {Hotels})
})

//delete
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    await Itinerary.findByIdAndDelete(id)
    res.status(303).redirect('/itineraries')
})

// PUT update 
router.put('/:id', async (req, res) => {
    const {id} = req.params
    await Itinerary.findByIdAndUpdate(id, req.body)
    res.status(303).redirect(`/itineraries/${id}`)
})

module.exports = router