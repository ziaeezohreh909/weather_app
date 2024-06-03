import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home-page/HomePage.tsx";
import AuthContextProvider from "./components/context/AuthContext.tsx";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
    <AuthContextProvider>
      <HomePage />
    </AuthContextProvider>
    {/* </RouterProvider> */}
  </React.StrictMode>
);
