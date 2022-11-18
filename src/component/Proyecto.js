import React,{useState} from 'react'
import '../style/proyecto.css'
import { AiFillCloseCircle } from 'react-icons/ai';


function Proyecto({infoProyecto}) {

    const [estadoImg, setEstadoImg] = useState(false);    //true amplamos img, false cerramos

    let abrirImg=()=>
    {
        document.querySelector('.proyecto-ampliado').classList.add('proyecto-openImg')
        setEstadoImg(true);
    }
          
    let cerrarImg=()=>{
        setEstadoImg(false);
        document.querySelector('.proyecto-ampliado').classList.remove('proyecto-openImg')
    } 
    
  

  return (
    <div className='proyecto-contenedor'>
        <img src={require(`../img/proyectos/${infoProyecto.imagen}`)} class="proyecto-img" alt="Hola" onClick={abrirImg}/>
        <h1 className='proyecto-pie'>{infoProyecto.titulo}</h1>

        <div className='proyecto-ampliado' style={{display: estadoImg?'flex':'none'} }>
            <img src={require(`../img/proyectos/${infoProyecto.imagen}`)} class="proyecto-imgAmpliada" alt="Hola"/>
            <a onClick={cerrarImg} className='proyecto-close'><AiFillCloseCircle/></a>
            <div className='proyecto-contenedorInfo'>
                <p className='proyecto-info'>{infoProyecto.resumen}</p>
            </div>
            <div className='proyecto-contenedorPul'>
                <a target="_blank" href={infoProyecto.codigo}  className='proyecto-pul'>VER CÓDIGO</a>
                <a target="_blank" href={infoProyecto.web}  className='proyecto-pul'>SITIO WEB</a>
            </div>
        </div>

    </div>
  )
}

export default Proyecto