import { useRoutes } from "react-router-dom";
import SpywareSystemPage from "../pages/SpywareSystemPage";
import LoginPage from "../pages/LoginPage";
import RouteGuard from "../components/RouteGuard";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <RouteGuard>
        <SpywareSystemPage />,
      </RouteGuard>
    },
    {
      path: "/login",
      element: <LoginPage />,
    }
  ]);
  return routes;
};

export default Routes;