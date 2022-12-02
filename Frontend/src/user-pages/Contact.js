import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';
import Axios from "axios";
import uuid from 'react-uuid';

const Contact = () => {
  const unique_id = uuid();
  const small_Form_id = unique_id.slice(0, 8);

  const [createFrom, setCreateForm] = useState({
    formId: small_Form_id,
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    message: ""
  });

  const [msg, setMsg] = useState("")
  const handleChange = (event) => {
    setCreateForm({ ...createFrom, [event.target.name]: event.target.value });  //any input element name and its value
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(createFrom);
    Axios.post('http://localhost:5000/Form', createFrom)
      .then(response => {
        setMsg(response)
        console.log(response)
      });
  };

  return (
    <>
      <UserHeader />
      <section className="banner-area relative about-banner" id="home">
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content col-lg-12">
              <h1 className="text-white">Contact Us</h1>
              <p className="text-white link-nav">
                <Link to="/home">Home </Link>
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
                  <p>4343 Hinkle Deegan Lake Road</p>
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
            {/* FORM START */}
            <div className="col-lg-8">
              <form className="form-area contact-form text-right" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 form-group">
                  <input
                      type="hidden"
                      name="formId"
                      value={createFrom.formId}
                      onChange={handleChange}
                       />
                    <input
                      placeholder="First Name"
                      className="common-input mb-20 form-control"
                      type="text"
                      required
                      name="firstName"
                      value={createFrom.firstName}
                      onChange={handleChange} />

                    <input className="common-input mb-20 form-control"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={createFrom.lastName}
                      onChange={handleChange}
                    />
                    <input
                      placeholder="Enter email address"
                      className="common-input mb-20 form-control"
                      type="text"
                      required
                      name="email"
                      value={createFrom.email}
                      onChange={handleChange}
                    />

                    <input
                      placeholder="Enter title"
                      className="common-input mb-20 form-control"
                      type="text"
                      required
                      name="title"
                      value={createFrom.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6 form-group">
                    <textarea
                      className="common-textarea form-control"
                      placeholder="Enter Messege"
                      type="text"
                      required
                      name="message"
                      value={createFrom.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button className="genric-btn primary">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <UserFooter />
    </>
  );
};
export default Contact;
