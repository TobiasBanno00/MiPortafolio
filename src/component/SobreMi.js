import React from 'react'
import '../style/sobreMi.css'

function SobreMi() {
  return (
    <div className='sobreMi-contenedor'>
        <div className='sobreMi-datos'>
            <h1 className='sobreMi-titulo'>¿Quien soy?</h1>
            <p className='sobreMi-info'>
                Soy un técnico electrónico de 22 años al cual le interesó y apasionó la programación desde que la conoció. Iniciando con C, C++ y Arduino tanto en la secundaria cómo en la universidad, 
                pero los mismos orientados a programas en consola y microcontroladores.
                Actualmente estoy enfocandome en la programación web, queriendo obtener nuevos conocimientos e ir creciendo con estos, ya sea en el frontend cómo el backend. 
            </p>

            <h1 className='sobreMi-titulo'>¿Cómo me considero?</h1>
            <p className='sobreMi-info'>
                Persona organizada, dispuesta a solucionar cualquier tipo problema e ir aprendiendo en el proceso. Encantado en trabajar en equipo con personas positivas y ambiciosas. 
            </p>
        </div>
        <div className='sobreMi-ubicacion'>
        <h1 className='sobreMi-titulo'>¿Dónde vivo?</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1194550.1085924183!2d-63.04653185915638!3d-31.293739163947837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb28228bc1d067%3A0x8f04abfe8c3700f4!2sSan%20Francisco%2C%20C%C3%B3rdoba!5e1!3m2!1ses-419!2sar!4v1668022671662!5m2!1ses-419!2sar" width="500" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default SobreMi