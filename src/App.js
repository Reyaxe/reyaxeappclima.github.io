
import './App.css'
import WeatherComponent from './componentes/Citywether';
import WeatherForecast from './componentes/CityweatherForcasrt';
import { useState } from 'react';
import InputComponent from './componentes/buscador';
function App() {
  const [city, setCity] = useState('');
  const [tawn, setTawn] = useState('')
  
  
 
  
  const handleSearch = (searchCity) => {
    setCity(searchCity);
    setTawn(searchCity);
  };


  return (
    
    <div className="App">
      <div className='container-sarch'>
      <InputComponent onSearch={handleSearch}/>
      
      </div>
      <div className='contenedor-app'>
      <WeatherComponent city={city}    />
      </div>
      <div className='contenedor-prev'>
 
       < WeatherForecast tawn={tawn} />
      </div>
    </div>
  
  );
}

export default  App;
