import { Fragment } from "react";
import { GlobalStyle } from "./components/reusableComponents/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/index";
import Footer from "./components/footer/index";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";



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
           <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
           </Routes>
           <Footer />
        </Fragment>
    </ThemeProvider>
    </Router>
   
    
  );
}

export default App;
