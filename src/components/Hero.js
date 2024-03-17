import React  from 'react';

const Hero = () => {
    return (
        
        <section className="apihu-port-hero-area" id="apihu-port-hero">
            <img className="apihu-port-hero-shape-1" src="./assets/hero-shape.png" alt="Shape" />
            <img className="apihu-port-hero-shape-2" src="./assets/python.png" alt="Shape" />
            <img className="apihu-port-hero-shape-3" src="./assets/flutter.png" alt="Shape" />
            <img className="apihu-port-hero-shape-4" src="./assets/html.png" alt="Shape" />
            <img className="apihu-port-hero-shape-5" src="./assets/sql.png" alt="Shape" />

            <span className="apihu-port-hero-side-style-text">Aaditya</span>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8">
                        <div className="apihu-port-hero-left">
                            <p className="apihu-port-hero-subtitle wow slideInDown"  style={{ visibility: 'visible', animationName: 'slideInDown' }}>Welcome to My World</p>
                            <h1 className="apihu-port-hero-title cd-headline clip is-full-width">Hi there!<br />I’m Abdalelah   <span className="apihu-port-hero-title-color cd-words-wrapper" style={{ width: '67.5582px', overflow: 'hidden' }}>
                                {/* النص الذي يتغير هنا */}
                            </span>
                                <span className="apihu-port-hero-title-small">
                                    <div className="type">
                                        <p>I'm into <span className="typed-text"></span>Full-Stack Development<span className="cursor">&nbsp;</span></p>
                                    </div>
                                </span>
                            </h1>

                            <ul className="apihu-port-hero-btn-wrap wow slideInUp">
                                <li><a className="apihu-port-primary-btn apihu-port-hero-btn-gradient" href="mailto:aadityaraj085@gmail.com">Contact Me +</a></li>
                                <li><a className="apihu-port-secondary-btn apihu-port-hero-btn-white" href="#apihu-port-resume">About Me <i className="fa-solid fa-arrow-down"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="apihu-port-hero-social">
                            <ul>
                                <li><a href="https://www.linkedin.com/in/abdalelah-taleb-751044193/"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                <li><a href="https://github.com/abdalelah1/"><i className="fa-brands fa-github"></i></a></li>
                                <li><a href="https://www.instagram.com/abdalelah_/"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div className="apihu-port-hero-right wow slideInRight">
                            <div className="apihu-port-hero-right-img">
                                <img src="./assets/abdalelah2.jpg" alt="Hero Area" style={{borderRadius :'50%',height:'400px'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
