import { lazy } from "react";

export const route = {
  path: "/admin/patients",
  name: "ROUTE:ADMIN:PATIENTS",
  exact: true,
  layout: "admin",
  component: lazy(() => import(".")),
};
