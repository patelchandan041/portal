import React,{useState} from 'react';
import {Button} from 'react-bootstrap'
import Modal from 'react-modal'
import './Test.css'
import {BrowserRouter,Route,NavLink,Switch} from 'react-router-dom'
import Resume from './Resume';
import Event from './Event';
import Application from './Application';

function Test () {
    const [isOpen, setIsOpen] = useState(true);

    function toggleModal() {
      setIsOpen(!isOpen);
    }
    return(
        <div className="test">
           
           <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
          <div className="modal-head">
        <small>Akansha Chauhan</small>
        <small>+98552454447</small>
        </div>
        <nav className="modalnav">
         <NavLink exact style={{textDecoration:"none"}} activeClassName="active-class" to='/app' ><li >Application </li> </NavLink>
         <li > <NavLink exact style={{textDecoration:"none"}} activeClassName="active-class" to='/resume'  >Resume</NavLink> </li>
        <NavLink exact style={{textDecoration:"none"}} activeClassName="active-class" to='/event' ><li>Events</li> </NavLink>
        </nav>
       <Switch>
       <Route exact path="/app">
         <Application />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/event">
          <Event />
        </Route>
        </Switch>
      </Modal>
        </div>
    )
}

export default Test