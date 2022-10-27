import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import {  Navigate, Outlet  } from 'react-router-dom';

//... => rest parameters

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   const location = useLocation();
//   // <Routes>
//   //   <Route {...rest}>
//   //     {localStorage.getItem('user') ?
//   //       <component />
//   //       :
//   //       <Navigate to={{ pathname: "/login", state: { from: location } }} />
//   //     }
//   //   </Route>
//   // </Routes>
//   return (<>{
//       const auth = null;


//     return auth ? <Outlet /> : <Navigate to="/login" />;
//     }
//   </>
//   );
// };
const PrivateRoute = () => {
  const auth = localStorage.getItem('user');

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;