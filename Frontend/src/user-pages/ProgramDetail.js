import React, { useState, useEffect } from 'react'
import headerImg from '../assest/img/m-img.jpg';
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import * as QueryString from "query-string"
import ProgramDetailItem from './ProgramDetailItem';
import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';


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
		courses: "<h5>Term 1</h5><ul><li>Project management1 - Pr111</li><li>C++ Programming Fundamentals - C++111</li><li>CompM1111 - Computer Maintenance</li><li>IS1111 - Information Security1</li></ul><br><h5>Term 2</h5><ul><li>Networking - Net222</li><li>Web technology - Web222</li><li>Project Managemen - Pro222</li></ul><br><h5>Term 3</h5><ul><li>Advanced Project management1- Pr333</li><li>Advanced C++ Programming Fundamentals - C++333</li><li>Advanced Computer Maintenance - CompM333</li><li>Advanced Information Security1 - IS333</li></ul><br><h5>Term 4</h5><ul><li>Advanced Networking - Net222</li><li>Advanced Web technology- Web222</li><li>Advanced Project Managemen - Pro222</li></ul>",
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
		courses: "<h5>Term 1</h5><ul><li>Project management1 - Pr111</li><li>C++ Programming Fundamentals - C++111</li><li>CompM1111 - Computer Maintenance</li><li>IS1111 - Information Security1</li></ul><br><h5>Term 2</h5><ul><li>Networking - Net222</li><li>Web technology - Web222</li><li>Project Managemen - Pro222</li></ul><br>",
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
		courses: "<h5>Term 1</h5><ul><li>Project management1 - Pr111</li><li>C++ Programming Fundamentals - C++111</li><li>CompM1111 - Computer Maintenance</li><li>IS1111 - Information Security1</li></ul><br><h5>Term 2</h5><ul><li>Networking - Net222</li><li>Web technology - Web222</li><li>Project Managemen - Pro222</li></ul><br><h5>Term 3</h5><ul><li>Advanced Project management1- Pr333</li><li>Advanced C++ Programming Fundamentals - C++333</li><li>Advanced Computer Maintenance - CompM333</li><li>Advanced Information Security1 - IS333</li></ul><br><h5>Term 4</h5><ul><li>Advanced Networking - Net222</li><li>Advanced Web technology- Web222</li><li>Advanced Project Managemen - Pro222</li></ul>",
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
		      <UserHeader />
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
							<Link to="/RegisterCourse" className="primary-btn text-uppercase">Enroll the course</Link>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End course-details Area --> */}


			<UserFooter />

		</>
	)
}
export default ProgramDetail;
