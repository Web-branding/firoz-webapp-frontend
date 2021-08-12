import React from "react" 
import Logo from '../img/logo_white.png'
const FooterComponet = () => {
    return(
        <div>
           <footer className="footer">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-6 col-lg-3">
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
						<div className="col-sm-6 col-lg-3">
							<h4 className="footer__title">Contacts</h4>
							<div className="footer-contacts">
								<p className="footer-contacts__address">Elliott Ave, Parkville VIC 3052, Melbourne Canada</p>
								<p className="footer-contacts__phone">Phone: <a href="tel:+31859644725">+31 85 964 47 25</a></p>
								<p className="footer-contacts__mail">Email: <a href="mailto:support@helpo.org">support@helpo.org</a></p>
							</div>
						</div>
						<div className="col-sm-6 col-lg-3">
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
						<div className="col-sm-6 col-lg-3">
							<h4 className="footer__title">Donate</h4>
							<p>Help Us Change the Lives of Children in World</p><a className="button footer__button button--filled" href="#">Donate</a>
						</div>
					</div>
					<div className="row align-items-baseline">
						<div className="col-md-6">
							<p className="footer-copyright">© 2020 Helpo Charity Template by Artureanec</p>
						</div>
						<div className="col-md-6">
							<div className="footer-privacy"><a className="footer-privacy__link" href="#">Privacy Policy</a><span className="footer-privacy__divider">|</span><a className="footer-privacy__link" href="#">Term and Condision</a></div>
						</div>
					</div>
				</div>
			</footer>
        </div>
    )
}


export default FooterComponet