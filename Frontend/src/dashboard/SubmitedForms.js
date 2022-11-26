
import React, { useState } from 'react'
import Topbar from '../layouts/admin-layout/Topbar'
import Sidebar from '../layouts/admin-layout/Sidebar'
import { Footer } from '../layouts/admin-layout/Footer'
const SubmitedCourse = () => {


    var studentContact =
        [{ firstName: "Mahya", lastName: "Yousefi", username: "usefi.ma", email: "usefi.ma@gmail.com", program: "SoftwareDevelopment Diploma", message: "hello looking for more info" },
        { firstName: "Kale", lastName: "White", username: "white.kale", email: "kale.w@gmail.com", program: "SoftwareDevelopment Diploma", message: "hello" },
        { firstName: "Mark", lastName: "Mendoza", username: "Mendoza.m", email: "Mendoza.m@gmail.com", program: "SoftwareDevelopment Diploma", message: "Information requested" },
        { firstName: "Sara", lastName: "Ashoori", username: "Ashoori.s", email: "Ashoori.s@gmail.com", program: "Software Development Post-Diploma Certificate", message: "Please send information about course" },
        { firstName: "Gabriella", lastName: "Sezar", username: "Gabriella.s", email: "Gabriella.s@gmail.com", program: "Information Technology Systems Diploma", message: "hi, looking for info about courses" },
        ];

    const [studentMessage, setStudentsMessage] = useState(studentContact);

    return (


        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <div className="container-fluid">
                            <h1 className="h3 mb-4 text-gray-800">Submited Forms</h1>



                            <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Submited Forms</h6>
                                </div>
                                <div className="card-body">

                                    <div id="dataTable_filter" className="dataTables_filter d-flex mb-2">
                                        <label>Search:  </label>
                                        <input type="search" className="form-control form-control-sm col-md-4 ml-3" placeholder="" aria-controls="dataTable" />

                                    </div>

                                    <div className="table-responsive">

                                        <table className='table table-bordered table-stripped'>
                                            <thead>
                                                <tr>

                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>program</th>
                                                    <th>Email</th>
                                                    <th>Username</th>
                                                    <th>Message</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {studentMessage.map((student) =>
                                                    <tr>
                                                        <td>{student.firstName}</td>
                                                        <td>{student.lastName}</td>
                                                        <td>{student.program}</td>
                                                        <td>{student.email}</td>
                                                        <td>{student.username}</td>
                                                        <td>{student.message}</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    <Footer />
                </div>
            </div>

        </>
      
    )
}
export default SubmitedCourse;
