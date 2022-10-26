import React, { useState } from 'react'
import UserLayout from '../src/layouts/user-layout/UserLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLayout from '../src/layouts/admin-layout/AdminLayout'

import Login from './component/auth/Login'
import AdminLogin from './component/auth/AdminLogin'
import Signup from './component/auth/Signup';


const App = () => {

    const [role, setRole] = useState(true);
    const check = (role) => {

        if (role === true) {
            <UserLayout />
        }
        else {
            <AdminLayout />
        }

    }
    return (

        <>
            {/* (role === true) ?
                        <AdminLayout /> :
                        <UserLayout /> */}
            <Router>

                <Routes>
                    <Route path="/Login" element={<Login />} exact />
                    <Route path="/Signup" element={<Signup />} exact />
                    <Route path="/AdminLogin" element={<AdminLogin />} exact />
                    <Route path="/*" element={<UserLayout />} exact />
                    <Route path="/Admin/*" element={<AdminLayout />} exact />
                
                </Routes>

            </Router>

            {/* <Routes>
                <Route path="/*" exact
                    element={check()} />

            </Routes> */}
        </>
    )
}

export default App