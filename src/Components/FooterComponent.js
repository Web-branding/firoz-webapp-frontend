import React from "react" 
import Logo from '../img/flogo.png'
const FooterComponet = () => {
    return(
        <div>
           <footer className="footer">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-6 col-lg-3 banner-item ">
							<div className="footer-logo">
							<img className="header-logo__img logo--light" src={Logo} alt="logo" />
								</div>
							{/* <!-- footer socials start--> */}
							<ul className="footer-socials">
								<li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
								<li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
								<li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
								<li className="footer-socials__item"><a className="footer-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
							</ul>
							{/* <!-- footer socials end--> */}
						</div>
						<div className="col-12 col-sm-6 col-lg-3 banner-item ">
							<h4 className="footer__title">Contacts</h4>
							<div className="footer-contacts">
								<p className="footer-contacts__address">Kunnamparambil Alathur MBR Palakkad Palakkad KL</p>
								<p className="footer-contacts__phone">Phone: <a href="tel:+91 99999 99999">+91 99999 99999</a></p>
								<p className="footer-contacts__mail">Email: 


								 <a href="mailto:support@legacypartners.in">support@legacypartners.in
								</a></p>
							</div>
						</div>
						<div className="col-12 col-sm-6 col-lg-3 banner-item">
							<h4 className="footer__title">Menu & Links</h4>
							{/* <!-- footer nav start--> */}
							<nav>
								<ul className="footer-menu">
									<li className="footer-menu__item"><a className="footer-menu__link" href="index.html">Home</a></li>
									<li className="footer-menu__item"><a className="footer-menu__link" href="#">Blog</a></li>
									<li className="footer-menu__item"><a className="footer-menu__link" href="about.html">About</a></li>
									<li className="footer-menu__item footer-menu__item--active"><a className="footer-menu__link" href="#">Contacts</a></li>
									<li className="footer-menu__item"><a className="footer-menu__link" href="#">Pages</a></li>
									<li className="footer-menu__item"><a className="footer-menu__link" href="#">Elements</a></li>
									<li className="footer-menu__item"><a className="footer-menu__link" href="causes.html">Causes</a></li>
								</ul>
							</nav>
							{/* <!-- footer nav end--> */}
						</div>
						<div className="col-12 col-sm-6 col-lg-3 banner-item ">
							<h4 className="footer__title">Donate</h4>
							<p>Help Us Change the Lives of Children in World</p><a className="button footer__button button--filled" href="#">Donate</a>
						</div>
					</div>
					<div class="row">
					<div class="col-md-12 d-flex justify-content-center">
						<p class="footer-copyright" style={{color:"white"}}>© 2021 Firoz kunnamparambil Foundation Charity Template by Artureanec. Designed By
	
					<a href="https://www.thewebbranding.com/" style={{textDecoration: "none"} }>   Web Branding Info Solutions</a>
						 </p>
					</div>
				</div>
				</div>
			</footer>
        </div>
    )
}


export default FooterComponet