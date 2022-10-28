import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddCourse = () => {
  const [name, setName] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  const [fee, setFee] = useState("");
  const [description, setDescription] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
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
      description === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      setName("");
      setStartingDate("");
      setEndingDate("");
      setFee("");
      setDescription("");
    }
    const addCourse = { name, startingDate, endingDate, fee, description };
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
    </>
  );
};
export default AddCourse;
