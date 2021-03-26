import { UiProvider } from "provider";
import { Router } from "./router";

const Boot = () => (
  <UiProvider>
    <Router />
  </UiProvider>
);

export { Boot };
