import React from 'react';
import './Resume.css'
function Resume (){
    return(
        <div className="resume">
           <div className="resume-top">
               <div className="resume-topleft">
                <h3>CV/Resume</h3>
               </div>
               <div className="resume-topright">
                 <input type="file" placeholder="Upload a file" />
                 <button className="btn btn-primary-dg">Submit</button>
               </div>
           </div>
           <div className="resume-bottom">
               <img className="resume-bottomimg" src="https://resumebuild.com/wp-content/uploads/2018/11/hero-img.png" alt="" />
           </div>
        </div>
    )
}

export default Resume