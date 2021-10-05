import FooterComponet from "./Components/FooterComponent";
import HeaderComponnet from "./Components/HeaderComponent";
import ApplicationListPage from "./Pages/ApplicationListPage";
import ApplicationSearchPage from "./Pages/ApplicationSearchPage";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";
import VideoDocListPage from "./Pages/VideoDocListPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

const WrapperComponent = (props) => {
  const location = useLocation();
  console.log("location", location);
  return (
    <div className="">
      <header className="w-100" style={{ minHeight: 10 }}>
        <HeaderComponnet />
      </header>

      <main className="mb-5" style={{ marginTop: "4.6em" }}>
        {props.children}
      </main>

      {location.pathname !== "/search" && location.pathname !== "/donations" && (
        <footer
          className="w-100"
          style={{ minHeight: 300, position: "relative" }}
        >
          <FooterComponet />
        </footer>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="Container-fluid">
      <Router>
        <WrapperComponent>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route path="/request">
              <ApplicationListPage />
            </Route>

            <Route path="/donations">
              <VideoDocListPage />
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
    </div>
  );
}

export default App;
