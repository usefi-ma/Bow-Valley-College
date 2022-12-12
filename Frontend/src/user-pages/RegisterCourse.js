import React, { useState } from 'react'
import CourseList from '../user-pages/CourseList';
import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';
import { Link } from 'react-router-dom'
import Axios from 'axios';

let myCourses = [];
var result = '';
var years = [];
var programName = [{}];
const RegisterCourse = () => {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const [term, setTerm] = useState('');
    const [courses, setCourses] = useState([{}]);
    const [selectedCourse, setSelectedCourse] = useState([{}]);
    const [sendableCourse, setSendableCourse] = useState([]);
    const fetchData = React.useCallback(() => {
        Axios({
            "method": "GET",
            "url": "http://localhost:5000/Courses"
        })
            .then((response) => {
                var newData = response.data.Course;
                setCourses(newData);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    const fetchProgram = React.useCallback(() => {
        Axios({
            "method": "GET",
            "url": "http://localhost:5000/Programs"
        })
            .then((response) => {

                let temp = response.data.Program;
                programName = temp.filter(item => item.ProgramID == userLocalStorage.ProgramID)


                for (let i = 0; i < temp.length; i++) {
                    if (response.data.Program[i].ProgramID === userLocalStorage.ProgramID) {

                        switch (response.data.Program[i].DegreeID) {
                            case "1":
                                years = [{ "TermID": 1, "Name": "Term 1" }, { "TermID": 2, "Name": "Term 2" }, { "TermID": 3, "Name": "Term 3" }, { "TermID": 4, "Name": "Term 4" }];
                                break;
                            case "2":
                                years = [{ "TermID": 1, "Name": "Term 1" }, { "TermID": 2, "Name": "Term 2" }];
                                break;
                            case "3":
                                years = [{ "TermID": 1, "Name": "Term 1" }, { "TermID": 2, "Name": "Term 2" }];
                                break;
                            default:
                                break;
                        }
                    }
                }

            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    React.useEffect(() => {
        fetchData();
        fetchProgram();

    }, [fetchData, fetchProgram])

    const setSelectMode = (id) => {
        const temp = [...courses];
        const index = temp.findIndex(q => q.CourseID == id);
        temp[index].selMode = true;
        const result = temp.filter(q => q.CourseID == id);
        myCourses.push(result);
        setSelectedCourse({ ...result, result });
    }

    const handleTerm = (e) => {
        setTerm(e.target.value);
        setSubmitted(false);
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
    const [registerStCourse, setRegisterStCourse] = useState({
        studentId: userLocalStorage.StudentID,
        courseId: [],
        termId: "",
    });
    const [msg, setMsg] = useState("")
    const handleChange = (event) => {
        setRegisterStCourse({ ...registerStCourse, [event.target.name]: event.target.value });  //any input element name and its value
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Registered courses for term:${registerStCourse.termId} `)
        const temp = courses.filter(q => q.selMode == true);
        let courseIDString = [];
        for (let i = 0; i < myCourses.length; i++) {
            courseIDString.push(myCourses[i][0].CourseID);
            registerStCourse.courseId = courseIDString;
        }
        if (courseIDString.length <= 2 || courseIDString.length > 5) { alert("You can select between 2 and 5 courses"); }
        else {
            Axios.post('http://localhost:5000/registerCourse', registerStCourse)
                .then(response => {
                    setMsg(response)
                    console.log(response)
                });
            alert("You registered successfully");
        }
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
                        <input
                            type="hidden"
                            name="studentId"
                            value={registerStCourse.studentId}
                            onChange={handleChange}
                        />
                        <div className='col-md-12'>
                            <p><b>Username:</b>{userLocalStorage != null ? userLocalStorage.Username : null}</p>
                            <p><b>Program:</b> {userLocalStorage != null ? programName[0].Name : null}</p>

                        </div>
                        <div className="col-sm-4 mb-4">
                            <select className="form-select form-control user_drp"
                                aria-label="Default select example"
                                onChange={handleChange}
                                name="termId"
                                value={registerStCourse.termId}>
                                <option selected>Terms</option>
                                {years.map((option, index) => (
                                    <option value={option.TermID} key={index}>{option.Name}</option>
                                ))}
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
                        <input
                            type="hidden"
                            name="courseId"
                            value={sendableCourse}
                            onChange={handleChange}
                        />
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
