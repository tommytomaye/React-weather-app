import './weatherData.css';

const WeatherDataComponent = ({ data }) => {
    return (
      <ul className="weather-data">
        {data.map((item, index) => {
          const { city, temperature, wind_speed, humidity, visibility, pressure } = item;
          return (
            <li key={index}>
              <h2>City: {city}</h2>
              <h3 className="temperature">Temperature: {temperature}</h3>
              <p className="wind-speed">Wind Speed: {wind_speed}</p>
              <p>Humidity: {humidity}</p>
              <p>Visibility: {visibility}</p>
              <p>Pressure: {pressure}</p>
            </li>
          );
        })}
      </ul>
    );
  };
  
  

export default WeatherDataComponent;
