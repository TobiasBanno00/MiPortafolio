import React,{useState}from 'react'
import '../style/menu.css'
import TB from '../img/programador.png'
import { FiAlignJustify } from "react-icons/fi";
import $ from 'jquery';

function Menu({setEMenu}) {

  /* agregamos estilo en la parte del menu que nos encontramos */
  const [pathname, setPathname] = useState(window.location.pathname);
  $(()=>{

    switch (pathname) {
      case '/sobreMi':
        document.querySelector('#sobreMi').classList.add('menu-pagActual')
        document.querySelector('#sobreMiResp').classList.add('menu-pagActual')
      break;

      case '/habilidades':
        document.querySelector('#habilidades').classList.add('menu-pagActual')
        document.querySelector('#habilidadesResp').classList.add('menu-pagActual')
      break;
      
      case '/proyectos':
        document.querySelector('#proyectos').classList.add('menu-pagActual')
        document.querySelector('#proyectosResp').classList.add('menu-pagActual')
      break;

      case '/contacto':
        document.querySelector('#contacto').classList.add('menu-pagActual')
        document.querySelector('#contactoResp').classList.add('menu-pagActual')
      break;
      
      default:
        break;
    }
  });

    /* activamos o desactivamos menu responsivos */
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
            <a href='/sobreMi' id='sobreMi' className='botonMenu'> Sobre mi</a>
            <a href='/habilidades' id='habilidades'className='botonMenu'>Habilidades</a>
            <a href='/proyectos' id='proyectos'className='botonMenu'>Proyectos</a>
            <a href='/contacto' id='contacto' className='botonMenu'>Contacto</a>
        </div>


        {/* --------------------------------------- PARTE RESPONSIVA! */}

        <div className='hamburger' onClick={manejoMenu}> <a><FiAlignJustify/></a></div>
        <div className='menu-resp'>
            <a href='/'><img className='imgMenu'  src={TB} alt='Tobias Banno' /></a>
            <a href='/sobreMi' id='sobreMiResp' className='botonMenu'> Sobre mi</a>
            <a href='/habilidades' id='habilidadesResp' className='botonMenu'>Habilidades</a>
            <a href='/proyectos' id='proyectosResp'className='botonMenu'>Proyectos</a>
            <a href='/contacto' id='contactoResp'className='botonMenu'>Contacto</a>
        </div>
    </nav>


  )
}

export default Menu