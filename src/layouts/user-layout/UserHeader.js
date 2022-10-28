import React from 'react'
import logo from '../../assest/img/logo.png';
import { Link } from 'react-router-dom'
import { Nav } from './Nav';

const UserHeader = () => {
    return (
        <>
            <header id="header">
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-8 header-top-left no-padding">
                                <ul className='mb-1'>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-4 header-top-right no-padding">
                                <a href="tel:+953 012 3654 896"><span className="lnr lnr-phone-handset"></span> <span className="text">+953 012 3654 896</span></a>
                                <a href="mailto:support@colorlib.com"><span className="lnr lnr-envelope"></span> <span className="text">support@colorlib.com</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container main-menu">
                    <div className="row align-items-center justify-content-between d-flex">
                        <div id="logo">
                            <Link to="/home"><img src={logo} alt="" title="" /></Link>
                        </div>
                        <Nav />
                    </div>
                </div>
            </header>


        </>
    )
}

export default UserHeader;