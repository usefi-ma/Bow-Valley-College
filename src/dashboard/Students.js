import React, { useState } from 'react'
import DataTable from 'react-data-table-component';

var studentInfo =
    [{ id: 410084, firstName: "Mahya", lastName: "Yousefi", username: "usefi.ma", email: "usefi.ma@gmail.com", program: "SoftwareDevelopment Diploma" },
    { id: 410056, firstName: "Kale", lastName: "White", username: "white.kale", email: "kale.w@gmail.com", program: "SoftwareDevelopment Diploma" },
    { id: 410048, firstName: "Mark", lastName: "Mendoza", username: "Mendoza.m", email: "Mendoza.m@gmail.com", program: "SoftwareDevelopment Diploma" },
    { id: 410089, firstName: "Sara", lastName: "Ashoori", username: "Ashoori.s", email: "Ashoori.s@gmail.com", program: "Software Development Post-Diploma Certificate" },
    { id: 410059, firstName: "Gabriella", lastName: "Sezar", username: "Gabriella.s", email: "Gabriella.s@gmail.com", program: "Information Technology Systems Diploma" },
];

const Students = () => {

    const [students, setStudents] = useState(studentInfo);
    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        var result = students.filter(item => item.program == search);
        setStudents(result);
    }

    return (
        <>
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
                                className="form-control  mx-3 col-md-4" placeholder="Enter program" />
                                  <button type="submit" className='btn btn-primary'>Search</button>
                        </div>
                      
                    </form>


                    <div className="table-responsive">
                        <table className='table table-bordered table-stripped'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Student ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>program</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, i) =>
                                    <tr key={student.id}>
                                        <td>{i + 1}</td>
                                        <td>{student.id}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.program}</td>
                                        <td>{student.email}</td>
                                        <td>{student.username}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div >
        </>
    )
}
export default Students;
