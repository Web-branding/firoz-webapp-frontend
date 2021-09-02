import React from "react";

const AboutUsPage = () => {
  return (
    <div>
     
      <section class="promo-primary">
					<picture>
						<source srcset={require("../img/about.jpg").default} media="(min-width: 992px)"/><img class="img--bg" src={require("../img/about.jpg").default} alt="img"/>
					</picture>
					<div class="promo-primary__description"> <span>Donation</span></div>
					<div class="container">
						<div class="row">
							<div class="col-auto">
								<div class="align-container">
									<div class="align-container__item"><span class="promo-primary__pre-title">Firoz Kunnamparambil Foundation</span>
										<h1 class="promo-primary__title"><span>About</span><br/><span>Organization</span></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
        {/* <!-- about-us start--> */}
        <section class="section about-us">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-lg-6 col-xl-5">
								<div class="img-box"><img class="img--layout" src={require("../img/about_layout-reverse.png").default} alt="img"/>
									<div class="img-box__img"><img class="img--bg" src={require("../img/about_img.jpg").default} alt="img"/></div>
								</div>
							</div>
							<div class="col-lg-6 col-xl-6 offset-xl-1">
								<div class="heading heading--primary"><span class="heading__pre-title">About Us</span>
									<h2 class="heading__title"><span>Help is Our</span> <span>Main Goal</span></h2>
								</div>
								<p class="text-justify"><strong>Firoz kunnamparambil foundation as a vibrant charitable group working towards Economic , Social and Educational Development and Upliftment of people in Karnataka and other parts of the country is registered under Kerala </strong></p>
								<p class="text-justify">We are driven by selfless devotion and zeal…which enables us to work under any conditions and innumerable constraints. Today, we have our registered office at Kochi</p>
								<p class="text-justify">profitable-oriented secular organization working in the field of socio-economic, educational development and upliftment of down-trodden people of Kochi and other part of the country, with this headquarters in Kerala for over 10 years.</p>
							</div>
						</div>
					</div>
				</section>
        {/* <!-- about-us end--> */}
        {/* <!-- about us style-2 start--> */}
        <section class="section about-us about-us--style-2 no-padding-top">
					<div class="container">
						<div class="row align-items-center">
							<div class="col-lg-6">
								<h4 class="about-us__subtitle">We work around the globe to save lives, defeat poverty and achieve social justice.</h4>
								<p class="text-justify">Firoz kunnamprambil started as early as 1999 under the chief eminent of Kerala with the vision purely to address the problems faced by the down-trodden, particularly women and children, who are totally neglected by the society.</p>
								<p class="text-justify">Our commitment is to entitle children to become a catalyst in transforming lives by developing life skills to build better future with focus and a determined goal.
									This helps to build their self-confidence and to understand their abilities. </p>
							</div>
							<div class="col-lg-6 col-xl-5 offset-xl-1">
								<div class="about-us__text-aside">Our Mission</div>
							</div>
						</div>
					</div>
				</section>
        {/* <!-- about us style-2 end--> */}
        {/* <!-- video block start--> */}
        <section class="section video-block no-padding-top">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="video-frame">
                  <img class="img--bg" src={require("../img/video_frame.png").default} alt="frame"/>
                  <a class="video-trigger video-frame__trigger" href="https://www.youtube.com/watch?v=_sI_Ps7JSEk">
                    <span class="video-frame__icon"><i class="fa fa-play" aria-hidden="true"></i></span>
                    <span class="video-frame__text">Watch our video</span></a><img class="video-frame__img-layout" 
                     src={require("../img/video_frame-layout.png").default} alt="layout"/></div> 
							</div>
						</div>
					</div>
				</section>
        {/* <!-- video block end--> */}
        {/* <!-- statistics start--> */}
        <section class="section statistics no-padding-top">
					<div class="container">
						<div class="row margin-bottom">
							<div class="col-12">
								<div class="heading heading--primary heading--center"><span class="heading__pre-title">What we Do</span>
									<h2 class="heading__title no-margin-bottom"><span>Our</span> <span>Statistics</span></h2>
								</div>
							</div>
						</div>
						<div class="row offset-margin">
							<div class="col-sm-6 col-lg-3">
								<div class="icon-item"> 
									<div class="icon-item__img"><img class="img--layout" src={require("../img/icon_1.png").default} alt="img"/><span class="js-counter">20</span></div>
									<div class="icon-item__text">
										<p>Years of Experience</p>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-3">
								<div class="icon-item">
									<div class="icon-item__img"><img class="img--layout" src={require("../img/icon_2.png").default} alt="img"/><span class="js-counter">32</span></div>
									<div class="icon-item__text">
										<p>Country</p>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-3">
								<div class="icon-item">
									<div class="icon-item__img"><img class="img--layout" src={require("../img/icon_3.png").default} alt="img"/><span class="js-counter">200 </span><span>+</span></div>
									<div class="icon-item__text">
										<p>Thousand People Helped</p>
									</div>
								</div>
							</div>
							<div class="col-sm-6 col-lg-3">
								<div class="icon-item">
									<div class="icon-item__img"><img class="img--layout" src={require("../img/icon_4.png").default} alt="img"/><span class="js-counter">65 </span><span>b</span></div>
									<div class="icon-item__text">
										<p>Dollars We Collected				</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
        {/* <!-- statistics end--> */}
        {/* <!-- team start--> */}
        <section class="py-5">
					<div class="container">
						<div class="row">
							<div class="col-12">
								<div class="heading heading--primary"><span class="heading__pre-title">Team</span>
									<h2 class="heading__title no-margin-bottom"><span>Meet</span> <span>our Team</span></h2>
								</div>
							</div>
						</div>
						<div class="row margin-bottom">
							<div class="col-sm-6 col-lg-4 col-xl-3">
								{/* <!-- iteam start--> */}
								<div class="team-item team-item--rounded">
									<ul class="team-item__socials">
										<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
									</ul> 
									<div class="team-item__img-holder"><img class="img--layout" src={require("../img/team_1.png").default}  alt="layout"/>
										<div class="team-item__img"><img class="img--bg" src={require("../img/team_1.jpg").default}  alt="teammate"/></div>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Christy</div>
										<div class="team-item__position">Ceo/Founder</div>
									</div>
								</div>
								{/* <!-- iteam end--> */}
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								{/* <!-- iteam start--> */}
								<div class="team-item team-item--rounded">
									<ul class="team-item__socials">
										<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
									</ul> 
									<div class="team-item__img-holder"><img class="img--layout" src={require("../img/team_2.png").default} alt="layout"/>
										<div class="team-item__img"><img class="img--bg" src={require("../img/team_2.jpg").default} alt="teammate"/></div>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Mikeal </div>
										<div class="team-item__position">Manager</div>
									</div>
								</div>
								{/* <!-- iteam end--> */}
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								{/* <!-- iteam start--> */}
								<div class="team-item team-item--rounded">
									<ul class="team-item__socials">
										<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
									</ul>
									<div class="team-item__img-holder"><img class="img--layout"src={require("../img/team_3.png").default} alt="layout"/>
										<div class="team-item__img"><img class="img--bg" src={require("../img/team_3.jpg").default} alt="teammate"/></div>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Ann Maria</div>
										<div class="team-item__position">Leader</div>
									</div>
								</div>
								{/* <!-- iteam end--> */}
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								{/* <!-- iteam start--> */}
								<div class="team-item team-item--rounded">
									<ul class="team-item__socials">
										<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
									</ul>
									<div class="team-item__img-holder"><img class="img--layout" src={require("../img/team_4.png").default} alt="layout"/>
										<div class="team-item__img"><img class="img--bg" src={require("../img/team_4.jpg").default} alt="teammate"/></div>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Firoz Kunnamparambil</div>
										<div class="team-item__position">Founder</div>
									</div>
								</div>
								{/* <!-- iteam end--> */}
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								{/* <!-- iteam start--> */}
								<div class="team-item team-item--rounded">
									<ul class="team-item__socials">
										<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
									</ul>
									<div class="team-item__img-holder"><img class="img--layout" src={require("../img/team_5.png").default} alt="layout"/>
										<div class="team-item__img"><img class="img--bg" src={require("../img/team_5.jpg").default} alt="teammate"/></div>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Kerthi suresh</div>
										<div class="team-item__position">Volunteer</div>
									</div>
								</div>
								{/* <!-- iteam end--> */}
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								{/* <!-- iteam start--> */}
								<div class="team-item team-item--rounded">
									<ul class="team-item__socials">
										<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
									</ul>
									<div class="team-item__img-holder"><img class="img--layout" src={require("../img/team_6.png").default} alt="layout"/>
										<div class="team-item__img"><img class="img--bg" src={require("../img/team_6.jpg").default} alt="teammate"/></div>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Lisa Chester</div>
										<div class="team-item__position">Volunteer</div>
									</div>
								</div>
								{/* <!-- iteam end--> */}
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								{/* <!-- iteam start--> */}
								<div class="team-item team-item--rounded">
									<ul class="team-item__socials">
										<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
									</ul>
									<div class="team-item__img-holder"><img class="img--layout" src={require("../img/team_7.png").default} alt="layout"/>
										<div class="team-item__img"><img class="img--bg" src={require("../img/team_7.jpg").default} alt="teammate"/></div>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Aisha </div>
										<div class="team-item__position">CEO</div>
									</div>
								</div>
								{/* <!-- iteam end--> */}
							</div>
							<div class="col-sm-6 col-lg-4 col-xl-3">
								{/* <!-- iteam start--> */}
								<div class="team-item team-item--rounded">
									<ul class="team-item__socials">
										<li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
										<li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
									</ul>
									<div class="team-item__img-holder"><img class="img--layout" src={require("../img/team_8.png").default} alt="layout"/>
										<div class="team-item__img"><img class="img--bg" src={require("../img/team_8.jpg").default} alt="teammate"/></div>
									</div>
									<div class="team-item__description">
										<div class="team-item__name">Alex paul</div>
										<div class="team-item__position">Volunteer</div>
									</div>
								</div>
								{/* <!-- iteam end--> */}
							</div>
						</div>
						<div class="row">
							<div class="col-12 text-center">
                <a class="button button--primary" href="#">Become our volunteer</a>
                </div>
						</div>
					</div>
				</section>
        {/* <!-- team end--> */}
        
     
    </div>
  );
};

export default AboutUsPage;
