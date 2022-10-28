import React, { useState } from 'react'
import UserLayout from '../src/layouts/user-layout/UserLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLayout from '../src/layouts/admin-layout/AdminLayout'

import Login from './component/auth/Login'
import Signup from './component/auth/Signup';
import PrivateRoute from './utils/PrivateRoute';

import AddCourse from './dashboard/AddCourse';
import Courses from './dashboard/Courses';
import Students from './dashboard/Students';
import SubmitedForms from './dashboard/SubmitedForms';
import PageNotFound from './component/Page-not-found/PageNotFound';
import Contact from './user-pages/Contact'
import Program from './user-pages/Program'
import ProgramDetail from './user-pages/ProgramDetail'

const App = () => {

    // const check = (role) => {

    // if (role === true) {
    //     <UserLayout />
    // }
    // else {
    //     <AdminLayout />
    // }
    // } 

    return (

        <>
            <Router>
                <Routes>


                    <Route exact path='/' element={<PrivateRoute />}>
                        <Route exact path='/' element={<AdminLayout />} />
                        <Route path="/AddCourse" exact element={<AddCourse />} />
                        <Route path="/Courses" exact element={<Courses />} />
                        <Route path="/Students" exact element={<Students />} />
                        <Route path="/SubmitedForms" exact element={<SubmitedForms />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>


                    <Route path="/Login" element={<Login />} exact />
                    <Route path="/Signup" element={<Signup />} exact />

                    <Route path="/home/*" element={<UserLayout />} exact />
                    <Route path="/Program" element={<Program />} exact />
                    <Route path="/Contact" element={<Contact />} exact />
                    <Route path="/ProgramDetail" element={<ProgramDetail />} />




                </Routes>
            </Router>
        </>
    )
}

export default App