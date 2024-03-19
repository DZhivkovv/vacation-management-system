/* A navigation bar that includes a logo linking to the homepage, navigation links to different pages, and a hamburger menu icon for mobile responsiveness. */

import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.scss';

import nvnaLogo from './nvna-logo.png'

const Navbar = () => {
  return (
    <nav class="navbar">
      {/* NVNA logo, also a link to the homepage */}
      <div class="logo">
        <NavLink to='/'>
          <img src={nvnaLogo} alt='Nikola Vaptsarov Naval Academy'/>
        </NavLink>      
      </div>

      <ul class="nav-links">
        {/* Hamburger button */}
        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" class="hamburger">&#9776;</label>

        {/* Navbar links */}
        <div class="menu">
          {/* Link to page for scheduling vacations */}
          <li>
            <NavLink 
              to="/schedule-vacation"
            >
              Запазeте отпуск
            </NavLink>
          </li>

          {/* Link to a page displaying a schedule of all vacations. */}
          <li>
            <NavLink 
              to="/schedule"
            >
              График с отпуски
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar;
