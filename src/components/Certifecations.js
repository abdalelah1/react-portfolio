const Certifecations = () => {
    return (
        <section className="apihu-port-pricing-area" id="apihu-port-pricing-area">
          <img className="apihu-port-pricing-shape-left" src="./assets/pricing-left-shape.png" alt="Pricing Area Shape left" />
          <img className="apihu-port-pricing-shape-right" src="./assets/pricing-right-shape.png" alt="Pricing Area Shape right" />
    
          <div className="container">
            <div className="row">
              <div className="col-xl-12 text-center">
                <div className="apihu-port-section-heading">
                  <p className="apihu-port-section-subtitle">Qualifications</p>
                  <h2 className="apihu-port-section-title">Academic and Professional</h2>
                  <p className="apihu-port-section-text"></p>
                </div>
              </div>
            </div>
    

            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="apihu-port-single-pricing wow fadeInUp" data-wow-delay="0.2s">
                <h3>Bachelor of Software Engineering</h3>
                  <h4> University of Kalamoon <br /> 
                  2019 - 2024</h4>
                  <ul>
                    <li><i className="fa-solid fa-location-pin"></i> Syria</li>
                    <li>Gpa : 80%</li>
                    <li><img src="./assets/uok1.gif " alt="uok"  style={{height:'100px',}}/></li>
                  </ul>
                  <a>
                    Completed  <i className="fa-solid fa-business-success"></i>
                  </a>
                </div>
              </div>



              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="apihu-port-single-pricing wow fadeInUp" data-wow-delay="0.2s">
                  <h3>Web Development intership</h3>
                  <h4> CompWallah <br /> 
                  2024</h4>
                  <ul>

                    <li><i className="fa-solid fa-location-pin"></i> Remotly</li>

                    <li> <br />
                    <br /></li>
                    <li><img src="./assets/compwallah.jpeg " alt="uok"  style={{height:'100px',}}/></li>

                  </ul>
                  <a>
                    in progerss  <i className="fa-solid fa-business-time"></i>
                  </a>
                </div>
              </div>
              
            </div>
            
            </div>
            

 
        </section>
      ); 
}
 
export default Certifecations;