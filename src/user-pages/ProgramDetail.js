import React, { useState, useEffect } from 'react'
import headerImg from '../assest/img/m-img.jpg';
import { Link, useSearchParams } from 'react-router-dom'

const ProgramDetail = () => {

	let prgramItem = '';
	const outlines =
		[{
			term: 1,
			programCode: 1,
			courses: [{ code: "Pr111", name: "Project management1" },
			{ code: "C++111", name: "C++ Programming Fundamentals" },
			{ code: "CompM1111", name: "Computer Maintenance" },
			{ code: "IS1111", name: "Information Security1" }],
		},
		{ term: 2, programCode: 1, courses: [{ code: "Pr111", name: "Project management1" }, { code: "C++111", name: "C++ Programming Fundamentals" }, { code: "CompM1111", name: "Computer Maintenance" }, { code: "IS1111", name: "Information Security1" }] },
		{ term: 3, programCode: 1, courses: [{ code: "Pr111", name: "Project management1" }, { code: "C++111", name: "C++ Programming Fundamentals" }, { code: "CompM1111", name: "Computer Maintenance" }, { code: "IS1111", name: "Information Security1" }] },
		{ term: 4, programCode: 1, courses: [{ code: "Pr111", name: "Project management1" }, { code: "C++111", name: "C++ Programming Fundamentals" }, { code: "CompM1111", name: "Computer Maintenance" }, { code: "IS1111", name: "Information Security1" }] }
	]

	const currentProgram = [
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
			outLineCode:1,
			// outlines: [{ term: 1, courses: [{ code: "Pr111", name: "Project management1" }, { code: "C++111", name: "C++ Programming Fundamentals" }, { code: "CompM1111", name: "Computer Maintenance" }, { code: "IS1111", name: "Information Security1" }] },
			// { term: 2, courses: [{ code: "Pr111", name: "Project management1" }, { code: "C++111", name: "C++ Programming Fundamentals" }, { code: "CompM1111", name: "Computer Maintenance" }, { code: "IS1111", name: "Information Security1" }] },
			// { term: 3, courses: [{ code: "Pr111", name: "Project management1" }, { code: "C++111", name: "C++ Programming Fundamentals" }, { code: "CompM1111", name: "Computer Maintenance" }, { code: "IS1111", name: "Information Security1" }] },
			// { term: 4, courses: [{ code: "Pr111", name: "Project management1" }, { code: "C++111", name: "C++ Programming Fundamentals" }, { code: "CompM1111", name: "Computer Maintenance" }, { code: "IS1111", name: "Information Security1" }] }]
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
			// outlines: [{ term: 1, courses: [{ code: "SODV1101", name: "Programming Fundamentals" }, { code: "TECH1101", name: "Web and Internet Fundamentals" }, { code: "TECH1102", name: "Internet of Things" }, { code: "MATH1901", name: "Math for the Computer Industry" }] },
			// { term: 2, courses: [{ code: "DATA1201", name: "Introduction to Relational Databases" }, { code: "DESN2301 ", name: "User Experience Design" }, { code: "SODV1201 ", name: "Introduction to Web Programming" }, { code: "TECH1201 ", name: "Networking Essentials" }] }]
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
			// outlines: [{
			// 	term: 1,
			// 	courses: [{ code: "SODV1101", name: "Programming Fundamentals" },
			// 	{ code: "TECH1101", name: "Web and Internet Fundamentals" },
			// 	{ code: "TECH1102", name: "Internet of Things" },
			// 	{ code: "MATH1901", name: "Math for the Computer Industry" }]
			// }]
		}]
	// { term: 2, courses: [{ code: "DATA1201", name: "Introduction to Relational Databases" }, { code: "DESN2301 ", name: "User Experience Design" }, { code: "SODV1201 ", name: "Introduction to Web Programming" }, { code: "TECH1201 ", name: "Networking Essentials" }] },
	// { term: 3, courses: [{ code: "DATA2201 ", name: "Relational Databases" }, { code: "SODV2101 ", name: "Rapid Application Development" }, { code: "SODV2201 ", name: "Web Programming" }, { code: "SODV2202 ", name: "Object Oriented Programming" }] },
	// { term: 4, courses: [{ code: "SODV2203 ", name: "Introduction to Game and Simulation Programming" }, { code: "SODV2401 ", name: "Algorithms and Data Structures" }] 
	const [searchParams, setSearchParams] = useSearchParams();

	currentProgram.forEach(function (item) {
		if (item.code == searchParams.get("code")) {
			prgramItem = item;
		}
	});

	return (
		<>


		{/* {alert(outlines[0].courses[0].code)} */}
		
		{(prgramItem.code)}
			{/* <!-- start banner Area --> */}
			<section className="banner-area relative about-banner" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								{prgramItem.name}
							</h1>
							<p className="text-white link-nav"><Link to="/">Home </Link>
								<span className="lnr lnr-arrow-right"></span>  <Link to="/Program">Courses</Link></p>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End banner Area --> */}

			{/* <!-- Start course-details Area --> */}
			<section className="course-details-area pt-120 mb-5">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 left-contents">
							<div className="main-image">
								<img className="img-fluid" src={headerImg} alt="" />
							</div>
							<div className="jq-tab-wrapper" id="horizontalTab">
								<div className="jq-tab-menu">
									<div className="jq-tab-title active" data-tab="1">Course Outline</div>
								</div>
								<div className="jq-tab-content-wrapper">
									<div className="container">
										<div className="row">
											<div className="col-xs-12">
												<div className="header-variant header-variant-wrapper-1">
													<h1 className="header-variant-2">
													</h1>
												</div>
												<h3 className="header-variant-3">Term 1</h3>
												<div className="accordion">
													<div className="row accordion-title">
														<div className="col-xs-12">
															<h4 className="header-variant-5">Required Courses<span>Credit</span></h4>
														</div>
													</div>
													<div className="row accordion-list">
														<div className="col-xs-12">
															<div className="panel-group accordion type-connected" id="accordion-item-0-0">
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-0-0-0">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-0-0" href="#SODV1101-0-0-0" aria-expanded="true" aria-controls="item-details-item-0-0-0" className="">
																				12.02cc- <span className="accordion-item-title">Programming Fundamentals</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="SODV1101-0-0-0" className="panel-collapse collapse in" aria-labelledby="collapseItem-0-0-0" aria-expanded="true" >
																		<div className="panel-body">
																			<p>Computer programming is central to software development. Learners analyze basic software and technology problems and develop a good programming style and logical thinking to write structured instruction that addresses those problems. Learners demonstrate their structured coding skills by writing correct code with clarity and quality. They use extensively the structured control flow, repetition, block structure, and subroutines in this course.</p>
																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-0-0-1">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-0-0" href="#TECH1101-0-0-1" aria-expanded="false" aria-controls="item-details-item-0-0-1" className="collapsed">
																				TECH1101 - <span className="accordion-item-title">Web and Internet Fundamentals</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="TECH1101-0-0-1" className="panel-collapse collapse" aria-labelledby="collapseItem-0-0-1" aria-expanded="false" style={{ height: 0 }}>
																		<div className="panel-body">

																			<p>This course focuses on the design, construction and website publishing that meet web standards for the internet. During the design of websites, learners address issues such as bandwidth, aesthetics and the user interface. During the construction of websites, learners focus on the use of Hyper Text Markup Language (HTML), cascading style sheets (CSS), basic client-side scripting, website maintenance and web technologies.</p>




																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-0-0-2">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-0-0" href="#TECH1102-0-0-2" aria-expanded="false" aria-controls="item-details-item-0-0-2" className="collapsed">
																				TECH1102 - <span className="accordion-item-title">Internet of Things</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="TECH1102-0-0-2" className="panel-collapse collapse" aria-labelledby="collapseItem-0-0-2" aria-expanded="false">
																		<div className="panel-body">

																			<p>This course focuses on the pervasiveness of the internet. Learners explore the internet of things through the construction of simple interfaces between computers and the devices they control. Through the creation of these interfaces, learners gain insight into the elements of computer architecture, networking, and the programs that control device function within that network.</p>




																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-0-0-3">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-0-0" href="#MGMT1103-0-0-3" aria-expanded="false" aria-controls="item-details-item-0-0-3" className="collapsed">
																				MGMT1103 - <span className="accordion-item-title">Introduction to Project Teams and Technical Communications for Software Development</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="MGMT1103-0-0-3" className="panel-collapse collapse" aria-labelledby="collapseItem-0-0-3" aria-expanded="false">
																		<div className="panel-body">

																			<p>This course prepares learners to function as part of a member of an IT project team.  Practical skills in effective communications and accurate technical communications are applied in real-world organization scenarios.  Learners will also be introduced to roles within a project team as it relates to project management methodologies.</p>




																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-0-0-4">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-0-0" href="#MATH1901-0-0-4" aria-expanded="false" aria-controls="item-details-item-0-0-4" className="collapsed">
																				MATH1901 - <span className="accordion-item-title">Math for the Computer Industry</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="MATH1901-0-0-4" className="panel-collapse collapse" aria-labelledby="collapseItem-0-0-4" aria-expanded="false">
																		<div className="panel-body">

																			<p>This course provides learners with the practical knowledge and skills in the use of mathematics in relation to computers. Alternate number bases, set theory, logic, and Boolean algebra are the foundation of this course. In addition, learners use basic statistical concepts to understand challenges in information technology.</p>




																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
												<h3 className="header-variant-3">Term 2</h3>
												<div className="accordion">
													<div className="row accordion-title">
														<div className="col-xs-12">
															<h4 className="header-variant-5">Required Courses<span>Credit</span></h4>
														</div>
													</div>
													<div className="row accordion-list">
														<div className="col-xs-12">
															<div className="panel-group accordion type-connected" id="accordion-item-1-0">
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-1-0-0">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-1-0" href="#DATA1201-1-0-0" aria-expanded="false" aria-controls="item-details-item-1-0-0">
																				DATA1201 - <span className="accordion-item-title">Introduction to Relational Databases</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="DATA1201-1-0-0" className="panel-collapse collapse" aria-labelledby="collapseItem-1-0-0">
																		<div className="panel-body">

																			<p>In this course, the learner plans, creates and manages a relational database at a fundamental level.  The emphasis of this course is on data manipulation and extraction.<br />Prerequisite: SODV1101</p>




																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-1-0-1">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-1-0" href="#DESN2301-1-0-1" aria-expanded="false" aria-controls="item-details-item-1-0-1">
																				DESN2301 - <span className="accordion-item-title">User Experience Design</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="DESN2301-1-0-1" className="panel-collapse collapse" aria-labelledby="collapseItem-1-0-1">
																		<div className="panel-body">

																			<p>This course introduces the principles of designing the user experience.
																				These principles as well as design thinking are applied in the construction
																				of effective solutions to business scenarios. Learners take a multi-disciplinary
																				approach to integrating skills, concepts, and performance criteria within production
																				teams. The course covers marketing content, layouts, usability testing, and visual
																				theory, as well as introduces designing for emerging technologies.</p>

																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-1-0-2">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-1-0" href="#SODV1201-1-0-2" aria-expanded="false" aria-controls="item-details-item-1-0-2">
																				SODV1201 - <span className="accordion-item-title">Introduction to Web Programming</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="SODV1201-1-0-2" className="panel-collapse collapse" aria-labelledby="collapseItem-1-0-2">
																		<div className="panel-body">

																			<p>This course provides learners with foundational programming knowledge and skills for web application development. Using web technology, learners plan, design, construct and integrate basic server-side components, including databases and scripts.<br />Prerequisites: SODV1101, TECH1101</p>




																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-1-0-3">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-1-0" href="#SODV1202-1-0-3" aria-expanded="false" aria-controls="item-details-item-1-0-3">
																				SODV1202 - <span className="accordion-item-title">Introduction to Object Oriented Programming</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="SODV1202-1-0-3" className="panel-collapse collapse" aria-labelledby="collapseItem-1-0-3">
																		<div className="panel-body">

																			<p>In this course, learners apply principles of design, logic and structure in the creation of  application programs using object-oriented programming language, existing classNamees and user-defined classNamees. Learners use current, evidence-based practices such as automated unit tests and documentation to deliver working software.<br />Prerequisites: SODV1101, MATH1901</p>




																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-1-0-4">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-1-0" href="#TECH1201-1-0-4" aria-expanded="false" aria-controls="item-details-item-1-0-4">
																				TECH1201 - <span className="accordion-item-title">Networking Essentials</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="TECH1201-1-0-4" className="panel-collapse collapse" aria-labelledby="collapseItem-1-0-4">
																		<div className="panel-body">

																			<p>Network systems interconnect computer related resources, services and users. This course provides the learners with a foundation in networking concepts and technologies, with emphasis on terminology, protocols, error detection/correction and network security. Through course activities, learners develop skills to plan and implement small networks across a range of applications.</p>




																		</div>
																	</div>
																</div>


															</div>
														</div>
													</div>
												</div>
												<h3 className="header-variant-3">Term 3</h3>
												<div className="accordion">
													<div className="row accordion-title">
														<div className="col-xs-12">
															<h4 className="header-variant-5">Required Courses<span>Credit</span></h4>
														</div>
													</div>
													<div className="row accordion-list">
														<div className="col-xs-12">
															<div className="panel-group accordion type-connected" id="accordion-item-2-0">
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-2-0-0">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-2-0" href="#DATA2201-2-0-0" aria-expanded="false" aria-controls="item-details-item-2-0-0">
																				DATA2201 - <span className="accordion-item-title">Relational Databases</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="DATA2201-2-0-0" className="panel-collapse collapse" aria-labelledby="collapseItem-2-0-0">
																		<div className="panel-body">

																			<p>In this course learners use Structured Query Language (SQL) on commercial relational databases. Using SQL and SQL procedural language, learners create and manage a relational database, addressing data integrity and security. In addition, learners explore the relationship between database administration and software development.<br />Prerequisite: DATA1201</p>




																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-2-0-1">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-2-0" href="#MGMT1104-2-0-1" aria-expanded="false" aria-controls="item-details-item-2-0-1">
																				MGMT1104 - <span className="accordion-item-title">Introduction to Project Management for IT</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="MGMT1104-2-0-1" className="panel-collapse collapse" aria-labelledby="collapseItem-2-0-1">
																		<div className="panel-body">

																			<p>This course introduces the fundamental principles necessary for successful management of Information Technology (IT) projects. Project planning, management and control techniques will be discussed and the application of computers in project management will be studied.<br />Prerequisite: MGMT1103</p>




																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-2-0-2">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-2-0" href="#SODV2101-2-0-2" aria-expanded="false" aria-controls="item-details-item-2-0-2">
																				SODV2101 - <span className="accordion-item-title">Rapid Application Development</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="SODV2101-2-0-2" className="panel-collapse collapse" aria-labelledby="collapseItem-2-0-2">
																		<div className="panel-body">

																			<p>This course introduces programming techniques supported by a visual rapid application development environment including forms, controls, user-defined classNamees and objects. Learners examine the framework provided by the platform that supports visual programming to build graphical user interface (GUI)  application. The skills in this course can be applied to building data driven applications.<br />Prerequisites: SODV1202, DATA1201</p>




																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-2-0-3">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-2-0" href="#SODV2201-2-0-3" aria-expanded="false" aria-controls="item-details-item-2-0-3">
																				SODV2201 - <span className="accordion-item-title">Web Programming</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="SODV2201-2-0-3" className="panel-collapse collapse" aria-labelledby="collapseItem-2-0-3">
																		<div className="panel-body">

																			<p>This course gives learners the opportunity to enhance and enrich their skills in web programming. Learners develop web applications using three-tier architecture, session management, object-oriented techniques and advanced database interactions. In addition, the course explores concepts such as advanced cascading style sheet (CSS). Learners develop rich interactive web applications with authentication and security.<br />Prerequisites: SODV1201, SODV1202, DATA1201</p>




																		</div>
																	</div>
																</div>
																<div className="panel panel-default">
																	<div className="panel-heading" id="item-details-item-2-0-4">
																		<h5 className="panel-title">
																			<a role="button" data-toggle="collapse" data-parent="#accordion-item-2-0" href="#SODV2202-2-0-4" aria-expanded="false" aria-controls="item-details-item-2-0-4">
																				SODV2202 - <span className="accordion-item-title">Object Oriented Programming</span>
																				<span className="credits">Credits&nbsp;<strong>3</strong></span>
																			</a>
																		</h5>
																	</div>
																	<div id="SODV2202-2-0-4" className="panel-collapse collapse" aria-labelledby="collapseItem-2-0-4">
																		<div className="panel-body">

																			<p>In this course, learners explore object-oriented design concepts and techniques. This course introduces techniques such as threads and event handling that potentially lead to the creation of sophisticated applications.  The knowledge and skills in this course apply to the areas like database manipulation and network connectivity.<br />Prerequisite:s DATA1201, SODV1202</p>




																		</div>
																	</div>
																</div>

															</div>
														</div>
													</div>
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
										<span>{prgramItem.fee} </span>
									</a>
								</li>
								<li>
									<a className="justify-content-between d-flex" href="#">
										<p>Starting Date </p>
										<span>{prgramItem.dateStarting} </span>
									</a>
								</li>
								<li>
									<a className="justify-content-between d-flex" href="#">
										<p>Ending Date </p>
										<span>{prgramItem.dateEnding} </span>
									</a>
								</li>
								<li>
									<a className="justify-content-between d-flex" href="#">
										<p>Duration </p>
										<span>{prgramItem.duration} </span>
									</a>
								</li>

							</ul>
							<Link to="/SignUp" className="primary-btn text-uppercase">Enroll the course</Link>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- End course-details Area --> */}



		</>
	)
}
export default ProgramDetail;
