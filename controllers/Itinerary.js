router = require('express').Router()
Hotel = require('../models/Hotel')
Activity = require('../models/Activity')

//render data to the screen
router.get('/', (req,res) =>{
    res.render('index', {hotel: Hotel})
})

router.get('/summary', (req,res)=>{
    res.render('tripSummary')
})

router.get('/create', (req,res)=>{
    res.render('tripCreator', {hotel: Hotel})
})

//create

//delete

//update

module.exports = router