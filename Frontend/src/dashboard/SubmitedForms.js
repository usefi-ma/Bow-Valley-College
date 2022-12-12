
import React, { useState } from 'react'
import Topbar from '../layouts/admin-layout/Topbar'
import Sidebar from '../layouts/admin-layout/Sidebar'
import { Footer } from '../layouts/admin-layout/Footer'
import Axios from 'axios'
const SubmitedCourse = () => {

    const [studentMessage, setStudentsMessage] = useState([]);



    const fetchData = React.useCallback(() => {
      Axios({
        "method": "GET",
        "url": "http://localhost:5000/Programs"       
      })
      .then((response) => {
        console.log(response.data.Form)
        var newData = response.data.Form;  
        setStudentsMessage(newData);
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])
  
    React.useEffect(() => {
      fetchData()
    }, [fetchData])



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

                                    <div className="table-responsive">

                                        <table className='table table-bordered table-stripped'>
                                            <thead>
                                                <tr>

                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Email</th>
                                                    <th>Title</th>
                                                    <th>Message</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {studentMessage.map((item) =>
                                                    <tr>
                                                        <td>{item.FirstName}</td>
                                                        <td>{item.LastName}</td>
                                                        <td>{item.Email}</td>
                                                        <td>{item.Title}</td>
                                                        <td>{item.Message}</td>
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
