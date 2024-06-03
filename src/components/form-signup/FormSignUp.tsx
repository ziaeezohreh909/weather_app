import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

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
          <Typography component="h1" variant="h6">
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
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              SIGN UP
            </Button>
          </Box>
          {showButtonSuccess ? (
            <Box>
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up Successful
              </Button>
            </Box>
          ) : null}
        </Box>
      </Container>
    </Box>
  );
}
