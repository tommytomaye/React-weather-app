import React, { useState, useEffect } from 'react';
import WeatherDataComponent from './weatherData';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/weather');
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(
      weatherData.filter(
        (weather) =>
          weather.city.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      )
    );
  }, [searchTerm, weatherData]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
