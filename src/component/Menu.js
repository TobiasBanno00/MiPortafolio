import React from 'react'
import '../style/menu.css'
import TB from '../img/programador.png'
import { FiAlignJustify } from "react-icons/fi";

function Menu({setEMenu}) {
  
    function manejoMenu(){
      
      if(document.querySelector('.menu-resp').classList.contains('openMenu')){
        document.querySelector('.menu-resp').classList.remove('openMenu')
        setEMenu(false)  
      }
      else{
        document.querySelector('.menu-resp').classList.add('openMenu')
        setEMenu(true);  
      }
    }; 

  return (
    <nav>
        
        <div className='menu'>
            <a href='/'><img className='imgMenu'  src={TB} alt='Tobias Banno' /></a>
            <a href='/sobreMi' className='botonMenu'> Sobre mi</a>
            <a href='/habilidades' className='botonMenu'>Habilidades</a>
            <a href='/proyector' className='botonMenu'>Proyectos</a>
            <a href='/contacto' className='botonMenu'>Contacto</a>
        </div>


        {/* --------------------------------------- PARTE RESPONSIVA! */}

        <div className='hamburger' onClick={manejoMenu}> <a><FiAlignJustify/></a></div>
        <div className='menu-resp'>
            <a href='/'><img className='imgMenu'  src={TB} alt='Tobias Banno' /></a>
            <a href='/sobreMi' className='botonMenu'> Sobre mi</a>
            <a href='/habilidades' className='botonMenu'>Habilidades</a>
            <a href='/proyector' className='botonMenu'>Proyectos</a>
            <a href='/contacto' className='botonMenu'>Contacto</a>
        </div>
    </nav>


  )
}

export default Menu