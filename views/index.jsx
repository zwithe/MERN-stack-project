const React = require('react')
const Default = require('./layouts/default')

function Index ({itineraries}){
   const ItinerariesDisplay = itineraries.map(itinerary =>{
       return(
            <li key={itinerary._id} className="form-container" >
                <a href={`/itineraries/${itinerary._id}/day`}>
                    <h2>{itinerary.name}</h2>
                </a>
                <form action={`/itineraries/${itinerary._id}?_method=DELETE`} method='POST'>
                    <input type="submit" value="DELETE" className='delete-button'/>
                </form>
            </li>
        )
   })

    return(
        <Default>
            <div className="main-container">
                <div className="trip-details">
                    <div className="d-grid gap-2">
                        <a href="/itineraries/create">
                            <button className="btn btn-primary"  type="button"><h2>Add New Trip!</h2></button>
                        </a>
                    </div>
                </div>
                    {ItinerariesDisplay}                
            </div>
        </Default>
    )
}

module.exports = Index