import React , {useState}from 'react'
import '../style/menu.css'
import TB from '../img/TobiasBanno.jfif'
import { FiAlignJustify } from "react-icons/fi";

function Menu() {

    function manejoMenu(){

      document.querySelector('.menu-resp').classList.contains('openMenu')?document.querySelector('.menu-resp').classList.remove('openMenu')
      :document.querySelector('.menu-resp').classList.add('openMenu');
   
    };

  return (
    <nav>
        
        <div className='menu'>
            <img className='imgMenu' src={TB} alt='Tobias Banno' /> 
            <a href='/sobreMi' className='botonMenu'> Sobre mi</a>
            <a href='/habilidades' className='botonMenu'>Habilidades</a>
            <a href='/proyector' className='botonMenu'>Proyectos</a>
            <a href='/contacto' className='botonMenu'>Contacto</a>
        </div>


        {/* --------------------------------------- PARTE RESPONSIVA! */}

        <div className='hamburger' onClick={manejoMenu}> <a><FiAlignJustify/></a></div>
        <div className='menu-resp'>
            <img className='imgMenu' src={TB} alt='Tobias Banno' /> 
            <a href='/sobreMi' className='botonMenu'> Sobre mi</a>
            <a href='/habilidades' className='botonMenu'>Habilidades</a>
            <a href='/proyector' className='botonMenu'>Proyectos</a>
            <a href='/contacto' className='botonMenu'>Contacto</a>
        </div>
    </nav>


  )
}

export default Menu