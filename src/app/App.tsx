import { UiProvider } from "provider";
import { Router } from "./router";

const App = () => (
  <UiProvider>
    <Router />
  </UiProvider>
);

export { App };
