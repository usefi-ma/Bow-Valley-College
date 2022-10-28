import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assest/img/logo.png';
import { Nav } from '../component/Nav';
import CourseList from '../user-pages/CourseList'

const currentCourses = [{ name: 'Project management1', code: 'Pr111', selMode: false },
{ name: 'C++ Programming Fundamentals ', code: 'C++111', selMode: false },
{ name: 'Computer Maintenance', code: 'CompM1111', selMode: false },
{ name: 'Information Security1', code: ' IS1111', selMode: false },
{ name: 'Networking', code: ' Net222', selMode: false },
{ name: 'Web technology', code: ' Web222', selMode: false },
{ name: 'Project Management', code: ' Pro222', selMode: false },
{ name: 'Advanced Project management1', code: ' Pr333', selMode: false },
{ name: 'Advanced C++ Programming Fundamentals ', code: 'C++333', selMode: false },
{ name: 'Advanced Computer Maintenance', code: 'CompM333', selMode: false },
{ name: 'Advanced Information Security1', code: ' IS333', selMode: false },
{ name: 'Advanced Networking', code: ' Net222', selMode: false },
{ name: 'Advanced Web technology', code: ' Web222', selMode: false },
{ name: 'Advanced Project Management', code: ' Pro222', selMode: false }];

const RegisterCourse = () => {
    //get data from localStorage
    const student = JSON.parse(localStorage.getItem('student'));

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [term, setTerm] = useState('');
    const [courses, setCourses] = useState(currentCourses)
    const [selectedCourse, setSelectedCourse] = useState({});



    const setSelectMode = (id) => {
        const temp = [...courses];
        const index = temp.findIndex(q => q.code == id);
        temp[index].selMode = true;
        setSelectedCourse(temp[index]);
        setCourses([...temp]);
        console.log(selectedCourse);
    }

    const handleTerm = (e) => {
        setTerm(e.target.value);
        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (term === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            console.log(`Registered courses for term:${term} `)
            const temp = courses.filter(q => q.selMode == true);
            console.log(temp);
            if (temp.length > 4 || temp.length < 2) {
                alert("You must at least 2 courses and at most 4 courses for Diploma")
            }
        }
    };

    const successMessage = () => {
        return (
            <div className="alert alert-success" role="alert" style={{ display: submitted ? '' : 'none', }}>
                Term {term}, You registered successfully!
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div className="alert alert-danger" role="alert" style={{ display: error ? '' : 'none', }}>
                Please fill all the inputs
            </div>
        );
    };





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

            <section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Course Registeration
                            </h1>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container pt-5">


                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
                <form className='mb-4'>
                    <div className="row">
                        <div className='col-md-12'>
                            <p>
                                <b>
                                    {student != null ? student.fullName : null}
                                </b>
                            </p>
                        </div>
                        <div className='col-md-12'>
                            <p><b>Program:</b> Software Development Diploma</p>
                        </div>
                        <div className="col-sm-4 mb-4">
                            <select className="form-select form-control user_drp" value={term} onChange={handleTerm} aria-label="Default select example">
                                <option selected>Terms</option>
                                <option value="1">Term 1</option>
                                <option value="2">Term 2</option>
                                <option value="3">Term 3</option>
                            </select>
                        </div>
                        <table className='table table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>code</th>
                                    <th>courses</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, i) =>
                                    <CourseList SelectedMode={setSelectMode} data={course} key={i + 1} />
                                )}
                            </tbody>
                        </table>
                        <button onClick={handleSubmit} className="btn btn-primary btn-user mb-4" type="submit">
                            Register Course
                        </button>

                    </div>
                </form>

            </div>
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
export default RegisterCourse