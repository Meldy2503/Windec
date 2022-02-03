import { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";


const theme = {
  colors: {
    primary1 : "#282938",
    primary2 : "#1C1E53",
    primary3 : "#2405F2",
    primary4 : "#EEF4FA",
    secondary1 : "#FCD980",
    tetiary1 : "#F4F6FC",
  },

  mediaQuery : {
    mobile : '768px',
    tablet : '960px',
  } 
}


function App() {
  return (
    <ThemeProvider theme={ theme }>
        <Fragment>
           <GlobalStyle/>
           <h1>hello world</h1>
        </Fragment>
    </ThemeProvider>
   
    
  );
}

export default App;
