import React from 'react'
import { useNavigate } from 'react-router-dom'

const Programinfo = ({ programInfo }) => {
    const navigate = useNavigate();

    const goProgramDetail = (num) => {

        // to="/ProgramDetail/?code=1}"
        navigate({
            pathname: '/ProgramDetail',
            search: `?code=${(num)}`,
        });

    }
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
                    <p onClick={() => goProgramDetail(programInfo.code)}>
                        <h4>{programInfo.name}
                        </h4>
                    </p>
                    <p>
                        {programInfo.description}
                    </p>
                </div>
            </div>

        </>
    )
}
export default Programinfo;