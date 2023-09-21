router = require('express').Router()
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