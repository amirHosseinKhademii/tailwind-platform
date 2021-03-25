import { lazy } from "react";

export const routes = {
  path: "/admin/patients/add",
  name: "ROUTE:ADMIN:PATIENTS:ADD",
  exact: true,
  layout: "admin",
  component: lazy(() => import("./view")),
};
