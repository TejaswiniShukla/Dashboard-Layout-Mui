import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard from "../views/dashboard";
import Customer from "../views/customer";
import Teams from "../views/teams";
import Layout from "../views/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },

    // children: [
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
      {
        path: "/team",
        element: <Teams />,
      },
    // ],
  {
    path: "/login",
    element: <h1>login Page</h1>,
  }
]);
