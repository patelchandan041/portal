import React,{useState} from 'react';
import './Home.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import View from '../assets/icons/View.svg'
import {Button,Modal} from 'react-bootstrap'
import Test from './Test';
import ThreeDot from '../assets/icons/Hamburger menu.svg'

function Home () {
    const [show, setShow] = useState(false)
    const [row,setRow] = useState(false)
    return(
        <div className="home">
        {row?(<Test />):null}
            <div className="modal">
            <Modal show={show}  >
       <Modal.Body>Add Stage</Modal.Body>
        <p>&nbsp; Stage name</p>
        <input style={{margin:"0px 10px"}} type="text" placeholder="e.g login ispsum" />
        <Modal.Footer>
          <Button  variant="primary" >
            Add
          </Button>
          <Button onClick={()=>setShow(false)} variant="lighter" >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

            <div className="home-container">
            <div className="left">
              <div className="left-box">
                  <p>All Candidates</p>
                  <p>20</p>
              </div>
              <div className="left-box">
                  <p>All Candidates</p>
                  <p>20</p>
              </div>
              <div className="left-box">
                  <p>All Candidates</p>
                  <p>20</p>
              </div>
              <div className="left-box">
                  <p>All Candidates</p>
                  <p>20</p>
              </div>
              <div className="left-box">
                  <p>All Candidates</p>
                  <p>20</p>
              </div>
              <div className="left-box">
                  <p>All Candidates</p>
                  <p>20</p>
              </div>
              <button className="left-stagebtn" onClick={()=>setShow(true)}>Add Stage</button>
               </div>

           <div className="mid">
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>

               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               <div className="mid-box" onClick={()=>setRow(true)} >
                 <div className="mid-boxleft">
                     <small style={{fontWeight:"bolder",marginRight:"300px"}}>Chandan Patel</small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June </small>
                     <small className="mid-boxleftline">Added by: chandan &nbsp;&nbsp;&nbsp;&nbsp; added at:5 June &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; status :joined </small>
                 </div>
                 <div className="mid-boxright">
                  <img src={View} className="mid-boxrightitem" />
                  <img src={ThreeDot} className="mid-boxrightitem"  />
                 </div>
               </div>
               
              
            
               
              </div>
              
           <div className="right">
             <p>Status</p>
             <div className="rightboxes">
            <input type="checkbox" />
            <label>Applied</label>
            </div>
            <div className="rightboxes">
            <input type="checkbox" />
            <label>Applied</label>
            </div>
            <div className="rightboxes">
            <input type="checkbox" />
            <label>Applied</label>
            </div>
            <div className="rightboxes">
            <input type="checkbox" />
            <label>Applied</label>
            </div>
            <div className="rightboxes">
            <input type="checkbox" />
            <label>Applied</label>
            </div>
            <div className="rightboxes">
            <input type="checkbox" />
            <label>Applied</label>
            </div>
            <div className="rightboxes">
            <input type="checkbox" />
            <label>Applied</label>
            </div>
            <div className="rightboxes">
            <input type="checkbox" />
            <label>Applied</label>
            </div>
            <div className="rightboxes">
            <input type="checkbox" />
            <label>Applied</label>
            </div>

            
             
           </div>

           </div>
           
        </div>
    )
}
export default Home