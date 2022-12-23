import React, {useEffect} from 'react'
import { createRoot} from "react-dom/client";

import Logo from '../img/programador1.png'
import '../style/cargando.css'

function Cargando({location}) {

  
  let cargar =()=>{
    const cargando = document.createElement("div");   
    document.body.appendChild(cargando);                    // agregamos el div como ultimo elemento de la hoja    
    const root = createRoot(cargando);                      // createRoot(CONTENEDOR)

    root.render(                                            // LO QUE RENDERIZO
    <div className='cargando-contenedor' >   
    <div className='cargando-circuloCarga'></div>
    <img className='cargando-img'  src={Logo} alt='Tobias Banno'/>
    <h1 className='cargando-titulo'>Mi portafolio</h1>
    <h4 className='cargando-pie'> por Tobías Banno</h4>
    </div>)                               
  }
  
  useEffect(cargar,[location])                              // cuando cambia la ruta llama a la función cargar
  
  return(
    <>
    </>
  )
}

export default Cargando;