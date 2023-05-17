import React, { createContext, useState } from "react";
import axios from "axios";

// Create context
export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (zipCode) => {
    try {
        debugger
      const response = await axios.get(
        `https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode?zip=${zipCode}`,
        {
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_WEATHER_API_KEY,
            "X-RapidAPI-Host": "us-weather-by-zip-code.p.rapidapi.com",
          },
        }
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
