import React from 'react';
import './Event.css'

function Event (){
    return(
        <div className="event">
         <div className="event-top">
         <button className="event-topbtn">Schedule A New Event</button>
         </div>
         <div className="event-bottom">
             <h3>You have no events schedule yet</h3>
         </div>
        </div>
    )
}
export default Event