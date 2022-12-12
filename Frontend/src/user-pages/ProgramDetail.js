import React, { useState, useEffect } from 'react'
import headerImg from '../assest/img/m-img.jpg';
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import * as QueryString from "query-string"
import ProgramDetailItem from './ProgramDetailItem';
import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';


const ProgramDetail = () => {

	const location = useLocation();
	const params = QueryString.parse(location.search)
	// const [courses, SetCourses] = useState(currentPrograms);

	const [courses, SetCourses] = useState([]);
	const [program, setProgram] = useState([{}]);
	const [allCourses, SetAllCourses] = useState([]);


	useEffect(() => {
		var result = [{}];
		// declare the data fetching function
		const fetchData = async () => {
			const response = await fetch(
				"http://localhost:5000/Programs", {
				method: 'GET',
				headers: {
					accept: 'application/json',
				}
			});
			const data = await response.json();

			let temp = data.Course;
			for (var i = 0; i < temp.length; i++) {
				if (params.code === temp[i].ProgramID) {
					result.push(temp[i]);
				}
			}
			let tempProgram = data.Program;
			let programSelected = tempProgram.filter(item => params.code == item.ProgramID)

			setProgram(programSelected);

			console.log(program)
			SetCourses(result);
			SetAllCourses(data.Course);

		};

		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);

	}, [])
	function LoadCourses() {
		let output = "";
		let output1 = "";
		let output2 = "";
		let output3 = "";
		let term1 = "";
		let count1 = 0;
		let term2 = "";
		let count2 = 0;
		let term3 = "";
		let count3 = 0;
		let term4 = "";
		let count4 = 0;
		for (var i = 0; i < courses.length; i++) {
			if (courses[i].TermID == "1") {
				if (count1 == 0) {
					term1 = "Term 1:";
					count1++;
				}
				output = output + "course Id:" + (courses[i].CourseID) + ", Course Name: " + (courses[i].Name) + " \n "
			}
			if (courses[i].TermID == "2") {
				if (count2 == 0) {
					term2 = "Term 2:";
					count2++;
				}
				output1 = output1 + "course Id:" + (courses[i].CourseID) + ", Course Name: " + (courses[i].Name) + " \n "
			}
			if (courses[i].TermID == "3") {
				if (count3 == 0) {
					term3 = "Term 3:";
					count3++;
				}
				output2 = output2 + " course Id:" + (courses[i].CourseID) + ", Course Name: " + (courses[i].Name) + " \n "
			}
			if (courses[i].TermID == "4") {
				if (count4 == 0) {
					term4 = "Term 4:";
					count4++;
				}
				output3 = output3  + " course Id:" + (courses[i].CourseID) + ", Course Name: " + (courses[i].Name) + " \n "
			}
		}

		return <div className='new-line'>
			<b>{term1}</b><br></br>{output}
			<b>{term2}</b><br></br>{output1}
			<b>{term3}</b><br></br>{output2}
			<b>{term4}</b><br></br>{output3}
		</div>
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
								{program[0].Name}
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
													<ul>
														<li>{LoadCourses()}</li>
													</ul>
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
										<span>{program[0].Fees} </span>
									</a>
								</li>
								<li>
									<a className="justify-content-between d-flex" href="#">
										<p>Starting Date </p>
										<span>{program[0].StartDate} </span>
									</a>
								</li>
								<li>
									<a className="justify-content-between d-flex" href="#">
										<p>Ending Date </p>
										<span>{program[0].EndDate} </span>
									</a>
								</li>
								<li>
									<a className="justify-content-between d-flex" href="#">
										<p>Type </p>
										<span>{program[0].Type} </span>
									</a>
								</li>

							</ul>
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
