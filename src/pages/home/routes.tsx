import { lazy } from "react";

export const routes = {
  path: "/",
  name: "ROUTE:HOME",
  exact: true,
  layout: "admin",
  component: lazy(() => import("./view")),
};
