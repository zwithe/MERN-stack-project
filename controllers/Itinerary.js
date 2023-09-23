router = require('express').Router()
Hotel = require('../models/Hotel')
Activity = require('../models/Activity')
Itinerary = require('../models/Itinerary')
Day = require('../models/Day')

// GET page of all itineraries
router.get('/', async (req,res) =>{
    const itineraries = await Itinerary.find()
    res.render('index', {itineraries})
})

// GET summary of specific itinerary
router.get('/:id', async (req,res)=>{
    const {id} = req.params
    
    itinerary = await Itinerary.findById(id).populate({
        path: 'Days',
        populate: {
        path: 'activities',
        model: 'Activity'
        },
        path: 'Hotel'
    })
    .exec((err, populatedItinerary) => {
        if (err) {
        console.error("Error:", err);
        return;
        }
        
        console.log(populatedItinerary);
    });

    res.render('tripSummary', {itinerary})
})

//GET create
router.get('/create', async (req,res)=>{
    const hotels = await Hotel.find()
    res.render('tripCreator', {hotels})
})

// DELETE itinerary
router.delete('/:id', async (req, res) => {
    const {id} = req.params
    await Itinerary.findByIdAndDelete(id)
    res.status(303).redirect('/itineraries')
})

// DELETE Day

// PUT edit itineraries 
router.put('/:id', async (req, res) => {
    const {id} = req.params
    await Itinerary.findByIdAndUpdate(id, req.body)
    res.status(303).redirect(`/itineraries/summary/${id}`)
})

// PUT add activity to day
router.put('/:id/day/:day', async (req, res) => {
    const {day} = req.params['day']
    await Day.findByIdAndUpdate(day, req.body)
})

// POST create itineraries
router.post('/', async (req, res) => {
    await Itinerary.create(req.body)
    res.status(303).redirect('/itineraries')
})

module.exports = router