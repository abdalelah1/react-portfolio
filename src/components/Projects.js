const Projects = () => {
    return (
        <section className="apihu-port-service-area" id="apihu-port-feature">
          <img className="apihu-port-service-shape-1" src="./assets/service-shape-1.png" alt="Service Shape" />
          <img className="apihu-port-service-shape-2" src="./assets/service-shape-2.png" alt="Service Shape" />
    
          <div className="container">
            <div className="row">
              <div className="col-xl-12 text-center">
                <div className="apihu-port-section-heading">
                  <p className="apihu-port-section-subtitle">Trying to make this section powerful and inspiring.</p>
                  <h2 className="apihu-port-section-title">Projects and <span className="apihu-port-section-title-color">Achievements</span>.</h2>
                </div>
              </div>
            </div>
    
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="apihu-port-single-service wow fadeInUp" data-wow-delay="0.2s">
                  <div className="apihu-port-service-icon-box">
                    <i className="fa-solid fa-chart-bar"></i>
                  </div>
                  <h3 className="apihu-port-single-service-title">Covid Dashboard</h3>
                  <p className="apihu-port-single-service-text">A streamlit based Covid19 dashboard capable of showing pictorial data about covid stats statewise.</p>
                  <a className="apihu-port-single-service-btn" href="#">Read More <i className="fas fa-plus"></i></a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="apihu-port-single-service wow fadeInUp" data-wow-delay="0.4s">
                  <div className="apihu-port-service-icon-box">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  <h3 className="apihu-port-single-service-title">ChatBot</h3>
                  <p className="apihu-port-single-service-text">A general Q&A chatbot powered by WolframAlpha and python. Integrated with web using flask.</p>
                  <a className="apihu-port-single-service-btn" href="#">Read More <i className="fas fa-plus"></i></a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="apihu-port-single-service wow fadeInUp" data-wow-delay="0.6s">
                  <div className="apihu-port-service-icon-box">
                    <i className="fa-solid fa-paintbrush"></i>
                  </div>
                  <h3 className="apihu-port-single-service-title">SharPy</h3>
                  <p className="apihu-port-single-service-text">An OpenCV based drawing tool to draw shapes and curves without any physical interaction with system. Currently in development phase</p>
                  <a className="apihu-port-single-service-btn" href="#">Read More <i className="fas fa-plus"></i></a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="apihu-port-single-service wow fadeInUp" data-wow-delay="0.8s">
                  <div className="apihu-port-service-icon-box">
                    <i className="fa-solid fa-code-merge"></i>
                  </div>
                  <h3 className="apihu-port-single-service-title">Hacktober Fest</h3>
                  <p className="apihu-port-single-service-text">Completed HactoberFest with acceptance of 4+ PR on GitHub. </p>
                  <a className="apihu-port-single-service-btn" href="#">Read More <i className="fas fa-plus"></i></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 text-center">
                <div className="apihu-port-service-load-more-btn">
                  <a href="#">Load More <i className="fas fa-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
}
 
export default Projects;