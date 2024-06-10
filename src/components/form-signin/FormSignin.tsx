import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export type UsersType = {
  id: number;
  username: string;
  email: string;
  password: string;
};

export default function FormSignin() {
  const { authorizedUser, setAuthorizedUser } = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState<UsersType[]>([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errorValues, setErrorValues] = useState({
    usernameError: false,
    passwordError: false,
  });

  const validate = () => {
    let usernameError = formData.username.trim() === "";
    let passwordError = formData.password.trim() === "";

    setErrorValues({
      usernameError,
      passwordError,
    });

    return !(usernameError || passwordError);
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

  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (validate()) {
      getUsers().then((res) => {
        if (res) {
          setUsers(res);
        }
        if (res.length > 0) {
          const usernameIsInDataBase = res.findIndex(
            (user: UsersType) =>
              user.username === formData.username &&
              user.password === formData.password
          );
          if (usernameIsInDataBase !== -1) {
            console.log(
              res[usernameIsInDataBase].password,
              typeof res[usernameIsInDataBase].password
            );
            console.log(res[usernameIsInDataBase].password);
            if (res[usernameIsInDataBase].password === formData.password) {
              setAuthorizedUser(res[usernameIsInDataBase]);
              navigate("/home");
            }
          } else {
            alert("there is a bad thing");
          }
        }
      });
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h6">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
              Login
            </Button>
          </Box>
        </Box>
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
  );
}
