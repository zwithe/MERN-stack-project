router = require('express').Router()

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