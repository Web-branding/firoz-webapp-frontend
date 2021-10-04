import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <section class="promo-primary">
					<picture>
						<source srcset={require("../img/contacts.jpg").default}  media="(min-width: 992px)"/><img class="img--bg"  src={require("../img/contacts.jpg").default} alt="img"/>
           
					</picture>
					<div class="promo-primary__description"> <span>Compassion</span></div>
					<div class="container">
						<div class="row">
							<div class="col-auto">
								<div class="align-container">
									<div class="align-container__item"><span class="promo-primary__pre-title">Help</span>
										<h1 class="promo-primary__title"><span>Contacts</span></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
        {/* <!-- section start--> */}
        <section class="section contacts">
					<div class="container">
						<div class="row offset-margin">
							<div class="col-sm-6 col-lg-3">
								<div class="icon-item">
									<div class="icon-item__img"><img class="img--layout" src={require("../img/icon_1-1.png").default} alt="img"/>
										{/* <svg class="icon icon-item__icon icon--red">
											<use xlink:href="#location-pin"></use>
										</svg> */}
									</div>
									<div class="icon-item__text">
										<p>Adress: Kunnamparambil Alathur MBR Palakkad Palakkad  KL</p>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-3">
								<div class="icon-item">
									<div class="icon-item__img"><img class="img--layout" src={require("../img/icon_2-2.png").default} alt="img"/>
										{/* <svg class="icon icon-item__icon icon--orange">
											<use xlink:href="#phone-call"></use>
										</svg> */}
									</div>
									<div class="icon-item__text">
										<p>Phone: <a class="icon-item__link" href="tel:+91 99999 99999">+91 99999 99999</a> <a class="icon-item__link" href="tel:+91 99999 99999">+91 99999 99999</a></p>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-3">
								<div class="icon-item">
									<div class="icon-item__img"><img class="img--layout" src={require("../img/icon_3-3.png").default} alt="img"/>
										{/* <svg class="icon icon-item__icon icon--green">
											<use xlink:href="#envelope"></use>
										</svg> */}
									</div>
									<div class="icon-item__text">
										<p>Email: <a class="icon-item__link" href="mailto:support@helpo.org">support@legacypartners.in </a></p>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-3">
								<div class="icon-item">
									<div class="icon-item__img"><img class="img--layout" src={require("../img/icon_4-4.png").default} alt="img"/>
										{/* <svg class="icon icon-item__icon icon--blue">
											<use xlink:href="#share"></use>
										</svg> */}
									</div>
									<div class="icon-item__text">
										{/* <!-- socials start--> */}
										<ul class="socials">
											<li class="socials__item"><a class="socials__link" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
											<li class="socials__item"><a class="socials__link" href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
											<li class="socials__item"><a class="socials__link socials__link--active" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
											<li class="socials__item"><a class="socials__link" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										</ul>
										{/* <!-- socials end--> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
        {/* <!-- section end--> */}
        {/* <!-- contacts start--> */}
        <section class="section contacts no-padding-top">
					<div class="contacts-wrapper">
						<div class="container">
							<div class="row justify-content-end">
								<div class="col-xl-6">
									<form class="form message-form" action="javascript:void(0);">
										<h6 class="form__title heading heading--center">Send Message</h6><span class="form__text heading heading--center">* The following info is required</span>
										<div class="row">
											<div class="col-lg-6">
												<input class="form__field" type="text" name="first-name" placeholder="First Name *" required="required"/>
											</div>
											<div class="col-lg-6">
												<input class="form__field" type="text" name="last-name" placeholder="Last Name *" required="required"/>
											</div>
											<div class="col-lg-6">
												<input class="form__field" type="email" name="email" placeholder="Email *" required="required"/>
											</div>
											<div class="col-lg-6">
												<input class="form__field" type="tel" name="phone-number" placeholder="Phone"/>
											</div>
											<div class="col-12">
												<textarea class="form__message form__field" name="message" placeholder="Message"></textarea>
											</div>
											<div class="col-12 heading heading--center">
												<button class="form__submit" type="submit">Send Message</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="contacts-wrapper__map" id="map" data-api-key="AIzaSyD5ES8GFHrarPhIVpDhFDea6fPtga0Wy4Y" data-longitude="-73.935242" data-latitude="40.730610" data-marker="img/marker.png"></div>
					</div>
				</section>
        {/* <!-- contacts end--> */}
        {/* <!-- bottom bg start--> */}
        <section class="bottom-background">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="bottom-background__img"><img src={require("../img/bottom-bg.png").default} alt="img" style={{marginbottom: 50}}/></div>
							</div>
						</div>
					</div>
				</section>
        {/* <!-- bottom bg end--> */}
    </div>
  );
};

export default ContactUsPage;
