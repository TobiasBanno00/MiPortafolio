import React from 'react'
import $ from 'jquery';
import '../style/inicio.css'

function Inicio ({estadoMenu}) {

  

  $(()=>{
    if(estadoMenu){
      document.querySelector('.inicio-contenedor').classList.add('close'); {/* ocultamos el inicio al abrir el menu*/}
    }
    else{
      document.querySelector('.inicio-contenedor').classList.remove('close'); {/* mostramos el inicio al cerrar el menu*/}
    }
  });

    
  
    
  return (
    <div className='inicio-contenedor'>
        <h1 className='inicio-titulo'> <span> Hola!</span></h1>
        <h1 className='inicio-titulo'> Soy Tobías Banno</h1>
        <h2 className='inicio-titulo'> Desarrollador web fullstack</h2>
        <p className='inicio-pie'>Este es mi portafolio, dónde encontrás un breve resumen de mi y mis pequeños proyectos que iré subiendo
        a lo largo del tiempo. También encontrarás diferentes medios por el cual contactarme. </p>
    </div>
    
  )

  
}

export default Inicio
