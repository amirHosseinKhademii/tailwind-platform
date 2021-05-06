import { lazy } from "react";

export const route = {
  path: "/forgot-password",
  name: "ROUTE:FORGOT_PASSWORD",
  exact: true,
  layout: "admin",
  component: lazy(() => import(".")),
};
