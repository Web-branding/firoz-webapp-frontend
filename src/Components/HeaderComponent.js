import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo_white.png";
const HeaderComponet = () => {
  return (
    <div>
      <header
        className="header header--front"
        style={{ "background-color": "aliceblue" }}
      >
        <div className="container-fluid">
          <div className="row no-gutters justify-content-between">
            <div className="col-auto d-flex align-items-center">
              {/* <div className="dropdown-trigger d-none d-sm-block">
                <div className="dropdown-trigger__item"></div>
              </div> */}
              <div className="header-logo pl-5">
                <a className="header-logo__link" href="index.html">
                  <img
                    className="header-logo__img logo--light"
                    src={Logo}
                    alt="logo"
                  />
                </a>
              </div>
            </div>
            <div className="col-auto">
              {/* <!-- main menu start--> */}
              <nav fixed-bottom>
                <ul className="main-menu">
                  <li className="main-menu__item main-menu__item--has-child main-menu__item--active">
                    <Link to="/" className="main-menu__link">
                      <span>Home</span>
                    </Link>

                    {/* <!-- sub menu end--> */}
                  </li>

                  <li className="main-menu__item main-menu__item--has-child">
                    <a className="main-menu__link" href="javascript:void(0);">
                      <span>Application</span>
                    </a>
                    {/* <!-- sub menu start--> */}
                    <ul className="main-menu__sub-list">
                      <li>
                        <Link to="/request">Request Application</Link>
                      </li>
                      <li>
                        <Link to="/search">
                          <span>Search Application</span>
                        </Link>
                      </li>
                    </ul>
                    {/* <!-- sub menu end--> */}
                  </li>

                  <li className="main-menu__item">
                    <Link to="/aboutus" className="main-menu__link">
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li className="main-menu__item">
                    <Link className="main-menu__link" to="/contactus">
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* <!-- main menu end--> */}
            </div>
            <div className="col-auto d-flex align-items-center">
              {/* <!-- lang select start-->
						
						<!-- lang select end--> */}
              <div className="dropdown-trigger d-block d-sm-none">
                <div className="dropdown-trigger__item"></div>
              </div>
              <a className="button button--squared" href="#">
                <span>Donate</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponet;
