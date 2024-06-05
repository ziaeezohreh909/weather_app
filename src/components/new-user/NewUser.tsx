import { Box, Button, Typography } from "@mui/material";
import signinImage from "../../assets/signin.png";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default function NewUser() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // color: "white",
          padding: 2,
          gap: 3,
          // backgroundColor: blue,
          width: "600px",
          height: "auto",
        }}
      >
        <Typography variant="h6" sx={{ marginTop: 12 }}>
          New Here?
        </Typography>
        <Typography variant="body1" textAlign="center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab
          ipsum accusamus ad? Quisquam qui provident repellendus vitae
        </Typography>
        <Link to="sign-up">
          <Button
            variant="contained"
            sx={{
              // border: "1px solid white",
              borderRadius: "30px",
              padding: "10px 40px",
            }}
          >
            SIGN UP
          </Button>
        </Link>

        <Box
          component="img"
          src={signinImage}
          sx={{ width: "400px", height: "200px", marginRight: 3 }}
        />
      </Box>
    </Box>
  );
}
