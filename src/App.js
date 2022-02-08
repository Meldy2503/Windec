import { Fragment } from "react";
import { GlobalStyle } from "./components/reusableComponents/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter  as Router } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import LandingPage from "./components/HomePage/LandingPage/index";
import Section1 from "./components/HomePage/Section_1/index";
import Section2 from "./components/HomePage/Section_2/index";



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
           <Navbar />
           <LandingPage />
           <Section1 />
           <Section2 />
        </Fragment>
    </ThemeProvider>
    </Router>
   
    
  );
}

export default App;
