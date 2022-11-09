import React from 'react'
import '../style/inicio.css'

function Inicio ({estadoMenu}) {

  if(estadoMenu){
    document.querySelector('.inicioContenedor').classList.add('closeInicio'); {/* ocultamos el inicio al abrir el menu*/}
  }
  else{
    document.querySelector('.inicioContenedor').classList.remove('closeInicio'); {/* mostramos el inicio al cerrar el menu*/}
  }

  return (
    <div className='inicioContenedor'>
        <p className='inicioTitulo'>  Hola, soy Tobías Banno</p>
        <p className='inicioSubTitulo'> Desarrollador web fullstack</p>
        <p className='inicioPie'>Este es mi portafolio, dónde encontrás un breve resumen de mi y mis pequeños proyectos que iré subiendo
        a lo largo del tiempo. También encontrarás diferentes medios por el cual contactarme.</p>
    </div>
  )
}

export default Inicio
