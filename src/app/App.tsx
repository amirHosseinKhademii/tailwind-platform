import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "store";
import { theme } from "theme";
import { CategoryDrawer } from "containers";
import { Loading } from "components";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <CategoryDrawer />
          <Suspense fallback={<Loading>Loading ...</Loading>}>
            <Switch>
              <Route
                exact
                path="/cats/:id"
                component={lazy(() => import("pages/cats"))}
              />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
