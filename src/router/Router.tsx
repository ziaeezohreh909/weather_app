import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import ErrorPage from "../pages/error-page/ErrorPage";
import SignUp from "../pages/signup/SignUp";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
