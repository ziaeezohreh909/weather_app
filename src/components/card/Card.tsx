import { Box, Typography } from "@mui/material";

export default function Card({
  CityName,
  Temperature,
  WeatherDescription,
  Humidity,
  WindSpeed,
}: any) {
  return (
    <Box
      width="300px"
      height="200px"
      sx={{
        backgroundColor: "#00b0ff",
        borderRadius: "10px",
        px: 8,
        py: 3,
      }}
    >
      <Typography variant="h6">{CityName}</Typography>
      <Typography variant="body1">{Temperature}</Typography>
      <Typography variant="body1">{WeatherDescription}</Typography>
      <Typography variant="body1">{Humidity}</Typography>
      <Typography variant="body1">{WindSpeed}</Typography>
    </Box>
  );
}
