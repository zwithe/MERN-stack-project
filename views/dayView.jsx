const React = require('react')
const Default = require('./layouts/default')
const Itinerary = require('../models/Itinerary')
function dayView ({Days, Activities}){
    console.log(Days)
    console.log(Activities)
    return(
        <Default>
            <header>
                <h1>Your Trip Planning App</h1>
            </header>
            <div className="main-container">
                
            </div>
        </Default>
    )
}

module.exports = dayView