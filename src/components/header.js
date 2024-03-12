const Header = () => {
    return ( 
        <header class="apihu-port-header-area">
        <div class="container">
            <div class="row">
                <div class="col-xl-2 col-lg-2 col-md-2 col-3">
                    <div class="apihu-port-logo">
                        <img src="./assets/ar_logo.png" alt="SaaSio Portfolio" />
                    </div>
                </div>
                <div class="col-xl-8 d-none d-lg-block text-center col-lg-8">
                    <div class="apihu-port-main-navigation">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#apihu-port-resume">About</a></li>
                            <li><a href="#apihu-port-feature">Projects</a></li>
                            <li><a href="#apihu-port-pricing-area">Qualifications</a></li>
                            <li><a href="#contact-details">Contact</a></li>
                            
                        </ul>
                    </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-10 col-9 text-right">
                    <div class="apihu-port-header-cta">
                        <a href="https://instagram.com/aaditya_c16">Let's Chat <i class="fas fa-comment-dots"></i></a>
                    </div>

                    <div class="apihu-port-mobile-menu-hamburger">
                        <a href="#"><i class="fas fa-bars"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}
 
export default Header;