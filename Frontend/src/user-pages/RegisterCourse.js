import React, { useState } from 'react'
import CourseList from '../user-pages/CourseList';
import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';
import { Link } from 'react-router-dom'

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
{ name: 'Advanced Networking', code: ' Net2r22', selMode: false },
{ name: 'Advanced Web technology', code: ' Web2r22', selMode: false },
{ name: 'Advanced Project Management', code: ' Pros222', selMode: false }];

const RegisterCourse = () => {

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
                Please Choose all the items
            </div>
        );
    };





    return (
        <>
            <UserHeader />

            <section className="banner-area relative about-banner" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="about-content col-lg-12">
                            <h1 className="text-white">
                                Course Registeration
                            </h1>
                            <p className="text-white link-nav"><Link to="/home">Home </Link>
                                <span className="lnr lnr-arrow-right"></span>
                                <Link to="/RegisterCourse">Register Courses</Link></p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container pt-5">



                <form className='mb-4'>
                    <div className="row">
                        {/* <div className='col-md-12'>
                            <p>
                                <b>
                                    {student != null ? student.fullName : null}
                                </b>
                            </p>
                        </div> */}
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
                    <div className="messages w-auto">
                            {errorMessage()}
                            {successMessage()}
                        </div>
                </form>
            </div>
            <UserFooter />
        </>
    )
}
export default RegisterCourse