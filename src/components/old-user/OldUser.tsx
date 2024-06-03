import { Box, Button, Typography } from "@mui/material";
import signinImage from "../../assets/signin.png";

export default function OldUser() {
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
          //   backgroundColor: blue,
          width: "600px",
          height: "auto",
        }}
      >
        <Typography variant="h6" sx={{ marginTop: 12 }}>
          One of us?
        </Typography>
        <Typography variant="body1" textAlign="center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab
          ipsum accusamus ad? Quisquam qui provident repellendus vitae
        </Typography>
        <Button
          variant="contained"
          sx={{
            border: "1px solid white",
            borderRadius: "30px",
            padding: "10px 40px",
          }}
        >
          SIGN IN
        </Button>
        <Box
          component="img"
          src={signinImage}
          sx={{ width: "200px", height: "auto", marginRight: 3 }}
        />
      </Box>
    </Box>
  );
}
