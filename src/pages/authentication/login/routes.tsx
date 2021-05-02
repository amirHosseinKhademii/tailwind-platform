import { lazy } from "react";

export const route = {
  path: "/login",
  name: "ROUTE:LOGIN",
  exact: true,
  layout: "admin",
  component: lazy(() => import(".")),
};
