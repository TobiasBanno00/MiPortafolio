import React from 'react'
import $ from 'jquery';
import '../style/sobreMi.css'



function SobreMi({estadoMenu}) {

  $(()=>{
    if(estadoMenu){
      document.querySelector('.sobreMi-contenedor').classList.add('close'); {/* ocultamos el inicio al abrir el menu*/}
    }
    else{
      document.querySelector('.sobreMi-contenedor').classList.remove('close'); {/* mostramos el inicio al cerrar el menu*/}
    }
  });
  
  return (
    <div className='sobreMi-contenedor'>
        <div className='sobreMi-datos'>
            <h1 className='sobreMi-titulo'>Un poco de mi..</h1>
            <p className='sobreMi-info'>
                Soy un técnico electrónico de 22 años al cual le interesó y apasionó la programación desde que la conoció. Iniciando con C, C++ y Arduino tanto en la secundaria cómo en la universidad, 
                pero los mismos orientados a programas en consola y microcontroladores.<br/>
                Actualmente estoy estudiando Ingeniería en Sistemas de Información y enfocandome en la programación web, queriendo obtener nuevos conocimientos e ir creciendo con estos. 
            </p>

            <h1 className='sobreMi-titulo'>Me considero..</h1>
            <p className='sobreMi-info'>
                Persona organizada, dispuesta a solucionar cualquier tipo problema e ir aprendiendo en el proceso. Encantado en trabajar en equipo con personas positivas y ambiciosas. 
            </p>
        </div>
        <div className='sobreMi-ubicacion'>
        <h1 className='sobreMi-titulo'>Mi ubicación</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1423367.7424456123!2d-62.02530177111204!3d-31.472283281860424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb28228bc1d067%3A0x8f04abfe8c3700f4!2sSan%20Francisco%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1668107824907!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default SobreMi