const React = require('react')
const Default = require('./layouts/default')

function tripSummary ({hotel, activity}){
    return(
        <Default>
            <header>
                <h1>Your Trip Planning App</h1>
            </header>
            <div className="main-container">
                <div className="trip-details">
                <div className="card">
                    <h2>{hotel.name}</h2>
                    <p>Location: {hotel.address}</p>
                    <p>Check-In Date: {hotel.stayStartDate}</p>
                    <p>Check-Out Date: {hotel.stayEndDate}</p>
                </div>
                <div className="card">
                    <h2>Activity Name</h2>
                    <p>Description: Explore the city's landmarks.</p>
                </div>
                </div>
            </div>
        </Default>
    )
}

module.exports = tripSummary