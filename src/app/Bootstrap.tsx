import { UiProvider } from "provider";
import { Router } from "./router";

const Bootstrap = () => (
  <UiProvider>
    <Router />
  </UiProvider>
);

export { Bootstrap };
