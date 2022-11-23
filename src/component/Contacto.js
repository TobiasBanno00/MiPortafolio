import React from 'react'
import '../style/contacto.css'
import {BsFillPhoneVibrateFill,BsMailbox,BsWhatsapp,BsLinkedin,BsFacebook} from "react-icons/bs";
import $ from 'jquery';

function Contacto({estadoMenu}) {

    $(()=>{
        if(estadoMenu){
          document.querySelector('.contacto-contenedor').classList.add('close'); {/* ocultamos el inicio al abrir el menu*/}
        }
        else{
          document.querySelector('.contacto-contenedor').classList.remove('close'); {/* mostramos el inicio al cerrar el menu*/}
        }
      });

  return (
    <div className='contacto-contenedor'>
         <div className='contenedor-info'>
            <div className='contenedor-encabezado'>
                <h2 className="contacto-titulo">Contacto</h2>
                <p className='contacto-pie'>Estoy interesado en nuevas oportunidades laborales o proyectos individuales.</p>
                <p className='contacto-pie'>No obstante, si tienes otra inquietud, no dudes en utilizar los diferentes medios para contactarme.</p>
            </div>
            <div className='contacto-medios'>
                <a className='contacto-redes'  href="mailto:tobiasbanno@gmail.com?Subject=Me%20interesa%20tu%20Perfil"><BsMailbox/> <span>CORREO</span></a>
                <a className='contacto-redes' target="_blank" href='https://wa.me/543564339059?text=Hola!%20estoy%20interesado%20en%20tu%20perfil.' ><BsWhatsapp/> <span>WHATSAPP</span></a>
                <a className='contacto-redes' target="_blank" href='https://www.linkedin.com/in/tobias-banno-1a2235252/' ><BsLinkedin/> <span>LINKEDIN</span> </a>
                <a className='contacto-redes' target="_blank" href='https://www.facebook.com/Tobi.Banno' ><BsFacebook/> <span>FACEBOOK</span> </a>
            </div>
         </div>
        

    </div>
  )
}

export default Contacto