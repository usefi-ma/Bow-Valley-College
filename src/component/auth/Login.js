import React, { useState } from 'react'
import '../../assest/admin/css/sb-admin-2.css'
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
    const [users, setUsers] = useState([{ username: "Mahya", password: "1234", role: "Admin" }, { username: "Kale", password: "1234", role: "User" }]);
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    var checkUser = 0;


    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === '' || password === '') {
            alert('you should enter all the inputs')
        }
        else {
            users.forEach(function (user) {
                if (user.username === username && user.password === password && user.role === "User") {
                    checkUser++;
                    navigate('/');

                } else if (user.username === username && user.password === password && user.role === "Admin") {
                    checkUser++;
                    navigate('/Admin');
                } 
            });
          
            if (checkUser === 0) {
                alert("Your username and password is wrong");
            }
            
        }


    }
    return (
        <>
            <div className="container pt-5">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                         
                                            <form className="user" onSubmit={handleSubmit}>
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-user"
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        placeholder="Username"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input type="password" className="form-control form-control-user"
                                                        placeholder="Password" onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-checkbox small">
                                                        <input type="checkbox" className="custom-control-input" />
                                                        <label className="custom-control-label">Remember
                                                            Me</label>
                                                    </div>
                                                </div>

                                                <button className="btn btn-primary btn-user btn-block" type="submit">Login</button>

                                            </form>
                                            <hr />

                                            <div className="text-center">

                                                <Link className="small" to="/Signup">Create an Account!</Link>
                                            </div>
                                        </div>
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

export default Login