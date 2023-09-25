const React = require('react')
const Default = require('./layouts/default')
const Itinerary = require('../models/Itinerary')

function dayView ({Days, Activities}){
    console.log(Days)
    console.log(Activities)
    const daysDisplay = Days.map(Days =>{
        return(
             <li key={Days._id} className="form-container" >
                 <a>
                    <h2>{JSON.stringify(Days._id)}</h2>
                    <h2>{JSON.stringify(Days.date)}</h2>
                 </a>
             </li>
         )
    })
    return(
        <Default>
            <header>
                <h1>Your Trip Planning App</h1>
            </header>
            <div className="main-container">
                {daysDisplay}
            </div>
        </Default>
    )
}

module.exports = dayView