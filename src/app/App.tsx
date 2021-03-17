import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Drawer } from "components";

function App() {
  return (
    <BrowserRouter>
      <Drawer />
      <Suspense fallback={<div>Loading ...</div>}>
        <Switch>
          <Route exact path="/" component={() => <div>test</div>} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
