import React from 'react'

const CourseList = ({ data, SelectedMode }) => {
    return (
        <>
            <tr className={data.selMode ? 'selected-row' : ''} >
                <td>
                    <p className="btn btn-warning btn-sm ml-2"
                        onClick={() => SelectedMode(data.CourseID)}>Select</p>
                </td>
                <td>{data.CourseID}</td>
                <td>{data.Name}</td>
            </tr>
        </>
    )
}
export default CourseList;
