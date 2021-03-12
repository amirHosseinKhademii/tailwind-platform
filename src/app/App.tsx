import { Drawer } from "components";
import { Test } from "components/Test";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    crims: "#660707",
  },
  screens: {
    sm: `only screen and (max-width:640px)`,
    md: `only screen and (max-width:768px)`,
    lg: `only screen and (max-width:1024px)`,
    xl: `only screen and (max-width:1280px)`,
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Drawer /> */}
      <Test />
    </ThemeProvider>
  );
}

export default App;
