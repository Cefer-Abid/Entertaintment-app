import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogeIn from "./pages/LogeIn";
import SignUp from "./pages/SignUp";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <LogeIn />,
  // },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    // path: "/main-page",
    path: "/",
    element: <MainPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
