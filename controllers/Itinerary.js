router = require('express').Router()
Hotels = require('../models/Hotels')
Activities = require('../models/Activities')

//render data to the screen
router.get('/', (req,res) =>{
    res.render('index')
})

router.get('/summary', (req,res)=>{
    res.render('tripSummary')
})

//create

//delete

//update

module.exports = router