const React = require('react')
const Default = require('./layouts/default')
const Itinerary = require('../models/Itinerary')

function tripSummary ({itinerary}){

    
    const counter = itinerary.days[0].activities
    const daysDisplay = itinerary.days.map(day =>{
        const activityCheck = day.activities
        if (activityCheck.length != 0){
            return(
                <a href={`${itinerary._id}/day/${day._id}`} key={day._id}>
                <div className='card'>
                   
                {(JSON.stringify(day.date)).slice(1,11)}
                   <hr/>
                   {day.activities.map(activity => {
                            return(
                                <div className='card' key={activity._id}>
                                    <h3>{activity.name}</h3>
                                    <p>{activity.name} is a {activity.type}. It costs {activity.price} dollars</p> 
                                </div>
                            )
                    })}
                                
                </div>
                </a>
           )
        } else {
            return(
                <a href={`${itinerary._id}/day/${day._id}`} key={day._id}>
                    <div className='card' >
                        {(JSON.stringify(day.date)).slice(1,11)}
                        <hr/>
                        <p>No Activities Planned</p>
                    </div>
                </a>
            )

        }

    })
    return(
        <Default>
            <header>
                <h1>Your "{itinerary.name}" Itinerary at a Glance</h1>
                <h2>Hotel: {itinerary.hotel.name} </h2>
                <h3>Address: {itinerary.hotel.address} </h3>
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