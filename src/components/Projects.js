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
                  <h3 className="apihu-port-single-service-title">Medical Records Management System with Voice-to-Text Feature</h3>
                  <p className="apihu-port-single-service-text">Developed a medical records management system aimed at doctors and patients, enabling the
registration of patient data from radiographic images and laboratory tests, as well as storing patient
records. .</p>
                  <a className="apihu-port-single-service-btn" href="#">Read More <i className="fas fa-plus"></i></a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="apihu-port-single-service wow fadeInUp" data-wow-delay="0.4s">
                  <div className="apihu-port-service-icon-box">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                  <h3 className="apihu-port-single-service-title">E-commerce Store with AI-Powered Product Recommendations</h3>
                  <p className="apihu-port-single-service-text">Developed a comprehensive e-commerce platform with advanced product recommendation system
leveraging product descriptions. Integrated Dialogflow chatbot for enhanced user interaction,
connecting seamlessly with the store's database.</p>
                  <a className="apihu-port-single-service-btn" href="https://github.com/abdalelah1/Anon-E-commerce">Read More <i className="fas fa-plus"></i></a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="apihu-port-single-service wow fadeInUp" data-wow-delay="0.6s">
                  <div className="apihu-port-service-icon-box">
                    <i className="fa-solid fa-paintbrush"></i>
                  </div>
                  <h3 className="apihu-port-single-service-title">Smart Supervisor Web Application</h3>
                  <p className="apihu-port-single-service-text">SmartAdvisor is an innovative academic advising system designed to revolutionize the way universities handle student advising. With its intuitive interface and powerful features, SmartAdvisor streamlines the advising process, empowering advisors to provide personalized guidance and support to students on their academic journey.</p>
                  <a className="apihu-port-single-service-btn" href="https://github.com/abdalelah1/smart-Advisor">Read More <i className="fas fa-plus"></i></a>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="apihu-port-single-service wow fadeInUp" data-wow-delay="0.8s">
                  <div className="apihu-port-service-icon-box">
                    <i className="fa-solid fa-code-merge"></i>
                  </div>
                  <h3 className="apihu-port-single-service-title">Smart Studio</h3>
                  <p className="apihu-port-single-service-text">developed the "Smart Studio" project, which integrates artificial intelligence technologies with a Flutter
application. The project aims to provide a platform for managing and interacting with images efficientl </p>
                  <a className="apihu-port-single-service-btn" href="https://github.com/abdalelah1/smart-studio-django-flutter">Read More <i className="fas fa-plus"></i></a>
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