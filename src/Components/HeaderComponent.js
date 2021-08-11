import React from "react" 

const HeaderComponet = () => {
    return(
        <div>
           
           <header className="header header--front">
            <div className="container-fluid">
                <div className="row no-gutters justify-content-between">
                    <div className="col-auto d-flex align-items-center">
                        <div className="dropdown-trigger d-none d-sm-block">
                            <div className="dropdown-trigger__item"></div>
                        </div>
                        <div className="header-logo">
                            <a className="header-logo__link" href="index.html">
                                <img className="header-logo__img logo--light" src="img/logo_white.png" alt="logo" />
                                <img className="header-logo__img logo--dark" src="img/logo_white.png" alt="logo" />
                            </a>
                        </div>
                    </div>
                    <div className="col-auto">
                        {/* <!-- main menu start--> */}
                        <nav>
                            <ul className="main-menu flex-row">
                                <li className="main-menu__item main-menu__item--has-child main-menu__item--active"><a
                                        className="main-menu__link" href="javascript:void(0);"><span>Home</span></a>
                                   
                                </li>
                               
                                <li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link"
                                        href="javascript:void(0);"><span>Application</span></a>
                                    {/* <!-- sub menu start--> */}
                                    <ul className="main-menu__sub-list">
                                        <li><a href="./application_form.html"><span>Request Application</span></a></li>
                                        <li><a href="./application_search.html"> <span>Search Application</span></a></li>
                                      
                                    </ul>
                                    {/* <!-- sub menu end--> */}
                                </li>
                               
                                <li className="main-menu__item"><a className="main-menu__link" href="about.html"><span>About
                                            Us</span></a></li>
                                <li className="main-menu__item"><a className="main-menu__link"
                                        href="contacts.html"><span>Contacts</span></a></li>
                                
                            </ul>
                        </nav>
                        {/* <!-- main menu end--> */}
                    </div>
                    <div className="col-auto d-flex align-items-center">
                       
                        <div className="dropdown-trigger d-block d-sm-none">
                            <div className="dropdown-trigger__item"></div>
                        </div><a className="button button--squared" href="#"><span>Donate</span></a>
                    </div>
                </div>
            </div>
        </header>
        
          
        </div>
    )
}


export default HeaderComponet