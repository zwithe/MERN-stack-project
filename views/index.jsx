const React = require('react')
const Default = require('./layouts/default')

function Index ({itineraries}){
   const ItinerariesDisplay = itineraries.map(itinerary =>{
       return(
            <li key={itinerary._id}>
                <a href={`/itineraries/${itinerary._id}`}>
                    {itinerary.name}
                </a>
            </li>
        )
   })

    return(
        <Default>
            <div className="main-container">
                <div className="trip-details">
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" href="/itinerary/tripCreator" type="button">Add New Trip!</button>
                    </div>
                </div>
                {ItinerariesDisplay}
            </div>
        </Default>
    )
}

module.exports = Index