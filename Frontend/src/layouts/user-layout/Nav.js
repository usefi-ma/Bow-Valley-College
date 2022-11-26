import React from 'react'
import { NavLink } from "react-router-dom";


export const Nav = () => {
  
  return (
    <div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">

          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/Program" >Programs</NavLink></li>
          <li><NavLink to="/Contact" >Contact</NavLink></li>
          <li><NavLink to="/RegisterCourse" >RegisterCourse</NavLink></li>
          <li><NavLink to="/Signup" >Signup</NavLink></li>
          <li><NavLink to="/Login">Login</NavLink></li>
          {/* <li><NavLink to="/AdminLogin">Admin Login</NavLink></li> */}
        </ul>
      </nav>
    </div>
  )
}
