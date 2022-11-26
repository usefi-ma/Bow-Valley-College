import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Programinfo from './Programinfo';
import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';

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
		courses:"Term1-CVOD201-Web:Term1-CVOD201-Web:Term1-CVOD201-Web:Term1-CVOD201-Web:Term2-CVOD201-Web",
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
		courses:"Term1-CVOD201-Web:Term1-CVOD201-Web:Term1-CVOD201-Web:Term1-CVOD201-Web:Term2-CVOD201-Web",
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
		courses:"Term1-CVOD201-Web:Term1-CVOD201-Web:Term1-CVOD201-Web:Term1-CVOD201-Web:Term2-CVOD201-Web",
	}]



const Program = () => {

	const [programs, setPrograms] = useState(currentProgram);
	const [search, setSearch] = useState('');

	const handleSearch = (e) => {
		e.preventDefault();
        var result = programs.filter(item => item.code == search || item.name== search);
        setPrograms(result);

	}


	return (
		<>
		
            <UserHeader />
			<section className="banner-area relative about-banner" id="home">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="row d-flex align-items-center justify-content-center">
						<div className="about-content col-lg-12">
							<h1 className="text-white">
								Programs and Courses
							</h1>
							<p className="text-white link-nav"><Link to="/home">Home </Link>
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
									<form onSubmit={handleSearch} >
										<div className="input-group">
											<input type="text" className="form-control" value={search} onChange={(e)=>setSearch(e.target.value)}
											 placeholder="Enter Course Name or Course Code" />
											<div className="input-group-btn">
												<button className="btn btn-default search_btn" type="submit">
													<i className="fa fa-search" aria-hidden="true"></i>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						{
							//
							programs.map(program => <Programinfo programInfo={program}   key={program.code} />)
						}
					</div>
					<a href="#" className="primary-btn text-uppercase m-auto" >Load More Courses</a>
				</div>
			</section>


         <UserFooter />

    

		</>
	)
}
export default Program;