import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormSignUp from "../../components/form-signup/FormSignUp";
import Home from "../home/Home";
import LoginPage from "../login/Loginpage";
export default function HomePage() {
  return (
    <CssBaseline>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<FormSignUp />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </CssBaseline>
  );
}
