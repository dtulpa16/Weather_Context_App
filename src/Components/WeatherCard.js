import { useContext } from "react";
import { WeatherContext } from "../Context/WeatherContext";

const WeatherCard = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return null;

  return (
    <div className="bg-blue-500 text-white p-6 rounded shadow">
      <h2 className="text-2xl mb-4">
        Weather for {weatherData.City}, {weatherData.State}
      </h2>
      <p>Conditions: {weatherData.Weather}</p>
      <p>Temperature: {weatherData.TempF}°</p>
      <p>
        Wind:{weatherData.WindDir} {weatherData.WindMPH} mph
      </p>
    </div>
  );
};

export default WeatherCard;
