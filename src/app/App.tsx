import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "store";
import { theme } from "theme";
import { Drawer, Test } from "components";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Drawer />
        <Test />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
