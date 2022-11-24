import React from 'react'
import '../style/proyectos.css'
import Proyecto from './Proyecto'
import $ from 'jquery';

function Proyectos({estadoMenu}) {

    $(()=>{
        if(estadoMenu){
          document.querySelector('.proyectos-contenedor').classList.add('close'); {/* ocultamos el inicio al abrir el menu*/}
        }
        else{
          document.querySelector('.proyectos-contenedor').classList.remove('close'); {/* mostramos el inicio al cerrar el menu*/}
        }
      });
      
    
    let miPortafolio={
        imagen:'miPortafolio.png',
        titulo: 'MI PORTAFOLIO',
        resumen: 'Proyecto propio, dónde se encuentra reflejado algo de lo que sé de JavaScript, React, html y  css,  mostrando información personal y proyectos que llevé a cabo.',
        codigo:'https://github.com/TobiasBanno00/MiPortafolio.git',
        pagina:'https://portafolio-tobiasbanno.netlify.app/'
    };

    let impresiones={
        imagen:'impresiones3d.png',
        titulo: 'IMPRESIONES 3D',
        resumen: 'Proyecto propio, primera pagina web echa por mi en react, echa para practicar. No terminada le falta bastante por hacer.',
        codigo:'https://github.com/TobiasBanno00/3Deseos.git',
        pagina:''
    };

    let tallerMecanico={
        imagen:'tallerMecanico.png',
        titulo: 'TALLER MECÁNICO',
        resumen: 'Proyecto propio, en proceso todavía no terminado, se hizo tanto el frontend cómo el backend. Pagina para taller mecanico, dónde se podrá sacar turnos y ver lo que se le hizo al automovil.',
        codigo:'https://github.com/TobiasBanno00/Negocio.git',
        pagina:''
    };

    let enProceso={
        imagen:'fondoNegro.png',
        titulo: 'En proceso',
        resumen:'Proximamente..',
        codigo:'',
        pagina:''
    };


  return (
    <div className='proyectos-contenedor'>
        <h1 className='proyectos-titulo'>Proyectos y código</h1>
        <div className='proyectos-contenedorCuadricula'>
            <Proyecto infoProyecto={miPortafolio}/>
            <Proyecto infoProyecto={tallerMecanico}/>
            <Proyecto infoProyecto={impresiones}/>
            <Proyecto infoProyecto={enProceso}/>
            <Proyecto infoProyecto={enProceso}/>
            <Proyecto infoProyecto={enProceso}/>


        </div>
    </div>

  )
}

export default Proyectos