import React from 'react'
import Topbar from './Topbar'
import '../../assest/admin/css/sb-admin-2.css'
import Sidebar from './Sidebar'
import { Footer } from './Footer'


const AdminLayout = () => {

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