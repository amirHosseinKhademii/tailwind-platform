import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "store";
import { theme } from "theme";
import { CategoryDrawer } from "containers";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CategoryDrawer />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
