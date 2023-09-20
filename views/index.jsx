const React = require('react')
const Default = require('./layouts/default')

function Index (){
    return(
        <Default>
             <header>
                <h1>Your Trip Planning App</h1>
            </header>
            <div className="main-container">
                <div className="trip-details">
                <div className="card">
                    <h2>Hotel Name</h2>
                    <p>Location: City Center</p>
                    <p>Check-In Date: 2023-10-15</p>
                    <p>Check-Out Date: 2023-10-18</p>
                </div>
                <div class="card">
                    <h2>Activity Name</h2>
                    <p>Description: Explore the city's landmarks.</p>
                </div>
                </div>
                <div className="form-container">
                <h2>Add New Data</h2>
                <form>
                    <input type="text" placeholder="Hotel Name"/>
                    <input type="text" placeholder="Location"/>
                    <input type="date" placeholder="Check-In Date"/>
                    <input type="date" placeholder="Check-Out Date"/>
                    <input type="submit" className="button" value="Add Hotel"/>
                </form>
                </div>
            </div>
        </Default>
    )
}

module.exports = Index