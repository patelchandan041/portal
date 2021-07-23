import React from 'react';
import './Header.css'
import { Avatar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Notification from '../assets/icons/notification.svg'
import Setting from '../assets/icons/settings.svg'
import SettingsIcon from '@material-ui/icons/Settings';

function Header(){
    return(
        <div className="header">
            <div className="header-cont">
          <img className="header-img" src="https://nimapinfotech.com/wp-content/uploads/2019/01/nimap-logo.png" alt="" />
          <nav className="navbar">
              <li>Dashboard</li>
              <li>Jobs</li>
              <li>Careers</li>
          </nav>
          <button className="header-button">Add Candidate</button>
          <div class="vl"></div>
          <div className="header-right">
               <Avatar className="icons" />
               <img src={Notification} className="icons" alt="" />
               <img src={Setting} className="icons" alt="" />
          </div>
          </div>
        </div>
    )
}

export default Header