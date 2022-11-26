import React, { useState } from 'react'
import { Link } from "react-router-dom"
import profile from '../../assest/admin/img/undraw_profile.svg';
import { withRouter, useLocation } from "react-router-dom";


const Topbar = () => {

    //get data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    const location = useLocation();

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }


    return (

        <>
            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>

                <a className="navbar-brand" href="javascript:;">

                    <img width="50px" style={{ marginRight: '8px' }} src={user != null ? profile : null} />
                    {user != null ? user.fullName : null}
                    <span style={{ marginRight: 20 }}>({location.pathname})</span>
                </a>

                <a className="nav-link ml-auto cursor_pointer" title="logout" onClick={() => logout()}>
                    logout
                </a>


            </nav>
            {/* <!-- End of Topbar --> */}

        </>
    )
}
export default Topbar