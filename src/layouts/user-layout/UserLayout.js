import React from 'react'
import '../../assest/css/bootstrap.css'
import '../../assest/css/main.css'
import logo from '../../assest/img/logo.png';
import '../../assest/css/main.css'
import { Nav } from '../../component/Nav';
import { Route, Routes,Link } from 'react-router-dom';
import Home from '../../user-pages/Home';
import Contact from '../../user-pages/Contact'
import Program from '../../user-pages/Program'
import ProgramDetail from '../../user-pages/ProgramDetail';
import PageNotFound from '../../component/Page-not-found/PageNotFound';




const UserLayout = () => {
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
                            <Link to="/"><img src={logo} alt="" title="" /></Link>
                        </div>
                        <Nav />
                    </div>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/Program" element={<Program />} exact/>
                <Route path="/Contact" element={<Contact />} exact />
                <Route path="/ProgramDetail" element={<ProgramDetail />} />
                <Route path="*" element={<PageNotFound /> } />
            </Routes>

            <footer className="footer-area section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4>Top Products</h4>
                                <ul>
                                    <li><a href="#">Managed Website</a></li>
                                    <li><a href="#">Manage Reputation</a></li>
                                    <li><a href="#">Power Tools</a></li>
                                    <li><a href="#">Marketing Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4>Quick links</h4>
                                <ul>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Brand Assets</a></li>
                                    <li><a href="#">Investor Relations</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4>Features</h4>
                                <ul>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Brand Assets</a></li>
                                    <li><a href="#">Investor Relations</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4>Resources</h4>
                                <ul>
                                    <li><a href="#">Guides</a></li>
                                    <li><a href="#">Research</a></li>
                                    <li><a href="#">Experts</a></li>
                                    <li><a href="#">Agencies</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4  col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h4>Newsletter</h4>
                                <p>Stay update with our latest</p>
                                <div className="" id="mc_embed_signup">
                                    {/* <form target="_blank" >
                                        <div className="input-group">
                                            <input type="text" className="form-control" name="EMAIL" placeholder="Enter Email Address" />
                                            <div className="input-group-btn">
                                                <button className="btn btn-default" type="submit">
                                                    <span className="lnr lnr-arrow-right"></span> 
                                                    <i class="fa fa-search" aria-hidden="true"></i>
                                                </button>
                                            </div>
                                            <div className="info"></div>
                                        </div>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom row align-items-center justify-content-between">
                        <p className="footer-text m-0 col-lg-6 col-md-12">
                            Copyright
                        </p>
                        <div className="col-lg-6 col-sm-12 footer-social">
                            <a href="#"><i className="fa fa-facebook"></i></a>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                            <a href="#"><i className="fa fa-dribbble"></i></a>
                            <a href="#"><i className="fa fa-behance"></i></a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default UserLayout;