const React = require('react')
const Default = require('./layouts/default')
const Itinerary = require('../models/Itinerary')

function tripSummary ({itinerary}){
    const activitesDisplay = itinerary.Activites.map(activity =>{
        return(
             <div className='card' key={activity._id}>
                <h3>{activity.name}</h3>
                <p>{activity.name} is a {activity.type}. It costs {activity.price} dollars</p> 
             </div>
         )
    });
    const daysDisplay = itinerary.Days.map(day =>{
        return(
             <div className='card' key={day._id}>
                {day.date}
                <hr/>
                {activitesDisplay}
             </div>
         )
    });
    return(
        <Default>
            <header>
                <h1>Your Trip Planning App</h1>
            </header>
            <div className="main-container">
                <div className="trip-details">
                    {daysDisplay}
                </div>
            </div>
        </Default>
    )
}

module.exports = tripSummary