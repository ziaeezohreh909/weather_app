import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home-page/HomePage.tsx";
import AuthContextProvider from "./components/context/AuthContext.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <HomePage />
    </AuthContextProvider>
  </React.StrictMode>
);
