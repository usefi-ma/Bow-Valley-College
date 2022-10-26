import React from 'react'
import { Link } from 'react-router-dom';

const AddCourse = () => {
    return (
        <>
            <h1 className="h3 mb-4 text-gray-800">Add Course</h1>
            <div className="card o-hidden border-0 shadow-lg ">
                <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="p-5">
                                {/* <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div> */}
                                <form className="user">
                                    <div className="form-group row">
                                        <div className="col-sm-12 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user" 
                                                placeholder="Course Name" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input type="text" className="form-control form-control-user"
                                                placeholder="Course Starting Date" />
                                        </div>
                                        <div className="col-sm-6">
                                            <input type="text" className="form-control form-control-user"
                                              placeholder="Course Ending Date" />
                                        </div>
                                    </div>
                                  
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-user" 
                                            placeholder="Fee" />
                                    </div>
                                    <div className="form-group">
                                        <textarea type="text" className="form-control form-control-user" 
                                            placeholder="Fee" > Description</textarea>
                                    </div>
                                    <a href="login.html" className="btn btn-primary btn-user btn-block">
                                        Add Course
                                    </a>
                                </form>
                                <hr />

                                <div className="text-center">
                                    <Link className="small" to="/Courses">All Courses</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AddCourse;
