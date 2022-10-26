import React, { useState } from 'react'
import UserLayout from '../src/layouts/user-layout/UserLayout';
import { Route, Routes } from 'react-router-dom';
import AdminLayout from '../src/layouts/admin-layout/AdminLayout'
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './component/auth/Login'
import AdminLogin from './component/auth/AdminLogin'
import Signup from './component/auth/Signup';


const App = () => {

    const [role, setrole] = useState(false);
     const check=(role)=>{

if(role===true){}

     }
    return (

        <Router>
         
            <Routes>
                <Route path="/Login" element={<Login />} exact />
                <Route path="/Signup" element={<Signup />} exact />
                <Route path="/AdminLogin" element={<AdminLogin />} exact />
                <Route path="/*" exact
                    element={(role === true) ?
                        <AdminLayout /> :
                        <UserLayout />
                    } />

            </Routes>
        </Router>
    )
}

export default App