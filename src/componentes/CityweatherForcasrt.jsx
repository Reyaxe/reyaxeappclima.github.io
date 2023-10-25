import React, { useState, useEffect } from 'react';
import axios from "axios";
const WeatherForecast = ({tawn}) => {
  const [weatherData, setForecast] = useState([]);
  const apiKey = "0edecb96de76f75392762f1ce22498a4";
 
  useEffect(() => {
    
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${tawn}&cnt=7&units=metric&appid=${apiKey}`
     

      )
.then((response) => {
        
       
  const data = response.data.list.slice(0,15 );
        
setForecast(data);
      })
      .catch((error) => {
        console.error("Error al obtener el pronóstico del tiempo", error);
      });
  }, [tawn]);
  
  return (
    <div className="weather-container">
       
     {weatherData.map((day) => (
        <div key={day.dt} className="forecast-item">
          <div className="day">{new Date(day.dt * 1000).toLocaleDateString('es-ES', { weekday: 'long' })}:</div>
          <div className='temperature'>{new Date(day.dt * 1000).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}</div>
          <div className="temperature">{day.main.temp.toFixed(0)}&deg;C </div>
          <div className="rain-probability">{day.pop}</div>
      </div>
    ))}
  </div>
);

};

export default WeatherForecast;
