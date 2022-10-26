import React from 'react'
import '../../assest/admin/css/sb-admin-2.css'
import { Link } from 'react-router-dom'
const Signup = () => {
    return (
        <>


            <div className="container pt-5">

                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* <!-- Nested Row within Card Body --> */}
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" className="form-control form-control-user" id="exampleFirstName"
                                                    placeholder="First Name" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user" id="exampleLastName"
                                                    placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Phone" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Date of Birth" />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                {/* <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" /> */}
                                                <select class="form-select form-control user_drp" aria-label="Default select example">
                                                    <option selected>Departmant</option>
                                                    <option value="1">IT</option>
                                                    <option value="2">00</option>
                                                    <option value="3">00</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6">
                                            <select class="form-select form-control user_drp" aria-label="Default select example">
                                                    <option selected>Program</option>
                                                    <option value="1">Software Development</option>
                                                    <option value="2">Software Development</option>
                                                    <option value="3">Software Development</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user" id="exampleInputEmail"
                                                placeholder="Username" />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleInputPassword" placeholder="Password" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" className="form-control form-control-user"
                                                    id="exampleRepeatPassword" placeholder="Repeat Password" />
                                            </div>
                                        </div>
                                        <Link to="/login" className="btn btn-primary btn-user btn-block">
                                            Register Account
                                        </Link>
                                    </form>
                                    <hr />

                                    <div className="text-center">
                                        <Link className="small" to="/login">Already have an account? Login! </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
export default Signup;
