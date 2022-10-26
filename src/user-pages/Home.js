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


            {/* <!-- Start upcoming-event Area --> */}
            {/* <section class="upcoming-event-area section-gap">
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="menu-content pb-70 col-lg-8">
                            <div class="title text-center">
                                <h1 class="mb-10">Upcoming Events of our Institute</h1>
                                <p>If you are a serious astronomy fanatic like a lot of us</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="active-upcoming-event-carusel">
                            <div class="single-carusel row align-items-center">
                                <div class="col-12 col-md-6 thumb">
                                    <img class="img-fluid" src={e1} alt="" />
                                </div>
                                <div class="detials col-12 col-md-6">
                                    <p>25th February, 2018</p>
                                    <a href="#"><h4>
                                        The Universe Through
                                        A Child S Eyes</h4></a>
                                    <p>
                                        For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
                                    </p>
                                </div>
                            </div>
                            <div class="single-carusel row align-items-center">
                                <div class="col-12 col-md-6 thumb">
                                    <img class="img-fluid" src={e2} alt="" />
                                </div>
                                <div class="detials col-12 col-md-6">
                                    <p>25th February, 2018</p>
                                    <a href="#"><h4>The Universe Through
                                        A Child S Eyes</h4></a>
                                    <p>
                                        For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
                                    </p>
                                </div>
                            </div>
                            <div class="single-carusel row align-items-center">
                                <div class="col-12 col-md-6 thumb">
                                    <img class="img-fluid" src={e1} alt="" />
                                </div>
                                <div class="detials col-12 col-md-6">
                                    <p>25th February, 2018</p>
                                    <a href="#"><h4>The Universe Through
                                        A Child S Eyes</h4></a>
                                    <p>
                                        For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
                                    </p>
                                </div>
                            </div>
                            <div class="single-carusel row align-items-center">
                                <div class="col-12 col-md-6 thumb">
                                    <img class="img-fluid" src={e2} alt="" />
                                </div>
                                <div class="detials col-12 col-md-6">
                                    <p>25th February, 2018</p>
                                    <a href="#"><h4>The Universe Through
                                        A Child S Eyes</h4></a>
                                    <p>
                                        For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
                                    </p>
                                </div>
                            </div>
                            <div class="single-carusel row align-items-center">
                                <div class="col-12 col-md-6 thumb">
                                    <img class="img-fluid" src={e2} alt="" />
                                </div>
                                <div class="detials col-12 col-md-6">
                                    <p>25th February, 2018</p>
                                    <a href="#"><h4>The Universe Through
                                        A Child S Eyes</h4></a>
                                    <p>
                                        For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
                                    </p>
                                </div>
                            </div>
                            <div class="single-carusel row align-items-center">
                                <div class="col-12 col-md-6 thumb">
                                    <img class="img-fluid" src={e2} alt="" />
                                </div>
                                <div class="detials col-12 col-md-6">
                                    <p>25th February, 2018</p>
                                    <a href="#"><h4>The Universe Through
                                        A Child S Eyes</h4></a>
                                    <p>
                                        For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- End upcoming-event Area --> */}



            {/* <!-- Start upcoming-event Area --> */}
			{/* <section className="upcoming-event-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="menu-content pb-70 col-lg-8">
							<div className="title text-center">
								<h1 className="mb-10">Upcoming Events of our Institute</h1>
								<p>If you are a serious astronomy fanatic like a lot of us</p>
							</div>
						</div>
					</div>								
					<div className="row">
						<div className="active-upcoming-event-carusel">
							<div className="single-carusel row align-items-center">
								<div className="col-12 col-md-6 thumb">
                                <img className="img-fluid" src={e2} alt="" />
								</div>
								<div className="detials col-12 col-md-6">
									<p>25th February, 2018</p>
									<a href="#"><h4>The Universe Through
									A Child S Eyes</h4></a>
									<p>
										For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
									</p>
								</div>
							</div>
							<div className="single-carusel row align-items-center">
								<div className="col-12 col-md-6 thumb">
                                <img className="img-fluid" src={e1} alt="" />
								</div>
								<div className="detials col-12 col-md-6">
									<p>25th February, 2018</p>
									<a href="#"><h4>The Universe Through
									A Child S Eyes</h4></a>
									<p>
										For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
									</p>
								</div>
							</div>	
							<div className="single-carusel row align-items-center">
								<div className="col-12 col-md-6 thumb">
                                <img className="img-fluid" src={e1} alt="" />
								</div>
								<div className="detials col-12 col-md-6">
									<p>25th February, 2018</p>
									<a href="#"><h4>The Universe Through
									A Child S Eyes</h4></a>
									<p>
										For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
									</p>
								</div>
							</div>	
							<div className="single-carusel row align-items-center">
								<div className="col-12 col-md-6 thumb">
                                <img className="img-fluid" src={e2} alt="" />
								</div>
								<div className="detials col-12 col-md-6">
									<p>25th February, 2018</p>
									<a href="#"><h4>The Universe Through
									A Child S Eyes</h4></a>
									<p>
										For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
									</p>
								</div>
							</div>
							<div className="single-carusel row align-items-center">
								<div className="col-12 col-md-6 thumb">
									<img className="img-fluid" src={e2} alt="" />
								</div>
								<div className="detials col-12 col-md-6">
									<p>25th February, 2018</p>
									<a href="#"><h4>The Universe Through
									A Child S Eyes</h4></a>
									<p>
										For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
									</p>
								</div>
							</div>	
							<div className="single-carusel row align-items-center">
								<div className="col-12 col-md-6 thumb">
									<img className="img-fluid" src={e1} alt="" />
								</div>
								<div className="detials col-12 col-md-6">
									<p>25th February, 2018</p>
									<a href="#"><h4>The Universe Through
									A Child S Eyes</h4></a>
									<p>
										For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.
									</p>
								</div>
							</div>																						
						</div>
					</div>
				</div>	
			</section> */}
			{/* <!-- End upcoming-event Area --> */}
        </>
    )
}
export default Home;