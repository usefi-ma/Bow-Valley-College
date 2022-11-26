import React, { useState,useEffect } from 'react'
import Topbar from '../layouts/admin-layout/Topbar'
import Sidebar from '../layouts/admin-layout/Sidebar'
import { Footer } from '../layouts/admin-layout/Footer'
import Axios from 'axios'


// var studentInfo =
//     [{ id: 410084, firstName: "Mahya", lastName: "Yousefi", username: "usefi.ma", email: "usefi.ma@gmail.com", program: "SoftwareDevelopment Diploma" },
//     { id: 410056, firstName: "Kale", lastName: "White", username: "white.kale", email: "kale.w@gmail.com", program: "SoftwareDevelopment Diploma" },
//     { id: 410048, firstName: "Mark", lastName: "Mendoza", username: "Mendoza.m", email: "Mendoza.m@gmail.com", program: "SoftwareDevelopment Diploma" },
//     { id: 410089, firstName: "Sara", lastName: "Ashoori", username: "Ashoori.s", email: "Ashoori.s@gmail.com", program: "Software Development Post-Diploma Certificate" },
//     { id: 410059, firstName: "Gabriella", lastName: "Sezar", username: "Gabriella.s", email: "Gabriella.s@gmail.com", program: "Information Technology Systems Diploma" },
//     ];

const Students = () => {

    const [students, setStudents] = useState([]);
    const [search, setSearch] = useState('');


    const fetchData = React.useCallback(() => {
      Axios({
        "method": "GET",
        "url": "http://localhost:5000/student"       
      })
      .then((response) => {
        console.log(response.data.student)
        var newData = response.data.student;  
        setStudents(newData);
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])
  
    React.useEffect(() => {
      fetchData()
    }, [fetchData])



    //search
    const handleSubmit = (e) => {
        e.preventDefault();
        if (search === '') {
            setStudents([...students]);
        } else {
            var result = students.filter(item => item.program == search);
            setStudents(result);
        }
    }

    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                            <h1 className="h3 mb-4 text-gray-800">Students</h1>

                            <div className="card shadow mb-5">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Students</h6>
                                </div>
                                <div className="card-body">


                                    <form onSubmit={handleSubmit}>
                                        <div className="dataTables_filter d-flex mb-3 align-items-center">
                                            <label>Search:  </label>
                                            <input type="search" onChange={(e) => setSearch(e.target.value)}
                                                className="form-control  mx-3 col-md-4" placeholder="Enter student's program" />
                                            <button type="submit" className='btn btn-primary'>Search</button>
                                        </div>
                                    </form>

                                    {/* {console.log(students[1].Firstname)} */}
                                    <div className="table-responsive">
                                        <table className='table table-bordered table-stripped'>
                                            <thead>
                                                <tr>
                                                    <th></th>
                                                    <th>Student ID</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Birth Date</th>
                                                    <th>program</th>
                                                    <th>Department</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Username</th>
                                                    <th>Password</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                           
                                                {students.map((student, i) =>
                                                    <tr key={student.StudentID}>
                                                        <td>{i + 1}</td>
                                                        <td>{student.StudentID}</td>
                                                        <td>{student.Firstname}</td>
                                                        <td>{student.Lastname}</td>
                                                         <td>{student.BirthDate}</td>
                                                        <td>{student.ProgramID}</td>
                                                        <td>{student.DepartmentID}</td>
                                                        <td>{student.Email}</td>
                                                         <td>{student.Phone}</td>
                                                        <td>{student.Username}</td>
                                                        <td>{student.Password}</td>
                                                          
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
export default Students;
