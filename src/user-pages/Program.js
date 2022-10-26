import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Programinfo from './Programinfo';

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
		outlines: [{ term: 1, courses: [{ code:"Pr111", name: "Project management1" },{code:"C++111",name:"C++ Programming Fundamentals"},{code:"CompM1111",name:"Computer Maintenance"},{code:"IS1111",name:"Information Security1"}] },
		{ term: 2, courses: [{ code:"Pr111", name: "Project management1" },{code:"C++111",name:"C++ Programming Fundamentals"},{code:"CompM1111",name:"Computer Maintenance"},{code:"IS1111",name:"Information Security1"}] },
		{ term: 3, courses: [{ code:"Pr111", name: "Project management1" },{code:"C++111",name:"C++ Programming Fundamentals"},{code:"CompM1111",name:"Computer Maintenance"},{code:"IS1111",name:"Information Security1"}] },
		{ term: 4, courses: [{ code:"Pr111", name: "Project management1" },{code:"C++111",name:"C++ Programming Fundamentals"},{code:"CompM1111",name:"Computer Maintenance"},{code:"IS1111",name:"Information Security1"}] }]
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
		outlines: [{ term: 1, courses: [{ code:"SODV1101", name: "Programming Fundamentals" },{code:"TECH1101",name:"Web and Internet Fundamentals"},{code:"TECH1102",name:"Internet of Things"},{code:"MATH1901",name:"Math for the Computer Industry"}] },
		{ term: 2, courses: [{ code:"DATA1201", name: "Introduction to Relational Databases" },{code:"DESN2301 ",name:"User Experience Design"},{code:"SODV1201 ",name:"Introduction to Web Programming"},{code:"TECH1201 ",name:"Networking Essentials"}] }]
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
		outlines: [{ term: 1, courses: [{ code:"SODV1101", name: "Programming Fundamentals" },{code:"TECH1101",name:"Web and Internet Fundamentals"},{code:"TECH1102",name:"Internet of Things"},{code:"MATH1901",name:"Math for the Computer Industry"}] },
		{ term: 2, courses: [{ code:"DATA1201", name: "Introduction to Relational Databases" },{code:"DESN2301 ",name:"User Experience Design"},{code:"SODV1201 ",name:"Introduction to Web Programming"},{code:"TECH1201 ",name:"Networking Essentials"}] },
		{ term: 3, courses: [{ code:"DATA2201 ", name: "Relational Databases" },{code:"SODV2101 ",name:"Rapid Application Development"},{code:"SODV2201 ",name:"Web Programming"},{code:"SODV2202 ",name:"Object Oriented Programming"}] },
		{ term: 4, courses: [{ code:"SODV2203 ", name: "Introduction to Game and Simulation Programming" },{code:"SODV2401 ",name:"Algorithms and Data Structures"}] }]
	}]
const Program = () => {
	const [programs, setPrograms] = useState(currentProgram);

	return (
		<>
			<section className="banner-area relative about-banner" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Programs and Courses
							</h1>
							<p className="text-white link-nav"><Link to="/">Home </Link>
								<span className="lnr lnr-arrow-right"></span>  <Link to="/Program">  Courses</Link></p>
						</div>
					</div>
				</div>
			</section>

			<section className="popular-courses-area section-gap courses-page">
				<div className="container">

					<div className="row d-flex justify-content-center">
						<div className="menu-content pb-70 col-lg-8">
							<div className="title text-center">
								<h1 className="mb-10"> Courses we offer</h1>
								<p>There is a moment in the life of any aspiring.</p>
								<div className="col-md-7 m-auto" >
									<form target="_blank" >
										<div className="input-group">
											<input type="text" className="form-control" name="EMAIL" placeholder="Enter Course Name or Course Code" />
											<div className="input-group-btn">
												<button className="btn btn-default search_btn" type="submit">
													<i class="fa fa-search" aria-hidden="true"></i>
												</button>
											</div>
											<div className="info"></div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

					<div className="row">

						{
							programs.map(program => <Programinfo programInfo={program} />)
						}


					
					</div>	
					<a href="#" className="primary-btn text-uppercase m-auto" >Load More Courses</a>
				</div>
			</section>


		</>
	)
}
export default Program;