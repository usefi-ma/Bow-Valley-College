import React from 'react'
import Dashboard from '../../dashboard/Dashboard'
import Topbar from './Topbar'
import '../../assest/admin/css/sb-admin-2.css'
import Sidebar from './Sidebar'
import { Footer } from './Footer'
import { Route, Routes} from 'react-router-dom';
import AddCourse from '../../dashboard/AddCourse';
import Courses from '../../dashboard/Courses';
import Students from '../../dashboard/Students';
import SubmitedForms from '../../dashboard/SubmitedForms';
import PageNotFound from '../../component/Page-not-found/PageNotFound'

const AdminLayout = () => {
  React.useEffect(() => {
    async function init() {
        localStorage.clear();
        localStorage.setItem("role", false);
    }
    init();
}, [])
  return (
    <>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        <Sidebar />
        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">

          {/* <!-- Main Content --> */}
          <div id="content">

            <Topbar />
                 {/* <!-- Begin Page Content --> */}
                 <div className="container-fluid">

            <Routes>
                <Route path="/" element={<Dashboard />}  />
                <Route path="/AddCourse" element={<AddCourse />} exact/>
                <Route path="/Courses" element={<Courses />} exact />
                <Route path="/Students" element={<Students />} exact />
                <Route path="/SubmitedForms" element={<SubmitedForms />} exact />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

            </div>
            {/* <!-- /.container-fluid --> */}
          </div>
          {/* <!-- End of Main Content --> */}
          <Footer />
        </div>
        {/* <!-- End of Content Wrapper --> */}
      </div>
      {/* <!-- End of Page Wrapper --> */}


    </>
  )
}
export default AdminLayout;