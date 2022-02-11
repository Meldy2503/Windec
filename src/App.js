import { Fragment } from "react";
import { GlobalStyle } from "./components/reusableComponents/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter  as Router } from "react-router-dom";
import NavBar from "./components/navBar/index";
import LandingPage from "./components/homePage/landingPage/index";
import HowWeWork from "./components/homePage/howWeWork/index";
import ViewOurProjects from "./components/homePage/viewOurProjects/index";
import Features from "./components/homePage/features/index";
import Reviews from "./components/homePage/reviews";
import FAQ from "./components/homePage/FAQ";



const theme = {
  colors: {
    primary1 : "#282938",
    primary2 : "#1C1E53",
    primary3 : "#2405F2",
    primary4 : "#EEF4FA",
    primary5 : "#F4F6FC",
    primary6 : "#5239FA",
    secondary1 : "#FCD980",
    secondary2 : "#FDE4A6",
    tertiary1 : "#535460",
    tertiary2 : "#d0d0d0"

  },

  mediaQuery : {
    smobile : '401px',
    mobile : '768px',
    tablet : '960px',
  } 
}


function App() {
  return (
    <Router>
    <ThemeProvider theme={ theme }>
        <Fragment>
           <GlobalStyle/>
           < NavBar />
           <LandingPage />
           <HowWeWork />
           <ViewOurProjects />
           <Features />
           <Reviews />
           <FAQ />
        </Fragment>
    </ThemeProvider>
    </Router>
   
    
  );
}

export default App;
