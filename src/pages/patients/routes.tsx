import { lazy } from "react";

export const routes = {
  path: "/admin/patients",
  name: "ROUTE:ADMIN:PATIENTS",
  exact: true,
  layout: "admin",
  component: lazy(() => import("./view")),
};
