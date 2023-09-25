const React = require('react')
const Default = require('./layouts/default')

function tripCreator ({ hotels }){
    return(
        <Default>
            <header>
                <h1>Where are you headed?</h1>
            </header>
            <div className="main-container">
                <div className="form-container">
                <h2>Make a New trip</h2>
                <form action='/itineraries' method='POST'>
                    <label htmlFor='name'>Name your trip</label>
                    <input type='text' name='name' id='name'/>
                    <label htmlFor='hotel'>Pick a hotel</label>
                    <select name="hotel" id="hotel">
                    {hotels.map(hotel => {
                        return(
                            <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                        )
                        })}
                    </select>
                    <label htmlFor='startDate'>Check in Date</label>
                    <input type="date" name="startDate" id="startDate"/>
                    <label htmlFor='endDate'>Check out Date</label>
                    <input type="date" name="endDate" id="endDate"/>
                    <input type="submit" className="button" value='Submit'/>
                </form>
                </div>
            </div>
        </Default>
    )
}

module.exports = tripCreator