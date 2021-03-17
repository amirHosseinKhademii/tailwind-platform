import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dashboard } from "containers";

function App() {
  return (
    <BrowserRouter>
      <Dashboard />
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route exact path="/" component={() => <div>test</div>} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
