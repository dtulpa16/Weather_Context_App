import React, { useState, useContext } from 'react';
import { WeatherContext } from '../Context/WeatherContext';
const Search = () => {
    const { fetchWeather } = useContext(WeatherContext);
    const [zip, setZip] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      fetchWeather(zip);
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          placeholder="Enter ZIP Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="mr-2 p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Get Weather
        </button>
      </form>
    );
  };
  
  export default Search;