import React from 'react'
import Logo from '../img/programador1.png'
import '../style/cargando.css'

function Cargando() {
  return (
    <div className='cargando-contenedor'>
        <div className='cargando-circuloCarga'></div>
        <img className='cargando-img'  src={Logo} alt='Tobias Banno'/>
        <h1 className='cargando-titulo'>Mi portafolio</h1>
        <h4 className='cargando-pie'> por Tobías Banno</h4>
        
    </div>
  )
}

export default Cargando