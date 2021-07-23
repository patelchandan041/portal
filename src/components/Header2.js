import React from 'react';
import './Header2.css';
import SearchIcon from '@material-ui/icons/Search';
import Edit from '../assets/icons/Edit(Jobs).svg'
import View from '../assets/icons/View(Jobs).svg'

function Header2 () {
    return(
        <div className="header2">
          <div className="header2-search">
              <input className="header2-input" type="text"  placeholder="search candidates" />
            <SearchIcon />
          </div>
          <select name="cars" id="cars">
           <option value="volvo">React</option>
          <option value="saab">Node</option>
          <option value="mercedes">Php</option>
          <option value="audi">Java</option>
           </select>
          <img src={Edit} className="header2-icons" />
          <img src={View} className="header2-icons" />
         </div>
    )
}

export default Header2