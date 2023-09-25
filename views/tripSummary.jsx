const React = require('react')
const Default = require('./layouts/default')
const Itinerary = require('../models/Itinerary')

function tripSummary ({itinerary}){

    console.log(itinerary)
    
    const daysDisplay = itinerary.days.map(day =>{
        return(
             <div className='card' key={day._id}>
                {JSON.stringify(day.date)}
                <hr/>
                {itinerary.days.activites.map(activity =>{
                    return(
                        <div className='card' key={activity._id}>
                            <h3>{activity.name}</h3>
                            <p>{activity.name} is a {activity.type}. It costs {activity.price} dollars</p> 
                        </div>
                    )
                })}                
             </div>
        )
    })
    return(
        <Default>
            <header>
                <h1>Your "{itinerary.name}" Itinerary at a Glance</h1>
                <h2>Hotel: {itinerary.hotel.name} </h2>
                <h3>Hotel: {itinerary.hotel.address} </h3>
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