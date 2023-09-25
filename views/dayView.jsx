const React = require('react')
const Default = require('./layouts/default')
const Itinerary = require('../models/Itinerary')

function dayView ({currentDay, activityList}){
    console.log(currentDay)
    console.log(currentDay.activities)
    const activityDisplay = activityList.map(activity =>{
        return(
            <div className='card' key={activity._id}>
                <h3>{activity.name}</h3>
                <form>
                    <p>{activity.name} is a {activity.type}. It costs {activity.price} dollars and is located at {activity.address}</p> 
                </form>
            </div>
        )
    })
    const daysDisplay = currentDay.map(currentDay =>{
        return(
             <li key={currentDay._id} className="form-container" >
                 <a>
                    <h2>{JSON.stringify(currentDay._id)}</h2>
                    <h2>{JSON.stringify(currentDay.date)}</h2>
                 </a>
             </li>
        )
    })
    return(
        <Default>
            <header>
                <h1>Review Your Day</h1>
            </header>
            <div className="main-container">
                {daysDisplay}
            </div>
        </Default>
    )
}

module.exports = dayView