import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { weatherReports } from '../store/weatherslice';


const Weather = () => {
  useEffect(() => {
    document.body.className = 'weather-background';
    return () => {
      document.body.className = ''; 
    };
  }, []);
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather); 

  useEffect(() => {
    
    fetch("https://api.weatherapi.com/v1/current.json?key=b5d06d0babae476bacf125117242608&q=Delhi,IN")
      .then((response) => response.json())
      .then((data) => {
        dispatch(weatherReports(data));
      });
  }, [dispatch]);

 
  if (!weather || !weather.location || !weather.current) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="weather-container">
      <h1>Weather Report </h1>
      <div className="weather-info">
        <h2>{weather.location.name}</h2>
        <p>Temperature: {weather.current.temp_c}°C</p>
        <p>Condition: {weather.current.condition.text}</p>
        <p>Humidity: {weather.current.humidity}%</p>
        <p>Wind Speed: {weather.current.wind_kph} km/h</p>
      </div>
    </div>
  );
};

export default Weather;