import React from 'react'
import $ from 'jquery';
import '../style/inicio.css'

function Inicio ({estadoMenu}) {

  

  $(()=>{
    if(estadoMenu){
      document.querySelector('.inicio-contenedor').classList.add('closeInicio'); {/* ocultamos el inicio al abrir el menu*/}
    }
    else{
      document.querySelector('.inicio-contenedor').classList.remove('closeInicio'); {/* mostramos el inicio al cerrar el menu*/}
    }
  });

    
  
    
  return (
    <div className='inicio-contenedor'>
        <p className='inicio-titulo'>  Hola! soy Tobías Banno</p>
        <p className='inicio-subTitulo'> Desarrollador web fullstack</p>
        <p className='inicio-pie'>Este es mi portafolio, dónde encontrás un breve resumen de mi y mis pequeños proyectos que iré subiendo
        a lo largo del tiempo. También encontrarás diferentes medios por el cual contactarme. </p>
    </div>
    
  )

  
}

export default Inicio
