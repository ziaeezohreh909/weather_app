import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import WeatherCities from "./WeatherCities";
import WeatherCity from "./WeatherCity";

export default function WeatherApp() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Weather App</Typography>
        <Link to="/">
          <Button variant="contained" size="medium" color="error">
            Logout
          </Button>
        </Link>
      </Box>
      <Box>
        <WeatherCity />
      </Box>
      <Box>
        <WeatherCities />
      </Box>
    </Box>
  );
}
