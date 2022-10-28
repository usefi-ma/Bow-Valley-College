import React, { useEffect } from 'react'
import * as DOMPurify from 'dompurify';

const ProgramDetailItem = ({ info }) => {

    const [courseArray, setCourseArray] = React.useState(info.courses);

    return (
        <>
           <h4 >{info.name}</h4>
          
            {/* <p>{info.courses}</p> */}
            <div>
    { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(info.courses) }} /> }
  </div>
        </>
    )
}

export default ProgramDetailItem