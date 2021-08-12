import FooterComponet from "./Components/FooterComponent";
import HeaderComponnet from "./Components/HeaderComponent";
import ApplicationListPage from "./Pages/ApplicationListPage";
import ApplicationSearchPage from "./Pages/ApplicationSearchPage"
import HomePage from "./Pages/HomePage"

const WrapperComponent = (props) => {
  return (
    <div>
      <HeaderComponnet />
      {props.children}
      <FooterComponet />

    </div>
  )
}

function App() {
  return (
    <div className="Container-fluid">
      <WrapperComponent>
      
            <h2><ApplicationListPage/></h2>
      
      </WrapperComponent>

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
