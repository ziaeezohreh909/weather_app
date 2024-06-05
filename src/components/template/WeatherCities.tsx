import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../card/Card";

export default function WeatherCities() {
  const [cities, setCities] = useState([
    "London",
    "New York",
    "Tokyo",
    "Tehran",
    "Amsterdam",
  ]);
  const [citiesWeatherData, setCitiesWeatherData] = useState([]);

  useEffect(() => {
    async function getCitiesData() {
      try {
        const apiKey = "22b8aa5fd083b5ff6799d5d4d7cb5df5";
        const promises = cities.map((city) =>
          axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
          )
        );
        const results = await Promise.all(promises);
        const data = results.map((result) => result.data);
        setCitiesWeatherData(data);
      } catch (err) {
        console.error("Error fetching data for cities", err);
      }
    }
    getCitiesData();
  }, [cities]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 2,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {citiesWeatherData.map((data, index) => (
          <Card
            key={index}
            CityName={`Weather in ${data.name}`}
            Temperature={`Temperature: ${data.main.temp}°C`}
            WeatherDescription={`Weather: ${data.weather[0].description}`}
            Humidity={`Humidity: ${data.main.humidity}%`}
            WindSpeed={`Wind Speed: ${data.wind.speed} m/s`}
          />
        ))}
      </Box>
    </>
  );
}
