import React, { useState } from 'react'
import '../../assest/admin/css/sb-admin-2.css'
import { Link } from 'react-router-dom'
const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState('');
    const [departmant, setDepartmant] = useState('');
    const [program, setProgram] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    };
    const handleBirth = (e) => {
        setBirth(e.target.value);
        setSubmitted(false);
    };
    const handleDepartmant = (e) => {
        setDepartmant(e.target.value);
        setSubmitted(false);
    };
    const handleProgram = (e) => {
        setProgram(e.target.value);
        setSubmitted(false);
    };
    const handleUsername = (e) => {
        setUsername(e.target.value);
        setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === '' || email === '' || password === '' || email === '' || phone === '' || username === '' || program === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            console.log(` ${firstName}${lastName} ${email} ${password} ${email}${birth} ${phone}${departmant} ${program}${username}${password}`)

        }
    };


    const successMessage = () => {
        return (

            <div className="alert alert-success" role="alert" style={{ display: submitted ? '' : 'none', }}>
                {firstName}, You registered successfully!
            </div>

        );
    };

    const errorMessage = () => {
        return (

            <div className="alert alert-danger" role="alert" style={{ display: error ? '' : 'none', }}>
                Please fill all the inputs
            </div>
        );
    };
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
                                  
                                    <div className="messages">
                                        {errorMessage()}
                                        {successMessage()}
                                    </div>
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input onChange={handleFirstName} className="form-control form-control-user"
                                                    value={firstName} type="text" placeholder="FirstName" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input onChange={handleLastName} className="form-control form-control-user"
                                                    value={lastName} type="text" placeholder="LastName" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input onChange={handleEmail} className="form-control form-control-user"
                                                value={email} type="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user" onChange={handleBirth}
                                                value={birth} placeholder="Date of Birth" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user" onChange={handlePhone}
                                                value={phone} placeholder="Phone" />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <select class="form-select form-control user_drp" value={departmant} onChange={handleDepartmant} aria-label="Default select example">
                                                    <option selected>Departmant</option>
                                                    <option value="1">IT</option>
                                                    <option value="2">Culture</option>
                                                    <option value="3">MBA</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6">
                                                <select class="form-select form-control user_drp" value={program} onChange={handleProgram} aria-label="Default select example">
                                                    <option selected>Program</option>
                                                    <option value="1">Software Development Diploma</option>
                                                    <option value="2">Software Development Post-Diploma Certificate</option>
                                                    <option value="3">Information Technology Systems (ITS) Diploma</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-user"
                                                value={username} onChange={handleUsername} placeholder="Username" />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-12 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user"
                                                    value={password} onChange={handlePassword} placeholder="Password" />
                                            </div>
                                        </div>
                                        <button onClick={handleSubmit} className="btn btn-primary btn-user btn-block" type="submit">
                                            Register Account
                                        </button>
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
