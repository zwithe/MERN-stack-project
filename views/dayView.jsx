const React = require('react')
const Default = require('./layouts/default')

function dayView ({day}){
    /*const dayDisplay = day.map(day =>{
        return(
             <li key={day._id} className="form-container" >
                 <a>
                     <h2>{day._id}</h2>
                 </a>
             </li>
         )
    })*/
    return(
        <Default>
            <header>
                <h1>Your Daily Planner</h1>
            </header>
            <div className="main-container">
                {day.name}
            </div>
        </Default>
    )
}

module.exports = dayView