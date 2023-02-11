import React, { useState, useMemo, useEffect } from 'react';
import WeatherDataComponent from './weatherData';
import weatherInfoData from './weatherInfo.json';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setWeatherData(weatherInfoData);
  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = useMemo(() => {
    return weatherData.filter(
      (weather) =>
        weather.city.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }, [searchTerm, weatherData]);

  return (
    <div className="container"> 
      <input
        type="text"
        className="search-input"
        placeholder="Search city..."
        value={searchTerm}
        onChange={handleChange}
      />
      
      {filteredData.length ? (
        <WeatherDataComponent data={filteredData} />
      ) : (
        <div className="no-data-found">No data found</div>
      )}
    </div>
  );
};

export default App;
