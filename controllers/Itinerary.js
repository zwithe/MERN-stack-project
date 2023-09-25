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
        newItinerary.days.push(newDay) 
        newItinerary.save()
    } else {
        let newItinerary = await Itinerary.create(req.body);
        let finalDate = new Date(req.body.endDate);
        for(let iDate = new Date(req.body.startDate); iDate <= finalDate; iDate.setDate(iDate.getDate() + 1)){
            let newDay = await Day.create({ date: iDate});
            newItinerary.days.push(newDay)
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
// DELETE itinerary
router.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        

        let itinerary = await Itinerary.findById(id);
        if (!itinerary) {
            return res.status(404).send('Itinerary not found');
        }

              await Promise.all(itinerary.days.map(dayId => Day.findByIdAndDelete(dayId)));
              
        // Delete the itinerary itself
        await Itinerary.findByIdAndDelete(id);

        res.status(303).redirect('/itineraries');

    } catch (error) {
        console.error('Error deleting itinerary:', error);
        res.status(500).send('Internal server error');
    }
});

// DELETE Day

// PUT edit itineraries 
router.put('/:id', async (req, res) => {
    const {id} = req.params
    await Itinerary.findByIdAndUpdate(id, req.body)
    res.status(303).redirect(`/itineraries/${id}`)
})


router.get('/:id/day/:day', async (req, res) => {
    const { id, day } = req.params;
    
    currentDay = await Day.findById(day).populate({path: 'activities'})
    let activityList = await Activity.find()
    console.log(currentDay)
    console.log(id)
    res.render('dayView', {currentDay, activityList, id})
})

// PUT add activity to day
router.put('/:id/day/:day/activity/:activity', async (req, res) => {
    const { id, day, activity } = req.params;
    let currentDay = await Day.findById(day)
    let activityId = await Activity.findById(activity)
    currentDay.activities.push(activityId)
    currentDay.save()
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





module.exports = router