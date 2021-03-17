import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UiProvider } from "provider";

function App() {
  return (
    <UiProvider>
      <BrowserRouter>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            <Route
              exact
              path="/patients"
              component={lazy(() => import("pages/patients"))}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </UiProvider>
  );
}

export default App;
