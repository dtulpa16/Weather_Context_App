import React, { useState } from 'react';
import { WeatherProvider } from './Context/WeatherContext';
import WeatherCard from './Components/WeatherCard';
import Search from './Components/Search';
function App() {
  return (
    <WeatherProvider>
      <div className="container mx-auto p-4">
        <Search />
        <WeatherCard />
      </div>
    </WeatherProvider>
  );
}

export default App;
