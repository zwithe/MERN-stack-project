const router = require('express').Router()
const Hotel = require('../models/Hotel')
const Activity = require('../models/Activity')
const Itinerary = require('../models/Itinerary')
const Day = require('../models/Day')

// GET page of all itineraries
router.get('/', async (req,res) =>{
    const itineraries = await Itinerary.find()
    res.render('index', {itineraries})
})
// POST create itineraries
router.post('/', async (req, res) => {
    await Itinerary.create(req.body)
    
   /* if(itinerary.startDate === itinerary.endDate){
        // create 1 day with this date
    } else {
        // a loop that creates a day for the start date and increments the day by 1 untill the end date
    }*/
    res.status(303).redirect('/itineraries')
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
    res.status(303).redirect(`/itineraries/${id}`)
})




// GET summary of specific itinerary
router.get('/:id', async (req,res)=>{
    const {id} = req.params
    
    const itinerary = await Itinerary.findById(id).populate([{
        path: 'days',
        populate: {
        path: 'activities',
        model: 'Activity'
        },
    },  {
        path: 'hotel'
    }])
    console.log(itinerary)
    res.render('tripSummary', {itinerary})
})

// PUT add activity to day
router.put('/:id/day/:day', async (req, res) => {
    const {day} = req.params['day']
    await Day.findByIdAndUpdate(day, req.body)
})



module.exports = router