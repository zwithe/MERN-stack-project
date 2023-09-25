const React = require('react')
const Default = require('./layouts/default')
const Itinerary = require('../models/Itinerary')

function tripSummary ({itinerary}){

    console.log(itinerary)
    console.log("days: ", itinerary.days[0].activities)
    const counter = itinerary.days[0].activities
    console.log("counter: ", counter.length)
    
    const daysDisplay = itinerary.days.map(day =>{
        const activityCheck = day.activities
        console.log(activityCheck.length)
        if (activityCheck.length != 0){
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
        } else {
            return(
                <div className='card' key={day._id}>
                {(JSON.stringify(day.date)).slice(1,11)}
                <hr/>
               <p>No Activities Planned</p>
             </div>
            )

        }

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