const React = require('react')
const Default = require('./layouts/default')

function tripCreator (){
    return(
        <Default>
            <header>
                <h1>Your Trip Planning App</h1>
            </header>
            <div className="main-container">
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

module.exports = tripCreator