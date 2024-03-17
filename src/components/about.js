const About = () => {
    return (    <section className="apihu-port-about-area" id="apihu-port-resume">
    <img src="./assets/about-shape-1.png" alt="" className="apihu-port-about-shape" />

    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6">
          <div className="apihu-port-about-left wow slideInLeft" style={{ visibility: 'visible', animationName: 'slideInLeft' }}>
            <div className="apihu-port-about-img">
              <img src="./assets/left_python.png" alt="" />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6">
          <div className="apihu-port-about-right">
            <h3 className="apihu-port-about-subtitle">About Abdalelah</h3>
            <h2 className="apihu-port-about-title">Passionate about new tech. and <span>Python</span>.</h2>
            <p className="apihu-port-about-text">I am <b>CSE(AI&ML)'25</b> student at <b>G.L. Bajaj Institute of Technology and Management.</b> I am very passionate about Python and have an experience of 2 years in working with Python. Along with it I am also very interested in CP and love to solve programming puzzles in my free time.</p>
            <div className="apihu-port-about-expertise">
              <ul className="nav nav-pills" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active show" id="pills-home-tab" href="https://www.linkedin.com/in/aaditya-raj-053974188/" role="tab" aria-controls="pills-home" aria-selected="true"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active show" id="pills-profile-tab" href="https://github.com/aaditya1612" role="tab" aria-controls="pills-profile" aria-selected="false"><i className="fa-brands fa-square-github"></i> Github</a>
                </li>
              </ul>

              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <ul>
                    <li>
                      <span className="apihu-port-expertise-title">Worked with Tkinter, OpenCv, PyAudio and StreamLit</span>
                      <span className="apihu-port-expertise-text">Useful Libraries in Python</span>
                    </li>
                    <li>
                      <span className="apihu-port-expertise-title">Currently working with <font style={{ color: 'blue' }}>Flutter (A framework by Google)</font></span>
                      <span className="apihu-port-expertise-text">Soon going to gain some experience in it.</span>
                    </li>
                    <li>
                      <span className="apihu-port-expertise-title">I am into Technical content creation.</span>
                      <span className="apihu-port-expertise-text">Check out my blogging site: <a href="https://foxstack.blogspot.com/" style={{ textDecoration: 'none', color: '#e70820' }}>FoxStack</a></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
} 


 
export default About;