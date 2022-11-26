import React, { useState } from 'react'
import Topbar from '../layouts/admin-layout/Topbar'
import Sidebar from '../layouts/admin-layout/Sidebar'
import { Footer } from '../layouts/admin-layout/Footer'

const currentCourses = [
    {
        code: 1,
        name: "Information Technology Systems Diploma",
        image: "/p1.jpg",
        dateStarting: "SEPTEMBER 05, 2023",
        dateEnding: "May 05, 2025",
        fee: "CAD $42,407",
        description: "Our Information Technology Systems (ITS) Diploma will give you the hardware and software skills required for the generation, storage, retrieval, transmission, and protection of digital information",
        type: "Diploma"
    },
    {
        code: 2,
        name: "Software Development Post-Diploma Certificate",
        image: "/p2.jpg",
        dateStarting: "SEPTEMBER 05, 2023",
        dateEnding: "May 05, 2024",
        fee: "CAD $20,458",
        description: "Prepare for a career in computer programming, web application development, software testing, and quality control.",
        type: "Certificate"
    },
    {
        code: 3,
        name: "Software Development Diploma",
        image: "/p3.jpg",
        dateStarting: "SEPTEMBER 05, 2023",
        dateEnding: "May 05, 2025",
        fee: "CAD $42,407",
        description: "Gain the skills you need to create the latest computer, mobile, and gaming applications. Prepare to transform your ideas into reality all while developing your problem-solving skills.",
        type: "Diploma"

    }]



const Courses = () => {

    const [courses, setCourses] = useState(currentCourses);
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search === '') {
            setCourses(courses);
        } else {
        var result = courses.filter(item => item.code == search || item.name == search);
        setCourses(result);
        }
    }

    const removeCourse = (code) => {
        var result = courses.filter(item => item.code != code);
        setCourses(result);

    }

    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                            <h1 className="h3 mb-4 text-gray-800">Courses</h1>

                            <div className="card shadow mb-5">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Courses</h6>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="dataTables_filter d-flex mb-3 align-items-center">
                                            <label>Search:  </label>
                                            <input type="search" onChange={(e) => setSearch(e.target.value)} value={search}
                                                className="form-control  mx-3 col-md-4" placeholder="Enter course code or course name" />
                                            <button type="submit" className='btn btn-primary'>Search</button>
                                        </div>
                                    </form>


                                    <div className="table-responsive">
                                        <table className='table table-bordered table-stripped'>
                                            <thead>
                                                <tr>

                                                    <th>Course code</th>
                                                    <th>Course Name</th>
                                                    <th>Starting date</th>
                                                    <th>Ending Date</th>
                                                    <th>Fee</th>
                                                    <th></th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {courses.map((course) =>
                                                    <tr key={course.code}>
                                                        <td>{course.code}</td>
                                                        <td>{course.name}</td>
                                                        <td>{course.dateStarting}</td>
                                                        <td>{course.dateEnding}</td>
                                                        <td>{course.fee}</td>
                                                        <td><button type="button" className='btn btn-danger' onClick={(e) => removeCourse(course.code)}>Remove</button></td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>


        </>
    )
}
export default Courses;

