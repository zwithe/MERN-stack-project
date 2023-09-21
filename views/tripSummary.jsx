const React = require('react')
const Default = require('./layouts/default')

function tripSummary (){
    return(
        <Default>
            <header>
                <h1>Your Trip Planning App</h1>
            </header>
            <div className="main-container">
                <div className="trip-details">
                <div className="card">
                    <h2></h2>
                    <p>Location: </p>
                    <p>Check-In Date:</p>
                    <p>Check-Out Date: </p>
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