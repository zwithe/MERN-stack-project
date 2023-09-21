const React = require('react')
const Default = require('./layouts/default')

function Index (){

    return(
        <Default>
            <div className="main-container">
                <div className="trip-details">
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" href="/itinerary/tripCreator" type="button">Add New Trip!</button>
                    </div>
                    
                    <div className="card">
                        <h2>Trip N</h2>
                        <p>Location: </p>
                        <p>Check-In Date:</p>
                        <p>Check-Out Date: </p>
                    </div>

                </div>
            </div>
        </Default>
    )
}

module.exports = Index