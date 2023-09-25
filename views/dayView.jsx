const React = require('react')
const Default = require('./layouts/default')
const Itinerary = require('../models/Itinerary')

function dayView ({currentDay, activityList, id}){
    console.log(currentDay)
    const activityDisplay = activityList.map(activity =>{
        return(
            <div className='card' key={activity._id}>
                <h3>{activity.name}</h3>
             
                    <p>{activity.name} is a {activity.type}. It costs {activity.price} dollars and is located at {activity.address}</p> 
                    <form action={`/itineraries/${id}/day/${currentDay._id}/activity/${activity._id}?_method=PUT`} method='POST'>
                        
                        <input type='submit' value='Submit'/>
                    </form>
            </div>
        )
    })
    
    
    return(
        <Default>
            <header>
                <h1>Add to Your Day</h1>
            </header>
            <div className="main-container">
            <h2>{(JSON.stringify(currentDay.date)).slice(1,11)}</h2>
                {activityDisplay}
            </div>
        </Default>
    )
}

module.exports = dayView