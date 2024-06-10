import { Box } from "@mui/material";
import NewUser from "../new-user/NewUser";
import { useEffect, useState } from "react";
import FormSignUp from "../form-signup/FormSignUp";
import FormSignin from "../form-signin/FormSignin";
import { useSearchParams } from "react-router-dom";

export default function Login() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialMode = searchParams.get("mode");

  const [showOnRight, setShowOnRight] = useState<boolean>(
    initialMode !== "signin"
  );

  useEffect(() => {
    setSearchParams({ mode: showOnRight ? "signup" : "signin" });
  }, [showOnRight, setSearchParams]);

  const handleToggle = () => {
    setShowOnRight(!showOnRight);
  };
  console.log(showOnRight);

  return (
    <Box sx={{ position: "relative", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: !showOnRight ? "flex-end" : "flex-start",
          alignItems: "center",
          height: "100%",
          px: 4,
        }}
      >
        <Box> {showOnRight ? <FormSignUp /> : <FormSignin />}</Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          top: 0,
          right: showOnRight ? 0 : "auto",
          left: showOnRight ? "auto" : 0,
        }}
      >
        <NewUser
          buttonName={showOnRight ? "Sign in" : "Sign up"}
          headerName={showOnRight ? "One of us?" : "New here?"}
          onClick={handleToggle}
        />
      </Box>
    </Box>
  );
}
