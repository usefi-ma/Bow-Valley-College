import React from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"


export const Nav = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    //window.location.reload();
    navigate('/home');
  }
  return (
    <div>
      <nav id="nav-menu-container">
        <ul className="nav-menu">

          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/Program">Programs</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
          {user != null ? <li><NavLink to="/RegisterCourse">RegisterCourse</NavLink></li> : <li></li>}
          <li><NavLink to="/Signup">Signup</NavLink></li>
          {/* <li><NavLink to="/Login">Login</NavLink></li> */}
          {user != null ? <li>
            <a className="nav-link ml-auto cursor_pointer logout_link" title="logout" onClick={() => logout()}>
              logout
            </a>
          </li>:<li><NavLink to="/Login">Login</NavLink></li>}
          {/* <li><NavLink to="/AdminLogin">Admin Login</NavLink></li> */}
        </ul>
      </nav>
    </div>
  )
}
