import React from "react" 
import slide from '../img/promo_1.jpg'
// import promo from 'img/834promo_1.jpg'
// import promos from 'img/375promo_1.jpg'
const HomePage = () => {
    return(
        <div>
            <section className="promo">
				<div className="promo-slider">
					<div className="promo-slider__item promo-slider__item--style-1">
						<picture>
							<source srcset={require('../img/promo_1.jpg').default} media="(min-width: 835px)" />
							<source srcset={{slide}} media="(min-width: 376px)" /><img className="img--bg"
								src= {{slide}} alt="img" />
						</picture>
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="align-container">
										<div className="align-container__item">
											<div className="promo-slider__wrapper-1">
												<h2 className="promo-slider__title"><span>We help all people in need</span>
													<span>around the world.</span>
												</h2>
											</div>
											<div className="promo-slider__wrapper-2">
												<p className="promo-slider__subtitle">Charitable ventures for greater giving 
													Gloal impact works on Charitble ventures to inspeire greater giving.Firoz kunnamparambil foundations
													 serves a charity among public sectors.
												</p>
											</div>
											<div className="promo-slider__wrapper-3"><a
													className="button promo-slider__button button--primary"
													href="#">Discover</a></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="promo-slider__item promo-slider__item--style-2">
						<picture>
							<source srcset="img/promo_2.jpg" media="(min-width: 835px)" />
							<source srcset="img/834promo_2.jpg" media="(min-width: 376px)" /><img className="img--bg"
								src="img/375promo_2.jpg" alt="img" />
						</picture>
						<div className="container">
							<div className="row">
								<div className="col-xl-7">
									<div className="align-container">
										<div className="align-container__item">
											<div className="promo-slider__wrapper-1">
												<h2 className="promo-slider__title"><span>Our
														Helping</span><br /><span>around the world.</span></h2>
											</div>
											<div className="promo-slider__wrapper-2">
												<p className="promo-slider__subtitle">
													Our commitment is to entitle children to become a catalyst in transforming 
													lives by developing life skills to build better future with focus and a determined goal.
													This helps to build their self-confidence and to understand their abilities.</p>
											</div>
											<div className="promo-slider__wrapper-3"><a
													className="button promo-slider__button button--primary"
													href="#">Discover</a></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="promo-slider__item promo-slider__item--style-3">
						<picture>
							<source srcset="img/promo_3.jpg" media="(min-width: 835px)" />
							<source srcset="img/834promo_3.jpg" media="(min-width: 376px)" /><img className="img--bg"
								src="img/375promo_3.jpg" alt="img" />
						</picture>
						<div className="container">
							<div className="row">
								<div className="col-xl-8 offset-xl-2">
									<div className="align-container">
										<div className="align-container__item">
											<div className="promo-slider__wrapper-1">
												<h2 className="promo-slider__title"><span>Firoz kunnamparambil Foundation
														Volounteers</span><br /><span>Around the world.</span></h2>
											</div>
											<div className="promo-slider__wrapper-2">
												<p className="promo-slider__subtitle">Firoz Kunnamparambil Foundation's  Home for Children is registered 
													under provisions of sections (41)1 of the Juvenile Justice Act, 2015 
													as Child Care Institution. We Provide Free Education, Shelter and 
													Clothing for the Children.</p>
											</div>
											<div className="promo-slider__wrapper-3"><a
													className="button promo-slider__button button--primary"
													href="#">Discover</a></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* promo socials start */}
				<ul className="promo-socials">
					<li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-instagram"
								aria-hidden="true"></i></a></li>
					<li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-google-plus"
								aria-hidden="true"></i></a></li>
					<li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-twitter"
								aria-hidden="true"></i></a></li>
					<li className="promo-socials__item"><a className="promo-socials__link" href="#"><i className="fa fa-facebook"
								aria-hidden="true"></i></a></li>
				</ul>
				{/* <!-- promo socials end--> */}
				{/* <!-- promo pannel start--> */}
				<div className="promo-pannel"><a className="anchor promo-pannel__anchor" href="#about"> <span>Scroll
							Down</span></a>
					
					
					<div className="promo-pannel__phones">
						<p className="promo-pannel__title">Phone numbers</p><a className="promo-pannel__link"
							href="tel:+180012345678">+ 1800 - 123 456 78</a><a className="promo-pannel__link"
							href="tel:+18009756511">+ 1800 - 975 65 11</a>
					</div>
					<div className="promo-pannel__email">
						<p className="promo-pannel__title">Email</p><a className="promo-pannel__link"
							href="mailto:support@helpo.org">support@firozkunnamparambil.org</a>
					</div>
				</div>
				{/* <!-- promo pannel end--> */}
				{/* <!-- slider nav start--> */}
				<div className="slider__nav slider__nav--promo">
					<div className="promo-slider__count"></div>
					<div className="slider__arrows">
						<div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
						</div>
						<div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
						</div>
					</div>
				</div>
				{/* <!-- slider nav end--> */}
			</section>
        </div>
    )}
    export default HomePage