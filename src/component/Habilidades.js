import React from 'react'
import '../style/habilidades.css'

function habilidades() {
  return (
    <div className='habilidades-contenedor'>
        <div className='habilidades-info'>
            <h1 className='habilidades-titulo'>Habilidades y experiencia</h1>
            <p className='habilidades-data'>Hace más de 5 años que tengo conocimiento de programación en C/C++ y aproximadamente 1 año que empecé de forma
            autodidacta a introducirme en el desarrollo web a través de diferentes cursos, investigación y mucha práctica.</p>
            <p className='habilidades-data'> Puedo crear sitios web responsivos y también apis que manejen base de datos relacionales.</p>
            <p className='habilidades-data'> Todavía me falta mucho que aprender y experimentar, todos los días aprendo algo nuevo y mejores 
            prácticas.</p>
        </div>
        <div className='habilidades-contSkills'>
        <h3 className='habilidades-skill'>Git/GitHub</h3>
        <h3 className='habilidades-skill'>C/C++</h3>
          <h3 className='habilidades-skill'>HTML</h3>
          <h3 className='habilidades-skill'>CSS</h3>
          <h3 className='habilidades-skill'>JavaScript</h3>
          <h3 className='habilidades-skill'>React Js</h3>
          <h3 className='habilidades-skill'>Node Js</h3>
          <h3 className='habilidades-skill'>MySql</h3>
       


        </div>
        

    </div>
  )
}

export default habilidades