import React, { useState } from "react";

import slide from "../img/promo_1.jpg";
import ImageSlider from "../Components/ImageSlider";

const AboutUs = () => {
  return (
    <div class="container my-5">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="heading heading--primary">
            <span class="heading__pre-title">About Us</span>
            <h2 class="heading__title">
              <span>Help is Our</span> <span>Main Goal</span>
            </h2>
          </div>
          <p>
            <strong>
              According to the UNCRC a child means every human being below the
              age of eighteen years unless, under the law applicable to the
              child, majority is attained earlier. In India various laws related
              to children define children in different age limits.
            </strong>
          </p>
          <p>
            According to Article 21(a) of the Indian Constitution all children
            between the ages of six to fourteen should be provided with free and
            compulsory education. The child labour (Prohibition and Regulation)
            Act, 1986 defines a child as a person who has not completed fourteen
            years of age.
          </p>
          <p>
            Most of the cases were admitted to the institution by their own
            mothers owing to poverty, unrestrained habits of the father and
            strained relationship of the child with step parents.
          </p>
          <a class="button button--primary" href="about.html">
            More About
          </a>
        </div>
        <div class="col-lg-6 col-xl-5 offset-xl-1">
          <div class="info-box">
            <img
              class="img--layout"
              src={require("../img/about_layout.png").default}
              alt="img"
            />
            {/* <img
                    class="img--bg shadow"
                    style={{ borderRadius: 15 }}
                    src={
                      require("../img/personal_Images/Firoz(470x516).jpg")
                        .default
                    }
                    alt="img"
                  /> */}
            <h4 class="info-box__title text-orange">
              We are Awesome Volounteer Team
            </h4>
            <p class="text-orange">
              Gray eel-catfish longnose whiptail catfish smalleye squaretail
              queen danio unicorn fish shortnose greeneye fusilier fish silver
              carp nibbler sharksucker tench lookdown catfish
            </p>
            {/* <!-- <a class="info-box__link" href="volunteer.html">Become a volounteer</a> --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Helps = ({ titile, img }) => (
  <div class="col-6 col-lg-3">
    <div class="icon-item">
      <div class="icon-item__img">
        <img class="img--layout" src={img} alt="img" />
        <svg class="icon icon-item__icon icon--red">
          {/* <use xlink:href="#donation"></use> */}
          <img src={img} alt="" style={{ width: 150, height: 150 }} />
        </svg>
      </div>
      <div class="icon-item__text">
        <p>{titile}</p>
      </div>
    </div>
  </div>
);

const HelpsCause = () => (
  <section class="section causes">
    <img
      class="causes__bg"
      src={require("../img/causes_img.png").default}
      alt="img"
    />
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xl-5">
          <div class="heading heading--primary">
            <span class="heading__pre-title">What we Do</span>
            <h2 class="heading__title">
              <span>Help</span> <span>Causes</span>
            </h2>
            <p>
              Assessment, Counseling and Remedial centre has the most precise
              and scientific collections of standardized psychological and
              psycho- educational assessments. We have test kits suitable to
              children, adolescents and a few for adults. We have expert
              professionals, trained psychologists, counselors and remedial
              tutors to administer and interpret the various tests and provide
              detailed reports with required interventions to the clients
            </p>
          </div>
        </div>
        <div class="col-xl-6 offset-xl-1 d-none d-xl-block">
          <div class="row offset-margin">
            <div class="col-6">
              <div class="counter-item counter-item--style-3">
                <div class="counter-item__top">
                  <h6 class="counter-item__title">People We Helped on 2018</h6>
                </div>
                <div class="counter-item__lower">
                  <span class="js-counter">200</span>
                  <span>k</span>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="counter-item counter-item--style-3">
                <div class="counter-item__top">
                  <h6 class="counter-item__title">Dollars We Collected</h6>
                </div>
                <div class="counter-item__lower">
                  <span class="js-counter">65</span>
                  <span>bil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-end margin-bottom">
        <div class="col-sm-6">
          <a class="button button--primary" href="causes.html">
            More Causes
          </a>
        </div>
        <div class="col-sm-6 d-flex justify-content-sm-end">
          {/* <!-- slider nav start--> */}
          <div class="slider__nav causes-slider__nav">
            <div class="slider__arrows">
              <div class="slider__prev">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </div>
              <div class="slider__next">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          {/* <!-- slider nav end--> */}
        </div>
      </div>
    </div>
    <div class="causes-holder offset-margin">
      <div class="causes-holder__wrapper">
        <div class="causes-slider offset-margin">
          <div class="causes-slider__item">
            <div class="causes-item causes-item--primary">
              <div class="causes-item__body">
                <div class="causes-item__top">
                  <h6 class="causes-item__title">
                    <a href="cause-details.html">
                      Working Together for Resolution in Kerala
                    </a>
                  </h6>
                  <p>
                    We supports underprivileged women and children by providing
                    holistic solutions to improve their quality of life .
                  </p>
                </div>
                <div class="causes-item__img">
                  <div
                    class="causes-item__badge"
                    style={{ backgroundColor: "#49C2DF" }}
                  >
                    Water Delivery
                  </div>
                  <img
                    class="img--bg"
                    src={require("../img/causes_1.jpg").default}
                    alt="img"
                  />
                </div>
                <div class="causes-item__lower">
                  <div class="progress-bar">
                    <div class="progress-bar__inner" style={{ width: "78%" }}>
                      <div class="progress-bar__value">78%</div>
                    </div>
                  </div>
                  <div class="causes-item__details-holder">
                    <div class="causes-item__details-item">
                      <span>Goal: </span>
                      <span>25 000$</span>
                    </div>
                    <div class="causes-item__details-item text-right">
                      <span>Pledged:</span>
                      <span>20 350$</span>
                    </div>
                  </div>
                </div>
              </div>
              <a class="button causes-item__button button--primary" href="#">
                + Donate
              </a>
            </div>
          </div>

          <div class="causes-slider__item">
            <div class="causes-item causes-item--primary">
              <div class="causes-item__body">
                <div class="causes-item__top">
                  <h6 class="causes-item__title">
                    <a href="cause-details.html">We Build and Create</a>
                  </h6>
                  <p>
                    Compassion survival focuses on promoting development and
                    survival of the most vulnerable bables,While also providing
                    educaton and support
                  </p>
                </div>
                <div class="causes-item__img">
                  <div
                    class="causes-item__badge"
                    style={{ backgroundColor: "#2EC774" }}
                  >
                    Education
                  </div>
                  <img
                    class="img--bg"
                    src={require("../img/causes_3.jpg").default}
                    alt="img"
                  />
                </div>
                <div class="causes-item__lower">
                  <div class="progress-bar">
                    <div class="progress-bar__inner" style={{ width: "51%" }}>
                      <div class="progress-bar__value">51%</div>
                    </div>
                  </div>
                  <div class="causes-item__details-holder">
                    <div class="causes-item__details-item">
                      <span>Goal: </span>
                      <span>150 000$</span>
                    </div>
                    <div class="causes-item__details-item text-right">
                      <span>Pledged:</span>
                      <span>76 500$</span>
                    </div>
                  </div>
                </div>
              </div>
              <a class="button causes-item__button button--primary" href="#">
                + Donate
              </a>
            </div>
          </div>
          <div class="causes-slider__item">
            <div class="causes-item causes-item--primary">
              <div class="causes-item__body">
                <div class="causes-item__top">
                  <h6 class="causes-item__title">
                    <a href="cause-details.html">Child Sponsership</a>
                  </h6>
                  <p>
                    In a world where hundreds of millions of children live in
                    extreme poverty, connectig one child with one sponsor is the
                    most strategic way to end--child poverty
                  </p>
                </div>
                <div class="causes-item__img">
                  <div
                    class="causes-item__badge"
                    style={{ backgroundColor: "#F8AC3A" }}
                  >
                    Food
                  </div>
                  <img
                    class="img--bg"
                    src={require("../img/causes_4.jpg").default}
                    alt="img"
                  />
                </div>
                <div class="causes-item__lower">
                  <div class="progress-bar">
                    <div class="progress-bar__inner" style={{ width: "50%" }}>
                      <div class="progress-bar__value">50%</div>
                    </div>
                  </div>
                  <div class="causes-item__details-holder">
                    <div class="causes-item__details-item">
                      <span>Goal: </span>
                      <span>50 000$</span>
                    </div>
                    <div class="causes-item__details-item text-right">
                      <span>Pledged:</span>
                      <span>25 000$</span>
                    </div>
                  </div>
                </div>
              </div>
              <a class="button causes-item__button button--primary" href="#">
                + Donate
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section class="section projects no-padding-top no-padding-bottom">
    <div class="container">
      <div class="row align-items-end margin-bottom">
        <div class="col-lg-9">
          <div class="heading heading--primary">
            <span class="heading__pre-title">What we Did</span>
            <h2 class="heading__title">
              <span>Firoz kunnamparambil Foundation</span> <span>Projects</span>
            </h2>
            <p class="no-margin-bottom">
              This foundation aims to redeﬁne what is possible for children from
              low-income communities to achieve through its network of
              high-performing public-private partnership schools.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row no-gutters projects-masonry">
      <div class="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-1 projects-masonry__item--vertical">
        <div class="projects-masonry__img">
          <img
            class="img--bg"
            src={require("../img/projects_1.jpg").default}
            alt="img"
          />
        </div>
        <div
          class="projects-masonry__text"
          style={{ backgroundColor: "#2EC774" }}
        >
          <div class="projects-masonry__inner">
            <span
              class="projects-masonry__badge"
              style={{ background: "#49C2DF" }}
            >
              Water Delivery
            </span>
            <h3 class="projects-masonry__title">
              <a href="cause-details.html">More than One Life Changed</a>
            </h3>
            <p>
              Firoz Charity is a registered NGO working in the field of
              socio-economic and educational development in order to uplift
              downtrodden people of Karnataka and other part of the country,
              with this headquarters in Bangalore for over 14 years
            </p>
            <div class="projects-masonry__details-holder">
              <div class="projects-masonry__details-item">
                <span>Goal: </span>
                <span>25 000$</span>
              </div>
              <div class="projects-masonry__details-item">
                <span>Date: </span>
                <span>23 Jan'19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--horizontal">
        <div class="projects-masonry__img">
          <img
            class="img--bg"
            src={require("../img/projects_2.jpg").default}
            alt="img"
          />
        </div>
        <div
          class="projects-masonry__text"
          style={{ backgroundColor: "#9BC35E" }}
        >
          <div class="projects-masonry__inner">
            <span
              class="projects-masonry__badge"
              style={{ background: "#F36F8F" }}
            >
              Medicine
            </span>
            <h3 class="projects-masonry__title">
              <a href="cause-details.html">
                Firoz Kunnamparambil Foundation for Help
              </a>
            </h3>
            <p>
              started as early as 1999 under the chief eminent of Kerala with
              the vision purely to address the problems faced by the
              down-trodden, particularly women and children, who are totally
              neglected by the society
            </p>
            <div class="projects-masonry__details-holder">
              <div class="projects-masonry__details-item">
                <span>Goal: </span>
                <span>25 000$</span>
              </div>
              <div class="projects-masonry__details-item">
                <span>Date: </span>
                <span>23 Jan'19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-1 projects-masonry__item--primary">
        <div class="projects-masonry__img">
          <img
            class="img--bg"
            src={require("../img/projects_3.jpg").default}
            alt="img"
          />
          <div class="projects-masonry__inner">
            <span
              class="projects-masonry__badge"
              style={{ background: "#F8AC3A" }}
            >
              Food
            </span>
            <h3 class="projects-masonry__title">
              <a href="cause-details.html">Help for Children of the East</a>
            </h3>
            <p>
              To enable people to take responsibility for the situation of the
              deprived Indian child and so motivate them to seek resolution
              through individual and collective
            </p>
            <div class="projects-masonry__details-holder">
              <div class="projects-masonry__details-item">
                <span>Goal: </span>
                <span>25 000$</span>
              </div>
              <div class="projects-masonry__details-item">
                <span>Date: </span>
                <span>23 Jan'19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--primary">
        <div class="projects-masonry__img">
          <img
            class="img--bg"
            src={require("../img/projects_4.jpg").default}
            alt="img"
          />
          <div class="projects-masonry__inner">
            <span
              class="projects-masonry__badge"
              style={{ background: "#2EC774" }}
            >
              Education
            </span>
            <h3 class="projects-masonry__title">
              <a href="cause-details.html">Help for Children of the East</a>
            </h3>
            <p>
              The organization is mainly dedicated towards uplifment of rural
              community and towards their education, empowerment of women,
              health and hygiene{" "}
            </p>
            <div class="projects-masonry__details-holder">
              <div class="projects-masonry__details-item">
                <span>Goal: </span>
                <span>25 000$</span>
              </div>
              <div class="projects-masonry__details-item">
                <span>Date: </span>
                <span>23 Jan'19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--horizontal">
        <div class="projects-masonry__img">
          <img
            class="img--bg"
            src={require("../img/projects_5.jpg").default}
            alt="img"
          />
        </div>
        <div
          class="projects-masonry__text"
          style={{ backgroundColor: "#E78F51" }}
        >
          <div class="projects-masonry__inner">
            <span
              class="projects-masonry__badge"
              style={{ background: "#2EC774" }}
            >
              Education
            </span>
            <h3 class="projects-masonry__title">
              <a href="cause-details.html">Help for Children of the East</a>
            </h3>
            <p>
              The organization is mainly dedicated towards uplifment of rural
              community and towards their education, empowerment of women,
              health and hygiene
            </p>
            <div class="projects-masonry__details-holder">
              <div class="projects-masonry__details-item">
                <span>Goal: </span>
                <span>25 000$</span>
              </div>
              <div class="projects-masonry__details-item">
                <span>Date: </span>
                <span>23 Jan'19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--primary">
        <div class="projects-masonry__img">
          <img
            class="img--bg"
            src={require("../img/projects_6.jpg").default}
            alt="img"
          />
          <div class="projects-masonry__inner">
            <span
              class="projects-masonry__badge"
              style={{ background: "#F36F8F" }}
            >
              Medicine
            </span>
            <h3 class="projects-masonry__title">
              <a href="cause-details.html">
                Firoz Kunnamparambil Foundation for Help
              </a>
            </h3>
            <p>
              Firoz Charities also works for the betterment and welfare of
              challenged community senior citizens, destitute widows, child
              labor by supporting
            </p>
            <div class="projects-masonry__details-holder">
              <div class="projects-masonry__details-item">
                <span>Goal: </span>
                <span>25 000$</span>
              </div>
              <div class="projects-masonry__details-item">
                <span>Date: </span>
                <span>23 Jan'19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Donors = () => (
  <section class="section donors ">
    <div class="container">
      <div class="row margin-bottom">
        <div class="col-12">
          <div class="heading heading--primary heading--center">
            <span class="heading__pre-title">Donors</span>
            <h2 class="heading__title no-margin-bottom">
              <span>Who Help</span> <span>Us</span>
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          {/* <!-- donors slider start--> */}
          <div class="slider-holder">
            <div class="donors-slider donors-slider--style-1">
              <div class="donors-slider__item">
                <div class="donors-slider__img">
                  <img
                    src={require("../img/donor_1.png").default}
                    alt="donor"
                  />
                </div>
              </div>
              <div class="donors-slider__item">
                <div class="donors-slider__img">
                  <img
                    src={require("../img/donor_2.png").default}
                    alt="donor"
                  />
                </div>
              </div>
              <div class="donors-slider__item">
                <div class="donors-slider__img">
                  <img
                    src={require("../img/donor_3.png").default}
                    alt="donor"
                  />
                </div>
              </div>
              <div class="donors-slider__item">
                <div class="donors-slider__img">
                  <img
                    src={require("../img/donor_4.png").default}
                    alt="donor"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- donors slider end--> */}
        </div>
      </div>
    </div>
  </section>
);

const HomePage = () => {
  const [mainCategory, setMainCategory] = useState([
    {
      name: "Build Home",
      description: "",
      img: require("../img/siteIcons/house.png").default,
    },
    {
      name: "For marriage",
      description: "",
      img: require("../img/siteIcons/family.png").default,
    },
    {
      name: "For Education",
      description: "",
      img: require("../img/siteIcons/education.png").default,
    },
    {
      name: "For Treatment",
      description: "",
      img: require("../img/siteIcons/solidarity.png").default,
    },
  ]);

  const [applications, setApplications] = useState([
    {
      titile: "Application Request",
      desciption: "",
      link: "/request",
      img: require("../img/siteIcons/computer.png").default,
    },
    {
      titile: "Application Search",
      desciption: "",
      link: "/search",
      img: require("../img/siteIcons/feature.png").default,
    },
    {
      titile: "Our Donations",
      desciption: "",
      link: "",
      img: require("../img/siteIcons/resume.png").default,
    },
  ]);

  return (
    <div class="page-wrapper ">
      {/* aside dropdown start */}
      <div className="aside-dropdown">
        <div class="aside-dropdown__inner">
          <div class="aside-dropdown__item d-lg-none d-block ">
            <a class="aside-menu__link" href="#">
              <span>Home</span>
            </a>
            <ul class="aside-menu">
              <li class="aside-menu__item aside-menu__item--has-child aside-menu__item--active"></li>
              <li class="aside-menu__item aside-menu__item--has-child">
                <a class="aside-menu__link" href="javascript:void(0);">
                  <span>Pages</span>
                </a>
                {/* <!-- sub menu start--> */}
                <ul class="aside-menu__sub-list">
                  <li>
                    <a href="about.html">
                      <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="typography.html">
                      <span>Typography</span>
                    </a>
                  </li>
                  <li>
                    <a href="donors.html">
                      <span>Donors & Partners</span>
                    </a>
                  </li>
                  <li>
                    <a href="volunteer.html">
                      <span>Become a Volunteer</span>
                    </a>
                  </li>
                  <li>
                    <a href="events.html">
                      <span>Events</span>
                    </a>
                  </li>
                  <li>
                    <a href="event-details.html">
                      <span>Event Details</span>
                    </a>
                  </li>
                  <li>
                    <a href="stories.html">
                      <span>Stories</span>
                    </a>
                  </li>
                  <li>
                    <a href="story-details.html">
                      <span>Story Details</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog.html">
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="blog-post.html">
                      <span>Blog Post</span>
                    </a>
                  </li>
                  <li>
                    <a href="gallery.html">
                      <span>Gallery</span>
                    </a>
                  </li>
                  <li>
                    <a href="pricing.html">
                      <span>Pricing Plans</span>
                    </a>
                  </li>
                  <li>
                    <a href="faq.html">
                      <span>FAQ</span>
                    </a>
                  </li>
                  <li>
                    <a href="404.html">
                      <span>404 Page</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="aside-menu__item aside-menu__item--has-child">
                <a class="aside-menu__link" href="javascript:void(0);">
                  <span>Causes</span>
                </a>
                {/* <!-- sub menu start--> */}
                <ul class="aside-menu__sub-list">
                  <li>
                    <a href="causes.html">
                      <span>Causes 1</span>
                    </a>
                  </li>
                  <li>
                    <a href="causes_2.html">
                      {" "}
                      <span>Causes 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="causes_3.html">
                      <span>Causes 3</span>
                    </a>
                  </li>
                  <li>
                    <a href="cause-details.html">
                      <span>Cause Details</span>
                    </a>
                  </li>
                </ul>
                {/* <!-- sub menu end--> */}
              </li>
              <li class="aside-menu__item aside-menu__item--has-child">
                <a class="aside-menu__link" href="javascript:void(0);">
                  <span>Shop</span>
                </a>
                {/* <!-- sub menu start--> */}
                <ul class="aside-menu__sub-list">
                  <li>
                    <a href="shop.html">
                      <span>Catalog Page</span>
                    </a>
                  </li>
                  <li>
                    <a href="shop-product.html">
                      <span>Shop Product</span>
                    </a>
                  </li>
                  <li>
                    <a href="shop-cart.html">
                      <span>Shop Cart</span>
                    </a>
                  </li>
                  <li>
                    <a href="shop-checkout.html">
                      <span>Shop Checkout</span>
                    </a>
                  </li>
                  <li>
                    <a href="shop-account.html">
                      <span>Shop Account</span>
                    </a>
                  </li>
                </ul>
                {/* <!-- sub menu end--> */}
              </li>
              <li class="aside-menu__item">
                <a class="aside-menu__link" href="contacts.html">
                  <span>Contacts</span>
                </a>
              </li>
              <li class="aside-menu__item aside-menu__item--has-child">
                <a class="aside-menu__link" href="javascript:void(0);">
                  <span>Elements</span>
                </a>
                {/* <!-- sub menu start--> */}
                <ul class="aside-menu__sub-list">
                  <li>
                    <a href="alerts.html">
                      <span>Alerts</span>
                    </a>
                  </li>
                  <li>
                    <a href="team.html">
                      <span>Team</span>
                    </a>
                  </li>
                  <li>
                    <a href="testimonials.html">
                      <span>Testimonials</span>
                    </a>
                  </li>
                  <li>
                    <a href="accordion.html">
                      <span>Accordion</span>
                    </a>
                  </li>
                  <li>
                    <a href="tabs.html">
                      <span>Tabs</span>
                    </a>
                  </li>
                  <li>
                    <a href="pricing-plan.html">
                      <span>Pricing Plan</span>
                    </a>
                  </li>
                  <li>
                    <a href="counters.html">
                      <span>Counters</span>
                    </a>
                  </li>
                  <li>
                    <a href="icons.html">
                      <span>Icons</span>
                    </a>
                  </li>
                </ul>
                {/* <!-- sub menu end--> */}
              </li>
            </ul>
          </div>
          <div class="aside-dropdown__item">
            {/* <!-- aside menu start--> */}
            <ul class="aside-menu">
              <li class="aside-menu__item">
                <a class="aside-menu__link" href="#">
                  Documents
                </a>
              </li>
              <li class="aside-menu__item">
                <a class="aside-menu__link" href="#">
                  Information
                </a>
              </li>
              <li class="aside-menu__item">
                <a class="aside-menu__link" href="#">
                  Additional Pages
                </a>
              </li>
              <li class="aside-menu__item">
                <a class="aside-menu__link" href="#">
                  Elements
                </a>
              </li>
              <li class="aside-menu__item">
                <a class="aside-menu__link" href="#">
                  Contacts
                </a>
              </li>
            </ul>
            {/* <!-- aside menu end--> */}
            <div class="aside-inner">
              <span class="aside-inner__title">Email</span>
              <a class="aside-inner__link" href="mailto:support@helpo.org">
                support@firozkunnamparambil.org
              </a>
            </div>
            <div class="aside-inner">
              <span class="aside-inner__title">Phone numbers</span>
              <a class="aside-inner__link" href="tel:+180012345678">
                + 1800 - 123 456 78
              </a>
              <a class="aside-inner__link" href="tel:+18009756511">
                + 1800 - 975 65 11
              </a>
            </div>
            <ul class="aside-socials">
              <li class="aside-socials__item">
                <a class="aside-socials__link" href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li class="aside-socials__item">
                <a class="aside-socials__link" href="#">
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </li>
              <li class="aside-socials__item">
                <a
                  class="aside-socials__link aside-socials__link--active"
                  href="#"
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li class="aside-socials__item">
                <a class="aside-socials__link" href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- aside dropdown end--> */}
      <main class="main">
        <div className="">
          {/* slider start */}
          <div>
            <ImageSlider />
          </div>
          {/* slider End */}

          {/* About Us Start */}
          <AboutUs />
          {/* About Us End */}

          {/* main Categories  */}

          <section class="section icons-section container my-5">
            <div class="container">
              <div class="row margin-bottom">
                <div class="col-12">
                  <div class="heading heading--center">
                    <span class="heading__pre-title">Services</span>
                    <h2 class="heading__title">
                      <span>What we do</span> <span>for all people</span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* section for what we do */}
              <div class="row ">
                {mainCategory.length
                  ? mainCategory.map((items, index) => (
                      <Helps titile={items.name} img={items.img} key={index} />
                    ))
                  : null}
              </div>
            </div>
          </section>
          {/* main Categories End */}

          {/* Application Area */}
          <section className="container my-5">
            <div class="heading heading--center">
              <span class="heading__pre-title">Online Services</span>
              <h2 class="heading__title">
                <span>Need Our Services</span> <span>Apply Now</span>
              </h2>
            </div>
            <section className="row d-flex justify-content-around my-5">
              {applications.length
                ? applications.map((apps, index) => (
                    <div
                      key={index}
                      class="card border-0"
                      style={{ width: "18rem" }}
                    >
                      <div className="d-flex justify-content-center my-5">
                        <img
                          src={apps.img}
                          style={{ height: 80, width: 80 }}
                          alt=""
                        />
                      </div>
                      <div class="card-body">
                        <h5 class="card-title text-center">{apps.titile}</h5>
                        <p class="card-text text-center">{apps.description}</p>
                        <div className="d-flex justify-content-center my-5">
                          <a
                            href="#"
                            class="btn btn-primary btn-small"
                            style={{ fontSize: 13, minWidth: 130 }}
                          >
                            {apps.titile}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </section>
          </section>
          {/* Application Area End */}

          {/* help causes */}
          <div>
            <HelpsCause />
          </div>
          {/* help causes End */}

          {/* Projects */}
          <Projects />
          {/* Projects End */}

          {/* Donors */}
          <Donors />
          {/* Donors End */}
        </div>
      </main>
    </div>
  );
};
export default HomePage;
