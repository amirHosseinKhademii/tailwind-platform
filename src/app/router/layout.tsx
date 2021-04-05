import { useLocation, matchPath } from "react-router-dom";
import { routes } from "./routes";
import { AdminLayout, AuthLayout } from "layouts";

const layouts = {
  admin: AdminLayout,
  auth: AuthLayout,
};

const DefaultLayout = ({ children }) => <>{children}</>;

export const Layout = ({ children }) => {
  const { pathname } = useLocation();

  const match = routes
    .map((item) => ({
      ...item,
      match: matchPath(pathname, item),
    }))
    .find((item) => !!item.match);

  const layoutName = (match || {}).layout || "";
  const LayoutComponent = layouts[layoutName] || DefaultLayout;

  return <LayoutComponent>{children}</LayoutComponent>;
};
