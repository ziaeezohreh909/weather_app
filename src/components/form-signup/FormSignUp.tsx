import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FormSignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [showButtonSuccess, setShowButtonSuccess] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [errorValues, setErrorValues] = useState({
    usernameError: false,
    emailError: false,
    passwordError: false,
  });

  const validate = () => {
    let usernameError = formData.username.trim() === "";
    let emailError =
      formData.email.trim() === "" || !/\S+@\S+\.\S+/.test(formData.email);
    let passwordError = formData.password.trim() === "";

    setErrorValues({
      usernameError,
      emailError,
      passwordError,
    });

    return !(usernameError || emailError || passwordError);
  };

  useEffect(() => {
    if (hasSubmitted) {
      validate();
    }
  }, [formData]);

  const handelChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelSubmit = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (validate()) {
      try {
        const response = await fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await response.json();
        console.log("Success:", data);
        setShowButtonSuccess(true);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <Box>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handelSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handelChange}
            />
            {hasSubmitted && errorValues.usernameError ? (
              <Box>
                <b>
                  <Typography
                    sx={{
                      color: "red",
                    }}
                  >
                    Enter your username!
                  </Typography>
                </b>
              </Box>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handelChange}
            />
            {hasSubmitted && errorValues.emailError ? (
              <Box>
                <b>
                  <Typography
                    sx={{
                      color: "red",
                    }}
                  >
                    Enter your Email!
                  </Typography>
                </b>
              </Box>
            ) : null}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="password"
              placeholder="Password"
              id="password"
              value={formData.password}
              onChange={handelChange}
            />
            {hasSubmitted && errorValues.passwordError ? (
              <Box>
                <b>
                  <Typography
                    sx={{
                      color: "red",
                    }}
                  >
                    Enter your password!
                  </Typography>
                </b>
              </Box>
            ) : null}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{ borderRadius: "30px", padding: "10px 40px" }}
              >
                SIGN UP
              </Button>
            </Box>
          </Box>
          {showButtonSuccess ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: 3,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ borderRadius: "30px", padding: "10px 40px" }}
              >
                Sign Up Successfull
              </Button>
            </Box>
          ) : null}
          <Typography variant="h6" sx={{ m: 2 }}>
            Or Sign up with social platform
          </Typography>
          <Box sx={{ display: "flex", gap: 3 }}>
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
            <GoogleIcon></GoogleIcon>
            <LinkedInIcon></LinkedInIcon>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
