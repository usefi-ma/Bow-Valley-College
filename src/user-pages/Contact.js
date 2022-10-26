import React from 'react'
import {Link} from 'react-router-dom'

const Contact = () => {
    return (
        <>
        
         <section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Contact Us
                            </h1>
                            <p className="text-white link-nav">
                                <Link to="/">Home </Link> 
                             <span className="lnr lnr-arrow-right"></span> 
                              <Link to="/Contact"> Contact Us</Link>
                              </p>
                        </div>
                    </div>
                </div>
            </section>
         
            <section className="contact-page-area section-gap">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 d-flex flex-column address-wrap">
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-home"></span>
                                </div>
                                <div className="contact-details">
                                    <h5>Binghamton, New York</h5>
                                    <p>
                                        4343 Hinkle Deegan Lake Road
                                    </p>
                                </div>
                            </div>
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-phone-handset"></span>
                                </div>
                                <div className="contact-details">
                                    <h5>00 (958) 9865 562</h5>
                                    <p>Mon to Fri 9am to 6 pm</p>
                                </div>
                            </div>
                            <div className="single-contact-address d-flex flex-row">
                                <div className="icon">
                                    <span className="lnr lnr-envelope"></span>
                                </div>
                                <div className="contact-details">
                                    <h5>support@colorlib.com</h5>
                                    <p>Send us your query anytime!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <form className="form-area contact-form text-right" >
                                <div className="row">
                                    <div className="col-lg-6 form-group">
                                        <input placeholder="Enter your name"
                                            className="common-input mb-20 form-control" />

                                        <input placeholder="Enter email address"
                                            className="common-input mb-20 form-control" />

                                        <input placeholder="Enter subject"
                                            className="common-input mb-20 form-control" />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <textarea className="common-textarea form-control"
                                            placeholder="Enter Messege"></textarea>
                                    </div>
                                    <div className="col-lg-12">
                                        <button className="genric-btn primary" >Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </section>
        
        </>
    )
}
export default Contact;