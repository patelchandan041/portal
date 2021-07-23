import React from 'react';

function Application () {
    return(
        <div className="application">
           <div className="modal-container">
        <div className="modal-conthead">
               <p>Schedule A New Event </p>
               <button className="modal-conthead-btn"> Back To Events</button>
           </div>
           <hr />
           <label className="application-label">Event type</label>
         <input className="application-inputs" type="text" />
         <small className="application-label">Tip: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, minima.</small>
         <label className="application-label">Date</label>
         <input className="application-inputs" type="date" />
         <div className="modal-timetitle">
                 <p>Start time</p>
                 <p>End time</p>
             </div>
         <div className="modal-time">
         <input type="text"  />
          <input type="text"  />
          <input type="text"  />
          <input type="text"  />
        </div>
         <label className="application-label">Attendence</label>
         <input className="application-inputs" type="text" />
         <label  className="application-label">Location</label>
         <input className="application-inputs" type="text" />
         <label  className="application-label">Description</label>
         <textarea className="application-inputs" name="" id="" cols="30" rows="5"></textarea>
         <div className="buttons">
         <button className="btn btn-lg btn-primary">Invite</button>
         <button className="btn btn-link">Cancel</button>
         </div>
        </div>
        </div>
    )
}

export default Application
