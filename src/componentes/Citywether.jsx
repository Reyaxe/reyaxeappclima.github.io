import React, { useState, useEffect } from 'react';
import {BiMap} from 'react-icons/bi';
import Icono from './Icono';

function  WeatherComponent({city}) {
  
  const [weatherData, setWeatherData] = useState(null);
  const  [ icon ,  seticono ]  =  useState ( '' ) ;
  useEffect(() => {
   if(!city)return;
    async function fetchWeatherData() {
      try {
        const apiKey = '0edecb96de76f75392762f1ce22498a4'; 
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&appid=${apiKey}&units=metric`;
         
        const response = await fetch(apiUrl);

        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
          console.log(data);
          seticono(weatherData.weather[0].description)
        } else {
          console.error('Error al obtener los datos del clima.');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    }

    fetchWeatherData();
  }, [city]);

  return (
    <div>
      {weatherData ? (
        <div className='container'>
          <div className='temp'>{weatherData.main.temp.toFixed(0)}&deg;C</div>
          < img  className = 'imagen'  src = { Icono ( icon )  }  alt  =  "icons-wather"  / >
          <div className='icons'><BiMap /></div>
          <div className='cuidad'>{weatherData.name}</div>
          <div className='fecha'>{(new Date()).toLocaleDateString()}</div>
          <div className='container' >
          <div className='maxi'>{weatherData.main.temp_max.toFixed(0)}&deg;C / {weatherData.main.temp_min.toFixed(0)}&deg;C</div>
          </div>
        </div>
      ) : (
        <p>Buscando datos del clima...</p>
      )}
      
    </div>
  );
};
export default WeatherComponent;