import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/Home";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import BagPage from "../pages/BagPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/bag",
        element: <BagPage />,
      },
    ],
  },
]);

export default routes;
