import './App.css';
import { useState , } from 'react';
import {BiSearchAlt2} from 'react-icons/bi';
import {BiMap} from 'react-icons/bi';
import Icono from './componentes/Icons';


function App(){
const [search, setsearch] = useState('buenos aires');
const [value, setvalue] = useState('');
const [icon, seticono] = useState('');


const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const getData = async (e) =>{
    e.preventDefault();
    await fetch(URL)
    .then(response => {return response.json()})
    .then (data =>{
      if(data.cod >= 400){
        setvalue(false)
      }else{
        setvalue(data)
        //console.log(data.weather[0].main)
        seticono(data.weather[0].main)
      }
     //console.log(data)
    })
    .catch(error => {
     
      
      console.log(error)
    });
  }


  
  return(
    <>
    <div className='App'>
   
   <form onSubmit={getData} className='tarea-formulario'>
   <div type="submit" className="icono"> 
< BiSearchAlt2  />
</div>
    <input className='tarea-input'
    type='text'
    value={search}
    onChange={event => setsearch(event.target.value)}
    placeholder='buscar cuidad..!!'
     />
   </form>
   </div>

   <div className='App'>
    {(value) ? (
 <div className='contenedor-app'>
<div className='icons'><BiMap /></div>      
<div className='ciudad'>{value.name} </div>
<div className='ciudad'>{value.sys.country}</div>
<img className='imagen' src={Icono(icon) } alt = "icons-wather" />
<div className='temp'>{value.main.temp.toFixed(0)}&deg;C</div>
<div className='fecha'>{(new Date()).toLocaleDateString()}</div>
<div className='container'>
<div className='maxi'>{value.main.temp_max.toFixed(0)}&deg;C</div>
<img className='maxima' src={require('./imagenes/max.jpg')}  />
<img  className='minima' src={require('./imagenes/min.jpg')} />
<div className='mini'>{value.main.temp_min.toFixed(0)}&deg;C</div>
</div>
    </div>
    ) : (
       <div></div>

    )}
    
   

    
    
    
   </div>
   </>
  );
}
export default App;