import React, { useState } from 'react'
import Topbar from '../layouts/admin-layout/Topbar'
import Sidebar from '../layouts/admin-layout/Sidebar'
import { Footer } from '../layouts/admin-layout/Footer'
import Axios from 'axios'


const Courses = () => {

    const [courses, setCourses] = useState([]);
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

  

  
    const fetchData = React.useCallback(() => {
      Axios({
        "method": "GET",
        "url": "http://localhost:5000/student"       
      })
      .then((response) => {
        console.log(response.data.Course)
        var newData = response.data.Course;  
        setCourses(newData);
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])
  
    React.useEffect(() => {
      fetchData()
    }, [fetchData])


    const removeCourse = (code) => {
        var result = courses.filter(item => item.CourseID !== code);
        setCourses(result);
        alert("Deleted");
    }
    const handleSearch = (e) => {
		e.preventDefault();
        var result = courses.filter(item => item.Name == search || item.CourseID == search);
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
                                    <form onSubmit={handleSearch}>
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
                                                    <tr key={course.CourseID}>
                                                         <td>{course.CourseID}</td>
                                                        <td>{course.Name}</td>
                                                        <td>{course.StartDate}</td>
                                                        <td>{course.EndDate}</td>
                                                        <td>{course.Fees}</td>
                                                        <td><button type="button" className='btn btn-danger' onClick={(e) => removeCourse(course.CourseID)}>Remove</button></td>
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

