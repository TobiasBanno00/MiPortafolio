import React from 'react'
import '../style/habilidades.css'
import $ from 'jquery';

import cmasmas from '../img/skills/c++.png'
import css from '../img/skills/css.png'
import html from '../img/skills/html.png'
import git from '../img/skills/git.png'
import github from '../img/skills/github.png'
import go from '../img/skills/go.png'
import javascript from '../img/skills/javascript.png'
import mongo from '../img/skills/mongo.png'
import mysql from '../img/skills/mysql.png'
import nodejs from '../img/skills/nodejs.png'
import react from '../img/skills/react.png'

function habilidades({estadoMenu}) {

  $(()=>{
    if(estadoMenu){
      document.querySelector('.habilidades-contenedor').classList.add('close'); {/* ocultamos el inicio al abrir el menu*/}
    }
    else{
      document.querySelector('.habilidades-contenedor').classList.remove('close'); {/* mostramos el inicio al cerrar el menu*/}
    }
  });

  return (
    <div className='habilidades-contenedor'>
        <div className='habilidades-info'>
            <h1 className='habilidades-titulo'>Habilidades </h1>
            <h1 className='habilidades-titulo'>Experiencias</h1>
            <p className='habilidades-data'>Hace más de 5 años que tengo conocimiento de programación en C/C++ y aproximadamente 1 año que empecé de forma
            autodidacta a introducirme en el desarrollo web a través de diferentes cursos, investigación y mucha práctica.</p>
            <p className='habilidades-data'> Puedo crear sitios web responsivos y también apis que manejen base de datos relacionales.</p>
            <p className='habilidades-data'> Todavía me falta mucho que aprender y experimentar, todos los días se aprende algo nuevo.</p>
        </div>
        <div className='habilidades-contSkills'>
        <img className='habilidades-skill'  src={cmasmas}/>
        <img className='habilidades-skill'  src={html}/>
        <img className='habilidades-skill'  src={css}/>
        <img className='habilidades-skill'  src={git}/>
        <img className='habilidades-skill'  src={github}/>
        <img className='habilidades-skill'  src={go}/>
        <img className='habilidades-skill'  src={javascript}/>
        <img className='habilidades-skill'  src={mongo}/>
        <img className='habilidades-skill'  src={nodejs}/>
        <img className='habilidades-skill'  src={mysql}/>
        <img className='habilidades-skill'  src={react}/>
       
       
        </div>
        

    </div>
  )
}

export default habilidades