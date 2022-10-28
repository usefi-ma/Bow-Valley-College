import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Programinfo = ({ programInfo }) => {

    return (
        <>
            <div className="single-popular-carusel col-lg-3 col-md-6" >
                <div className="thumb-wrap relative">
                    <div className="thumb relative">
                        <div className="overlay overlay-bg"></div>
                        <img className="img-fluid" src={programInfo.image} />
                    </div>
                    <div className="meta d-flex justify-content-between">
                        <p>{programInfo.type}</p>
                        <h4>{programInfo.fee}</h4>
                    </div>
                </div>
                <div className="details">
             
                    {/* <p onClick={() => goProgramDetail(programInfo.code)}>
                        <h4>{programInfo.name}</h4>
                    </p> */}
                    <Link to={`/ProgramDetail?code=${programInfo.code}`}>
                        <h4>{programInfo.name}</h4>
                    </Link>
                    <p>
                        {programInfo.description}
                    </p>
                </div>
            </div>

        </>
    )
}
export default Programinfo;