import React from 'react'
import { Link } from 'react-router-dom'

const Programinfo = ({ programInfo }) => {
  
    return (
        <>
            <div className="single-popular-carusel col-lg-3 col-md-6" key={programInfo.code}>
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
                    <Link to="/ProgramDetail/?code=1">
                        <h4>{programInfo.name}
                        </h4>
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