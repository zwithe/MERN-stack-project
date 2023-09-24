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
    if(req.body.startDate === req.body.endDate){
        let newDay = await Day.create({ date: req.body.startDate}); 
        let newItinerary = await Itinerary.create(req.body);
        newItinerary.Days.push(newDay) 
        newItinerary.save()
    } else {
        let newItinerary = await Itinerary.create(req.body);
        let finalDate = new Date(req.body.endDate);
        for(let iDate = new Date(req.body.startDate); iDate <= finalDate; iDate.setDate(iDate.getDate() + 1)){
            let newDay = await Day.create({ date: iDate});
            newItinerary.Days.push(newDay)
        }
        newItinerary.save()
    }
    
    
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



// PUT add activity to day
router.put('/:id/day/:day', async (req, res) => {
    const {day} = req.params['day']
    await Day.findByIdAndUpdate(day, req.body)
})

// GET summary of specific itinerary
router.get('/:id', async (req,res)=>{
    const {id} = req.params
    console
    const itinerary = await Itinerary.findById(id).populate({
        path: 'Days',
        populate: {
        path: 'activities',
        model: 'Activity'
        },
        path: 'Hotel'
    }).then((populatedItinerary) =>{
        console.log(populatedItinerary)
        console.log(itinerary)
    }).catch((error) => {
        console.log(error);
    });
    
    res.render('tripSummary', {itinerary})
})





module.exports = router