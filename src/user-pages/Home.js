import React from 'react'
import e1 from '../assest/img/e1.jpg';
import e2 from '../assest/img/e2.jpg';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
        
            {/* <!-- start banner Area --> */}
            <section className="banner-area relative" id="home">
                <div className="overlay overlay-bg"></div>
                <div className="container">
                    <div className="row fullscreen d-flex align-items-center justify-content-between" style={{ height: 714 }}>
                        <div className="banner-content col-lg-9 col-md-12">
                            <h1 className="text-uppercase">
                                We Ensure better education
                                for a better world
                            </h1>
                            <p className="pt-10 pb-10">
                                In the history of modern astronomy, there is probably no one greater leap forward than
                                the building and launch of the space telescope known as the Hubble.
                            </p>
                            <Link to="/signup" className="primary-btn text-uppercase">Apply Now</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End banner Area --> */}

            {/* <!-- Start feature Area --> */}
            <section className="feature-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-feature">
                                <div className="title">
                                    <h4>Learn Online Courses</h4>
                                </div>
                                <div className="desc-wrap">
                                    <p>
                                        Usage of the Internet is becoming more common due to rapid advancement
                                        of technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-feature">
                                <div className="title">
                                    <h4>No.1 of universities</h4>
                                </div>
                                <div className="desc-wrap">
                                    <p>
                                        For many of us, our very first experience of learning about the celestial bodies begins when we saw our first.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-feature">
                                <div className="title">
                                    <h4>Huge Library</h4>
                                </div>
                                <div className="desc-wrap">
                                    <p>
                                        If you are a serious astronomy fanatic like a lot of us are, you can probably remember that one event.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End feature Area --> */}

        </>
    )
}
export default Home;