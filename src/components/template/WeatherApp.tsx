import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../card/Card";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");

  const [cities, setCities] = useState([
    "London",
    "New York",
    "Tokyo",
    "Tehran",
    "Amsterdam",
  ]);
  const [citiesWeatherData, setCitiesWeatherData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        const apiKey = "22b8aa5fd083b5ff6799d5d4d7cb5df5";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        const { data } = await axios.get(url);
        setWeatherData(data);
        setError(null);
      } catch (err: any) {
        setError(err.message);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [city]);

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

  const handelSearch = () => {
    setCity(city);
  };

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
      <Box sx={{ display: "flex", mt: 6, justifyContent: "center" }}>
        <TextField
          type="text"
          sx={{ width: "500px" }}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <Button
          variant="contained"
          size="medium"
          color="info"
          onClick={handelSearch}
        >
          Search
        </Button>
      </Box>
      {loading ? (
        <Typography variant="body1">Loading...</Typography>
      ) : error ? (
        <Typography
          variant="body1"
          color="error"
        >{`Error: ${error}`}</Typography>
      ) : weatherData ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            m: 2,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#e1bee7",
              m: 5,
              borderRadius: "30px",
              px: 10,
              py: 5,
            }}
            width="600px"
            height="250px"
          >
            <Typography variant="h5">{`Weather in ${weatherData.name}`}</Typography>
            <Typography variant="body1">{`Temperature: ${weatherData.main.temp}°C`}</Typography>
            <Typography variant="body1">{`Weather: ${weatherData.weather[0].description}`}</Typography>
            <Typography variant="body1">{`Humidity: ${weatherData.main.humidity}%`}</Typography>
            <Typography variant="body1">{`Wind Speed: ${weatherData.wind.speed} m/s`}</Typography>
          </Box>
        </Box>
      ) : (
        <Typography variant="body1">No data available</Typography>
      )}
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
    </Box>
  );
}
