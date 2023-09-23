const React = require('react')
const Default = require('./layouts/default')

function Index ({itineraries}){
   const ItinerariesDisplay = itineraries.map((itineraries,i) =>{
       return(
            <li key={i}>
                <a>
                    {itineraries.name}
                </a>
            </li>
        )
   })

    return(
        <Default>
            <div className="main-container">
                <div className="trip-details">
                    <div className="d-grid gap-2">
                        <button class="btn btn-primary" href="/itinerary/tripCreator" type="button">Add New Trip!</button>
                    </div>
                </div>
                <ItinerariesDisplay></ItinerariesDisplay>
            </div>
        </Default>
    )
}

module.exports = Index