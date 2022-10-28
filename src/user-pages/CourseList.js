import React from 'react'

const CourseList = ({ data, SelectedMode }) => {
    return (
        <>
            <tr className={data.selMode ? 'selected-row' : ''}>
                <td>
                    <p className="btn btn-warning btn-sm ml-2"
                        onClick={() => SelectedMode(data.code)}>Select</p>
                </td>
                <td>{data.code}</td>
                <td>{data.name}</td>
            </tr>
        </>
    )
}
export default CourseList;
