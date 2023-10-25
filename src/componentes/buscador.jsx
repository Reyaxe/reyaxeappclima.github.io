import React, { useState } from 'react';
const InputComponent = ({ onSearch}) => {
  const [city, setCity] = useState('');
 
  

  const handleSearch = () => {
    onSearch(city);
    console.log(city);
  };
  

  return (
    <div>
      
       
      <input className='tarea-input'
        type="text"
        placeholder="Ingrese una ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        />
       
      <button className='icons' onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default InputComponent;
