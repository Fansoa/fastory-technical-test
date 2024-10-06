import { useRoutes } from "react-router-dom";
import SpywareSystemPage from "../pages/SpywareSystemPage";
import LoginPage from "../pages/LoginPage";

const Routes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <SpywareSystemPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    }
  ]);
  return routes;
};

export default Routes;