import React, { useState } from 'react'
import { Link } from "react-router-dom"
import profile from '../../assest/admin/img/undraw_profile.svg';

const Topbar = () => {
    const [clicked, setClicked] = useState();
    const change = () => {
        setClicked(clicked,false);
    }
    React.useEffect(() => {
        async function init() {
            localStorage.clear();
            localStorage.setItem("role", true);
        }
        init();
    }, [clicked])



    return (
        <>
            {/* <!-- Topbar --> */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Search --> */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append" />
                        <button className="btn btn-primary" type="button">
                            <i className="fas fa-search fa-sm"></i>
                        </button>
                    </div>

                </form>
                <Link to={"/"} >
                    Logout
                </Link>


            </nav>
            {/* <!-- End of Topbar --> */}

        </>
    )
}
export default Topbar