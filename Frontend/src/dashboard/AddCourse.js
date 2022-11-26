import React, { useState } from "react";
import Topbar from '../layouts/admin-layout/Topbar'
import Sidebar from '../layouts/admin-layout/Sidebar'
import { Footer } from '../layouts/admin-layout/Footer'

const AddCourse = () => {
  const [name, setName] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [fee, setFee] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [department, setDepartment] = useState("");



  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
  const handleType = (e) => {
    setType(e.target.value);
    setSubmitted(false);
  };
  const handleDepartment = (e) => {
    setDepartment(e.target.value);
    setSubmitted(false);
  };
  const handleStartingDate = (e) => {
    setStartingDate(e.target.value);
    setSubmitted(false);
  };
  const handleEndingDate = (e) => {
    setEndingDate(e.target.value);
    setSubmitted(false);
  };
  const handleFee = (e) => {
    setFee(e.target.value);
    setSubmitted(false);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
    setSubmitted(false);
  };
  const successMessage = () => {
    return (
      <div
        className="alert alert-success"
        role="alert"
        style={{ display: submitted ? "" : "none" }}
      >
        Course added successfully!
      </div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      startingDate === "" ||
      endingDate === "" ||
      fee === "" ||
      description === "" ||
      type === "" ||
      department === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      setName("");
      setStartingDate("");
      setEndingDate("");
      setFee("");
      setType("");
      setDepartment("");
      setDescription("");
    }
    const addCourse = { name, startingDate, endingDate, fee, description, department, type };
    console.log(addCourse);
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger"
        role="alert"
        style={{ display: error ? "" : "none" }}
      >
        Please fill all the inputs
      </div>
    );
  };

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <h1 className="h3 mb-4 text-gray-800">Add Course</h1>
              <div className="card o-hidden border-0 shadow-lg ">
                <div className="card-body p-0">
                  {/* <!-- Nested Row within Card Body --> */}
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="p-5">
                        <div className="messages">
                          {errorMessage()}
                          {successMessage()}
                        </div>
                        <form className="user" onSubmit={handleSubmit}>
                          <div className="form-group row">
                            <div className="col-sm-12 mb-3 mb-sm-0">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                placeholder="Course Name"
                                onChange={handleName}
                                value={name}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-sm-6 ">
                              <select className="form-select form-control user_drp" value={type} onChange={handleType}>
                                <option selected>Course Type</option>
                                <option value="1">Diploma</option>
                                <option value="2">Post Diploma</option>
                                <option value="3">Certificate</option>
                                <option value="4">Upgrade</option>
                              </select>
                            </div>
                            <div className="col-sm-6 ">
                              <select className="form-select form-control user_drp" value={department} onChange={handleDepartment} >
                                <option selected>Department</option>
                                <option value="1">IT</option>
                                <option value="2">..</option>
                                <option value="3">..</option>
                              </select>
                            </div>
                          </div>


                          <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                placeholder="Course Starting Date"
                                onChange={handleStartingDate}
                                value={startingDate}
                              />
                            </div>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                placeholder="Course Ending Date"
                                onChange={handleEndingDate}
                                value={endingDate}
                              />
                            </div>
                          </div>

                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-user"
                              placeholder="Fee"
                              onChange={handleFee}
                              value={fee}
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control form-control-user"
                              onChange={handleDescription}
                              value={description}
                            >
                              {" "}
                              Description
                            </textarea>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                          >
                            Add Course
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

    </>
  );
};
export default AddCourse;
