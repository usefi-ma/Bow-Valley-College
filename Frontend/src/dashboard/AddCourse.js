import React, { useState } from "react";
import Topbar from '../layouts/admin-layout/Topbar'
import Sidebar from '../layouts/admin-layout/Sidebar'
import { Footer } from '../layouts/admin-layout/Footer'
import Axios from "axios";
import uuid from 'react-uuid';

const AddCourse = () => {
  const [degrees, setDegrees] = useState([]);
  const [departmants, setDepartmants] = useState([]);
  const [terms, setTerms] = useState([]);
  const [programs, setPrograms] = useState([]);

  const fetchDegreeData = React.useCallback(() => {
    Axios({
      "method": "GET",
      "url": "http://localhost:5000/Degree"
    })
      .then((response) => {
        var newData = response.data.Degree;
        setDegrees(newData);
        console.log(response.data.Department)
        var newDataDepartment = response.data.Department;
        setDepartmants(newDataDepartment);
        var newDataTerm = response.data.Term;
        setTerms(newDataTerm);
        var newDataProgram = response.data.Program;
        setPrograms(newDataProgram);
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  React.useEffect(() => {
    fetchDegreeData();
  }, [fetchDegreeData])


  const unique_id = uuid();
  const small_course_id = unique_id.slice(0, 8);

  const [createCourse, setCreateCourse] = useState({
    courseId: small_course_id,
    name: "",
    startDate: "",
    endDate: "",
    fees: "",
    description: "",
    programId: "",
    degreeId: "",
    departmentId: "",
    termId: "",
    selMode: false

  });

  const [msg, setMsg] = useState("")
  const handleChange = (event) => {
    setCreateCourse({ ...createCourse, [event.target.name]: event.target.value });  //any input element name and its value
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(createCourse);
    Axios.post('http://localhost:5000/Course', createCourse)
      .then(response => {
        setMsg(response)
        console.log(response)
      });
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

                        <form className="user" onSubmit={handleSubmit}>
                          <div className="form-group row">
                            <input
                              type="hidden"
                              name="formId"
                              value={createCourse.formId}
                              onChange={handleChange}
                            />
                            <div className="col-sm-12 mb-3 mb-sm-0">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                placeholder="Course Name"
                                name="name"
                                value={createCourse.name}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          
                          <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                placeholder="Course Starting Date"
                                name="startDate"
                                value={createCourse.startDate}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                placeholder="Course Ending Date"
                                name="endDate"
                                value={createCourse.endDate}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-sm-6 ">
                              <select className="form-select form-control user_drp" name="degreeId" value={createCourse.degreeId} onChange={handleChange}>
                                <option selected>Course Type</option>
                                {degrees.map((option, index) => (
                                  <option value={option.DegreeID} key={index}>{option.Name}</option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-6 ">
                              <select className="form-select form-control user_drp" name="departmentId" value={createCourse.departmentId} onChange={handleChange} >
                                <option selected>Department</option>
                                {departmants.map((option, index) => (
                                  <option value={option.DepartmentID} key={index}>{option.Name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <div className="col-sm-6">
                              <select className="form-select form-control user_drp" name="programId" value={createCourse.programId} onChange={handleChange}>
                                <option selected>Programs</option>
                                {programs.map((option, index) => (
                                  <option value={option.ProgramID} key={index}>{option.Name}</option>
                                ))}
                              </select>
                            </div>
                            <div className="col-sm-6 ">
                              <select className="form-select form-control user_drp" name="termId" value={createCourse.termId} onChange={handleChange} >
                                <option selected>Terms</option>
                                {terms.map((option, index) => (
                                  <option value={option.TermID} key={index}>{option.Name}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control form-control-user"
                              placeholder="Fees"
                              name="fees"
                              value={createCourse.fees}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              className="form-control form-control-user"
                              name="description"
                              value={createCourse.description}
                              onChange={handleChange}
                            >
                              {" "}
                              Description
                            </textarea>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block">
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
