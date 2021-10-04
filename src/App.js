import FooterComponet from "./Components/FooterComponent";
import HeaderComponnet from "./Components/HeaderComponent";
import ApplicationListPage from "./Pages/ApplicationListPage";
import ApplicationSearchPage from "./Pages/ApplicationSearchPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return <div>00002</div>;
};

const WrapperComponent = (props) => {
  return (
    <div className="">
      <header className="w-100" style={{ minHeight: 10 }}>
        <HeaderComponnet />
      </header>

      <main className="mb-5">{props.children}</main>

      {/* <footer
        className="w-100"
        style={{ minHeight: 300, position: "relative" }}
      >
        <FooterComponet />
      </footer> */}
    </div>
  );
};

function App() {
  return (
    <div className="Container-fluid">
      <Router>
        <WrapperComponent>
          {/* <HomePage/> */}
          {/* <ApplicationListPage /> */}
          {/* <ApplicationSearchPage /> */}

          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/request">
              <ApplicationListPage />
            </Route>

            <Route path="/search">
              <ApplicationSearchPage />
            </Route>

            <Route path="/aboutus">
              <AboutUsPage />
            </Route>

            <Route path="/contactus">
              <ContactUsPage />
            </Route>
          </Switch>
        </WrapperComponent>
      </Router>

      {/* 
      ProjectContainer will contain header and footer
    */}
      {/* Basic Structure */}
      {/* <ProjectContainer>
        <HomePage />
        <Page2 />
        <Page3 />
        <Page4 />
      </ProjectContainer> */}
    </div>
  );
}

export default App;
