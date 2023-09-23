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
                
                </div>
            </div>
        </Default>
    )
}

module.exports = tripSummary