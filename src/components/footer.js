const Footer = () => {
    return (

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <img src="./assets/footer_ar_logo.png" alt="footer logo"/>
            <p class="text-justify">Thank you for visiting my personal portfolio site. I would really be glad to connect with you. Message me on my LinkedIn handle or on my Instagram handle.</p><p>Keep learning and keep rising.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Contact Info</h6>
            <ul class="footer-links">
            <li><i className="fa-solid fa-phone" style={{ color: 'yellow' }}></i> +91 8882774087</li>
            <li><i className="fa-solid fa-envelope" style={{ color: 'yellow' }}></i> aadityaraj085@gmail.com</li>
            <li><i className="fa-solid fa-location-pin" style={{ color: 'yellow' }}></i> Greater Noida, U.P., India</li>

            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">Home</a></li>
								<li><a href="#apihu-port-resume">About</a></li>
								<li><a href="#apihu-port-feature">Projects</a></li>
								<li><a href="#apihu-port-pricing-area">Qualifications</a></li>
								<li><a href="#contact-details">Contact</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Designed with <i class="fa fa-heart pulse" style={{color: '#e90606'}}></i> by
         <a href="https://www.linkedin.com/in/aaditya-raj-053974188/">Aaditya Raj</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="github" href="https://github.com/aaditya1612"><i class="fa fa-github"></i></a></li>
              <li><a class="instagram" href="https://instagram.com/aaditya_c16"><i class="fa fa-instagram"></i></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/in/aaditya-raj-053974188/"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
      );
}
 
export default Footer;