import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "provider";
import { Drawer } from "components";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Drawer />
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route exact path="/" component={() => <div>test</div>} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
