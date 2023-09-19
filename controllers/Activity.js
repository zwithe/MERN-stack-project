const router = require('express').Router()
const Activity = require('../models/Activity')
const ActivitySeedData = require('../models/ActivitySeedData')

// GET all bread (postman only)
router.get('/', async (req, res) =>{
    const activities = await Activity.find()
    res.send(activities)
})

// GET seed data
router.get('/seed', async (req, res) => {
    // await Promise.all(Activity.deleteMany())
    const activities = await Activity.insertMany(ActivitySeedData)
    res.send(activities)
})

module.exports = router