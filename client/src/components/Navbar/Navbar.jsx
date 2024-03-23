/* A navigation bar that includes a logo linking to the homepage, navigation links to different pages, and a hamburger menu icon for mobile responsiveness. */

import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.scss';

import nvnaLogo from './nvna-logo.png'

const Navbar = () => {
  return (
    <nav class="navbar">
      {/*Left part of navigation bar - NVNA logo, also a link to the homepage */}
      <div>
        <NavLink to='/'>
          <img src={nvnaLogo} alt='Nikola Vaptsarov Naval Academy' className='logo'/>
        </NavLink>      
      </div>

      {/*Right part of navigation bar - navbar links and a hamburger menu */}
      <ul class="navigation-links">
        {/* Hamburger button - hidden for devices bigger than 768px */}
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>

        {/* Navigation links */}
        <div class="link-container">
          {/* Link to page where the user can schedule a vacation */}
          <li>
            <NavLink 
              to="/schedule-vacation"
              className={({ isActive }) =>
              isActive ? "link active-link" : "link"}
            >
              Запазeте отпуск
            </NavLink>
          </li>

          {/* Link to a page where the user can see all scheduled vacations by his colleagues or himself. */}
          <li>
            <NavLink 
              to="/schedule"
              className={({ isActive }) =>
              isActive ? "link active-link" : "link"
            }>
              График с отпуски
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;
