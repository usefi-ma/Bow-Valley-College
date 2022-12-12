import React, { useState } from 'react'
import '../../assest/admin/css/sb-admin-2.css'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import uuid from 'react-uuid';



const Signup = () => {

    var result = [];

    const unique_id = uuid();
    const small_Student_id = unique_id.slice(0, 8)

    const [createUser, setCreateUser] = useState({
        studentId: small_Student_id,
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        birth: "",
        departmant: "",
        program: "",
        username: "",
        password: "",
        role: "User"
    });

    const [msg, setMsg] = useState("")
    //you can use only one handlechange method for all input elements. 
    const handleChange = (event) => {
        setCreateUser({ ...createUser, [event.target.name]: event.target.value });  //any input element name and its value
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(createUser);
        Axios.post('http://localhost:5000/student', createUser)
            .then(response => {
                setMsg(response)
                console.log(response)
            });
            alert("You registered successfully");
    };
    const [options, setOptions] = useState([]);

    React.useEffect(() => {
        async function fetchData() {
            // Fetch data
            const { data } = await Axios.get("http://localhost:5000/Programs");
            console.log(data.Program);
            const results = []
            // Store results in the results array
            data.Program.forEach((value) => {
                results.push({
                    key: value.Name,
                    value: value.ProgramID,
                });
            });
            setOptions([
                { key: 'Select a company', value: '' },
                ...results
            ])
        }

        // Trigger the fetch
        fetchData();
    }, []);

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
                                    <form onSubmit={handleSubmit}>

                                        <input
                                            type="hidden"
                                            name="studentId"
                                            value={createUser.studentId}
                                            onChange={handleChange}
                                        />
                                        <input
                                            type="hidden"
                                            name="role"
                                            value={createUser.role}
                                            onChange={handleChange}
                                        />
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input className="form-control form-control-user"
                                                    type="text"
                                                    placeholder="First Name"
                                                    name="firstname"
                                                    value={createUser.firstname}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <input className="form-control form-control-user"
                                                    type="text"
                                                    placeholder="Last Name"
                                                    name="lastname"
                                                    value={createUser.lastname}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <input className="form-control form-control-user"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={createUser.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control form-control-user"
                                                type="text"
                                                name="birth"
                                                placeholder="Date of Birth"
                                                value={createUser.birth}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                className="form-control form-control-user"
                                                type="text"
                                                name="phone"
                                                placeholder="Phone"
                                                onChange={handleChange}
                                                value={createUser.phone} />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6">
                                                <select className="form-select form-control user_drp"
                                                    onChange={handleChange}
                                                    name="departmant"
                                                    value={createUser.departmant} >
                                                    <option selected>Departmant</option>
                                                    <option value="1">IT</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6">
                                                <select className="form-select form-control user_drp"
                                                    name="program"
                                                    onChange={handleChange}
                                                    value={createUser.program}
                                                >
                                                    {options.map((option) => {
                                                        return (
                                                            <option key={option.value} value={option.value}>
                                                                {option.key}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="text"
                                                className="form-control form-control-user"
                                                placeholder="Username"
                                                onChange={handleChange}
                                                name="username"
                                                value={createUser.username}
                                            />
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-12 mb-3 mb-sm-0">
                                                <input type="password"
                                                    className="form-control form-control-user"
                                                    placeholder="Password"
                                                    name="password"
                                                    onChange={handleChange}
                                                    value={createUser.password} />
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-user btn-block"
                                            type="submit">Submit Post</button>
                                    </form>
                                    <hr />
                                    <div>
                                        {msg.info}
                                    </div>
                                    <div className="text-center">
                                        <Link className="small" to="/login">Already have an account? Login! </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}
export default Signup;
