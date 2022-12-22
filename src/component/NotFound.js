import React from 'react'
import Logo from '../img/programador1.png'
import '../style/notFound.css'

function NotFound() {
  return (
    <div className='notFound-contenedor'>
        <div className='notFound-circuloCarga'></div>
        <h1 className='notFound-titulo'>Página inexistente</h1>
        <img className='notFound-img'  src={Logo} alt='Tobias Banno'/>
    </div>
  )
}

export default NotFound