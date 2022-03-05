import { Fragment, useEffect } from "react";
import { GlobalStyle } from "./components/reusableComponents/GlobalStyles";
import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar/index";
import Footer from "./components/footer/index";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./pages/scrollToTop";

const theme = {
  colors: {
    primary1: "#282938",
    primary2: "#1C1E53",
    primary3: "#2405F2",
    primary4: "#EEF4FA",
    primary5: "#F4F6FC",
    primary6: "#5239FA",
    secondary1: "#FCD980",
    secondary2: "#FDE4A6",
    tertiary1: "#535460",
    tertiary2: "#d0d0d0",
  },

  mediaQuery: {
    smobile: "401px",
    mobile: "768px",
    tablet: "960px",
  },
};

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyle />
            <NavBar />
            <Routes>
              <Route path="/*" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
            <Footer />
          </Fragment>
        </ThemeProvider>
      </ScrollToTop>
    </Router>
  );
}

export default App;
