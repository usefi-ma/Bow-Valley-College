import React from 'react'
import DataTable from 'react-data-table-component';


const Students = () => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];
    const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]
    return (
        <>
            <h1 className="h3 mb-4 text-gray-800">Students</h1>
            {/* <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank"
            href="https://datatables.net">official DataTables documentation</a>.</p> */}


            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Students</h6>
                </div>
                <div className="card-body">

                    <div id="dataTable_filter" className="dataTables_filter d-flex mb-2">
                        <label>Search:  </label>
                        <input type="search" className="form-control form-control-sm col-md-4 ml-3" placeholder="" aria-controls="dataTable" />

                    </div>

                    <div className="table-responsive">
                        <DataTable
                            columns={columns}
                            data={data}
                            selectableRows
                            pagination
                            responsive
                            highlightOnHover
                            pointerOnHover

                        />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Students;
