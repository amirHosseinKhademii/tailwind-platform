import { lazy } from "react";

export const route = {
  path: "/admin/patients/add",
  name: "ROUTE:ADMIN:PATIENTS:ADD",
  exact: true,
  layout: "admin",
  component: lazy(() => import(".")),
};
