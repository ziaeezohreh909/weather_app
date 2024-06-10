import { Box, Button, Typography } from "@mui/material";
import signinImage from "../../assets/signin.png";
interface typeProps {
  buttonName: string;
  headerName: string;
  onClick: () => void;
}
export default function NewUser({
  buttonName,
  headerName,
  onClick,
}: typeProps) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 2,
          gap: 3,
          width: "500px",
          height: "80vh",
          backgroundColor: "#9fa8da",
          margin: 9,
          borderRadius: "200px",
        }}
      >
        <Typography variant="h6" sx={{ marginTop: 12 }}>
          {headerName}
        </Typography>
        <Typography variant="body1" textAlign="center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab
          ipsum accusamus ad? Quisquam qui provident repellendus vitae
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "30px",
            padding: "10px 40px",
            backgroundColor: "#3f51b5",
          }}
          onClick={onClick}
        >
          {buttonName}
        </Button>
        <Box
          component="img"
          src={signinImage}
          sx={{ width: "300px", height: "200px", marginRight: 3 }}
        />
      </Box>
    </>
  );
}
