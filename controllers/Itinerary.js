router = require('express').Router()
Hotel = require('../models/Hotel')
Activity = require('../models/Activity')

//render data to the screen
router.get('/', (req,res) =>{
    console.log({Hotel})
    res.render('index', {hotel: Hotel})
})

router.get('/summary', (req,res)=>{
    res.render('tripSummary')
})

//create

//delete

//update

module.exports = router