import React, { useState, useEffect } from 'react'
import headerImg from '../assest/img/m-img.jpg';
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import * as QueryString from "query-string"
import ProgramDetailItem from './ProgramDetailItem';
import logo from '../assest/img/logo.png';

import { Nav } from '../component/Nav';

const currentPrograms = [
	{
		code: 1,
		name: "Information Technology Systems Diploma",
		image: "/p1.jpg",
		dateStarting: "SEPTEMBER 05, 2023",
		dateEnding: "May 05, 2025",
		fee: "CAD $42,407",
		description: "Our Information Technology Systems (ITS) Diploma will give you the hardware and software skills required for the generation, storage, retrieval, transmission, and protection of digital information",
		type: "Diploma",
		duration: "2 Years",
		courses: "<h5>Term1</h5><ul><li>COvid2 - Web</li></ul><br><h5>Term2</h5><ul><li>COvid2 - Web</li></ul><br>",
	},
	{
		code: 2,
		name: "Software Development Post-Diploma Certificate",
		image: "/p2.jpg",
		dateStarting: "SEPTEMBER 05, 2023",
		dateEnding: "May 05, 2024",
		fee: "CAD $20,458",
		description: "Prepare for a career in computer programming, web application development, software testing, and quality control.",
		type: "Certificate",
		duration: "2 Terms",
		courses: "Term1-CVOD201-Web:Term1-CVOD201-Web:Term1-CVOD201-Web:Term1-CVOD201-Web:Term2-CVOD201-Web",
	},
	{
		code: 3,
		name: "Software Development Diploma",
		image: "/p3.jpg",
		dateStarting: "SEPTEMBER 05, 2023",
		dateEnding: "May 05, 2025",
		fee: "CAD $42,407",
		description: "Gain the skills you need to create the latest computer, mobile, and gaming applications. Prepare to transform your ideas into reality all while developing your problem-solving skills.",
		type: "Diploma",
		duration: "2 Years",
		courses: "Term1-CVOD201-Web:Term1-CVOD201-Web:Term1-CVOD201-Web:Term1-CVOD201-Web:Term2-CVOD201-Web",
	}]
var result = '';
const ProgramDetail = () => {
	const location = useLocation();
	const params = QueryString.parse(location.search)
	const [courses, SetCourses] = useState(currentPrograms);

	useEffect(() => {
		// Update the document title using the browser API
		let temp = courses;
		result = temp.find(item => item.code == params.code);
		SetCourses(result)
	}, []);



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
								{courses.name}
							</h1>
							<p className="text-white link-nav"><Link to="/home">Home </Link>
								<span className="lnr lnr-arrow-right"></span>
								<Link to="/Program">Courses</Link></p>
						</div>
					</div>
				</div>
			</section>


			{/* <!-- Start course-details Area --> */}
			<section className="course-details-area pt-120 mb-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 left-contents">
							<div className="main-image">
								<img className="img-fluid" src={headerImg} alt="" />
							</div>
							<div className="jq-tab-wrapper" id="horizontalTab">
								<div className="jq-tab-content-wrapper">
									<div className="container">
										<div className="row">
										
											<div className="col-xs-12">
												<div className='p-3'>
												<div className="header-variant header-variant-wrapper-1">
													<h4 >
														Course Outline
													</h4>
												</div>

												<ProgramDetailItem info={courses} />

												</div>
											</div>
										</div>
									</div>



								</div>
							</div>
						</div>
						<div className="col-lg-4 right-contents">
							<ul>
								<li>
									<a className="justify-content-between d-flex" href="#">
										<p>Course Fee </p>
										<span>{courses.fee} </span>
									</a>
								</li>
								<li>
									<a className="justify-content-between d-flex" href="#">
										<p>Starting Date </p>
										<span>{courses.dateStarting} </span>
									</a>
								</li>
								<li>
									<a className="justify-content-between d-flex" href="#">
										<p>Ending Date </p>
										<span>{courses.dateEnding} </span>
									</a>
								</li>
								<li>
									<a className="justify-content-between d-flex" href="#">
										<p>Duration </p>
										<span>{courses.duration} </span>
									</a>
								</li>

							</ul>
							<Link to="/SignUp" className="primary-btn text-uppercase">Enroll the course</Link>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End course-details Area --> */}


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
export default ProgramDetail;
