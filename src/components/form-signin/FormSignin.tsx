import { Box, Button, Container, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export type UsersType = {
  id: number;
  username: string;
  email: string;
  password: string;
  islogin: boolean;
};

export default function FormSignin() {
  const { authorizedUser, setAuthorizedUser } = useAuth();
  const [users, setUsers] = useState<UsersType[]>([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorValues, setErrorValues] = useState({
    usernameError: true,
    passwordError: true,
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

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
    if (!errorValues.usernameError && !errorValues.passwordError) {
      getUsers().then((res) => {
        if (res) {
          setUsers(res);
        }
        if (res.length > 0) {
          console.log(users);
          const usernameIsInDataBase = res.findIndex(
            (user: UsersType) => user.username === username
          );
          if (usernameIsInDataBase !== -1) {
            console.log(
              res[usernameIsInDataBase].password,
              typeof res[usernameIsInDataBase].password
            );
            console.log(password);
            console.log(res[usernameIsInDataBase].password);
            if (res[usernameIsInDataBase].password === password) {
              setAuthorizedUser(res[usernameIsInDataBase]);
              console.log("hello zohi");
            }
          } else {
            alert("there isn't this username,Please sign up");
          }
        }
      });
    }
  };
  return (
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
            value={username}
            onChange={(e) => {
              if (e.target.value === "") {
                setErrorValues({ ...errorValues, usernameError: true });
              } else {
                setErrorValues({ ...errorValues, usernameError: false });
              }
              setUsername(e.target.value);
            }}
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
            value={password}
            onChange={(e) => {
              if (e.target.value === "") {
                setErrorValues({ ...errorValues, passwordError: true });
              } else {
                setErrorValues({ ...errorValues, passwordError: false });
              }
              setPassword(e.target.value);
            }}
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
            SIGN IN
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
