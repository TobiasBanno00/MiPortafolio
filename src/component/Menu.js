import React,{useState}from 'react'
import { useLocation,Link} from "react-router-dom"
import '../style/menu.css'
import TB from '../img/TobiasBanno.png'
import { FiAlignJustify } from "react-icons/fi";
import {BsGithub,BsLinkedin} from "react-icons/bs";
import $ from 'jquery';

function Menu({setEMenu}) {

  /* agregamos estilo en la parte del menu que nos encontramos */
  const { pathname } = useLocation();
  /*
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
  }); */

    /* activamos o desactivamos menu responsivos */
    function manejoMenu(){
      if(document.querySelector('.menu-resp').classList.contains('menu-open')){
        document.querySelector('.menu-resp').classList.remove('menu-open')
        setEMenu(false)  
      }
      else{
        document.querySelector('.menu-resp').classList.add('menu-open')
        setEMenu(true);  
      }
    }; 

  return (
    <nav>
        
        <div className='menu-contenedor'>
            <Link to='/'><img className='menu-img'  src={TB} alt='Tobias Banno' /></Link>
            <Link to='/sobreMi' id='sobreMi' className='menu-boton'> Sobre mi</Link>
            <Link to='/habilidades' id='habilidades'className='menu-boton'>Habilidades</Link>
            <Link to='/proyectos' id='proyectos'className='menu-boton'>Proyectos</Link>
            <Link to='/contacto' id='contacto' className='menu-boton'>Contacto</Link>
            <div className='menu-contenedorRedes'>
              <a className='menu-redes' target="_blank" href='https://github.com/TobiasBanno00'><BsGithub/></a>
              <a className='menu-redes' target="_blank" href='https://www.linkedin.com/in/tobias-banno-1a2235252/'><BsLinkedin/></a>    
            </div>   
        </div>


        {/* --------------------------------------- PARTE RESPONSIVA! */}

        <div className='menu-hamburger' onClick={manejoMenu}> <a><FiAlignJustify/></a></div>
        <div className='menu-resp'>
            <Link href='/'><img className='menu-img'  src={TB} alt='Tobias Banno' /></Link>
            <Link href='/sobreMi' id='sobreMiResp' className='menu-boton'> Sobre mi</Link>
            <Link href='/habilidades' id='habilidadesResp' className='menu-boton'>Habilidades</Link>
            <Link href='/proyectos' id='proyectosResp'className='menu-boton'>Proyectos</Link>
            <Link href='/contacto' id='contactoResp'className='menu-boton'>Contacto</Link>
            <div className='menu-contenedorRedes'>
              <a className='menu-redes' target="_blank" href='https://github.com/TobiasBanno00'><BsGithub/></a>
              <a className='menu-redes' target="_blank" href='https://www.linkedin.com/in/tobias-banno-1a2235252/'><BsLinkedin/></a>    
            </div>  
        </div>
    </nav>


  )
}

export default Menu