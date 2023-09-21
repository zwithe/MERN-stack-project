const React = require('react')
const Default = require('./layouts/default')

function tripCreator ({ hotels }){
    return(
        <Default>
            <header>
                <h1>Your Trip Planning App</h1>
            </header>
            <div className="main-container">
                <div className="form-container">
                <h2>Make a New trip</h2>
                <form>
                    <select name="hotel" id="hotel">
                    {hotels.map(hotel => {
                        return(
                            <option key={hotel._id} value={hotel._id}>{hotel.name}</option>
                        )
                        })}
                    </select>
                    <input type="date" placeholder="Check-In Date"/>
                    <input type="date" placeholder="Check-Out Date"/>
                    <input type="submit" className="button" value="Add Hotel"/>
                </form>
                </div>
            </div>
        </Default>
    )
}

module.exports = tripCreator