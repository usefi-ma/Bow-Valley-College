import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

const Programinfo = ({ programInfo }) => {

    return (
        <>
            <div className="single-popular-carusel col-lg-3 col-md-6" >
                <div className="thumb-wrap relative">
                    <div className="thumb relative">
                        <div className="overlay overlay-bg"></div>
                        <img className="img-fluid" src={programInfo.Image} />
                    </div>
                    <div className="meta d-flex justify-content-between">
                        <p>{programInfo.Type}</p>
                        <h4>CAD {programInfo.Fees}</h4>
                    </div>
                </div>
                <div className="details">
                    <Link to={`/ProgramDetail?code=${programInfo.ProgramID}`}>
                        <h4>{programInfo.Name}</h4>
                    </Link>
                    <p>
                        {programInfo.Description}
                    </p>
                </div>
            </div>

        </>
    )
}
export default Programinfo;