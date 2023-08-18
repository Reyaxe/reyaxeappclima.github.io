

const Icono = (icon) => {
    switch (icon) {
        case 'Thunderstorms':
            icon = 'icons/thunderstorms.svg'
            console.log('TORMENETA');
            
            break; 

            case 'Clear-night':
                icon = 'icons/clear-night.svg'
                console.log('LIMPIO');
              break;

             case 'Clear':
                    icon = 'icons/clear-day.svg'
                    console.log('LIMPIO');
                    break; 

             case 'Fog':
                    icon = 'icons/fog.svg'
                    console.log('NUBES');
                    break; 

             case 'Rain':
                   icon = 'icons/rain.svg'
                   console.log('LLUVIA');
                    break;  

             case 'Snow':
                    icon = 'icons/show.svg'
                    console.log('NIEVE');
                     break;
                        
            case 'Thunderstorms-day-rain':
                    icon = 'icons/thunderstorms-day-rain.svg'
                    console.log('TORMENTA-DIA');
                    break;
                    
            case 'Thunderstorms-rain':
                    icon = 'icons/thunderstorms-rain.svg'
                    console.log('Tormenta-lluvia');
                   break;  
                   default:
                     icon = 'icons/fog.svg'
                     console.log('NUBES');    
                  
    }           
    return icon
}
export default Icono;