const Footer = () => {
    return (

    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
          <img src="./assets/ar_logo.png" alt="SaaSio Portfolio" style={{backgroundColor:"gray"}} />
            <p className="text-justify">Thank you for visiting my personal portfolio site. I would really be glad to connect with you. Message me on my LinkedIn handle or on my Instagram handle.</p><p>Keep learning and keep rising.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Contact Info</h6>
            <ul className="footer-links">
            <li><i className="fa-solid fa-phone" style={{ color: 'yellow' }}></i> +963 992112377</li>
            <li><i className="fa-solid fa-envelope" style={{ color: 'yellow' }}></i>ataleb261@gmail.com</li>
            <li><i className="fa-solid fa-location-pin" style={{ color: 'yellow' }}></i> Damascus, Syria</li>

            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
								<li><a href="#apihu-port-resume">About</a></li>
								<li><a href="#apihu-port-feature">Projects</a></li>
								<li><a href="#apihu-port-pricing-area">Qualifications</a></li>
                <li><a href="#Skills">Skills</a></li>
								<li><a href="#contact-details">Contact</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Designed with <i className="fa fa-heart pulse" style={{color: '#e90606'}}></i> by
         <a href="https://www.linkedin.com/in/abdalelah-taleb-751044193/">Abdalelah Taleb</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="github" href="https://github.com/abdalelah1"><i className="fa fa-github"></i></a></li>
              <li><a className="instagram" href="https://instagram.com/abdalelah_"><i className="fa fa-instagram"></i></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/in/abdalelah-taleb-751044193/"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
      );
}
 
export default Footer;