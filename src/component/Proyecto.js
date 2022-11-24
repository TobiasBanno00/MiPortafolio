import React,{useState} from 'react'
import '../style/proyecto.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import $ from 'jquery';

function Proyecto({infoProyecto}) {

    /* AMPLIAMOS IMAGEN AL APRETAR SOBRE ELLA Y MOSTRAMOS DIFERENTES COSAS */
    const [estadoImg, setEstadoImg] = useState(false);    //true ampliamos img, false cerramos

    let abrirImg=()=>
    {
        document.querySelector('.proyecto-ampliado').classList.add('proyecto-openImg')
        setEstadoImg(true);
    }
          
    let cerrarImg=()=>{
        setEstadoImg(false);
        document.querySelector('.proyecto-ampliado').classList.remove('proyecto-openImg')
    } 

    /* MOSTRAMOS  O NO EL PULSADOR QUE NOS MOSTRARÁ NUESTRA PAGINA WEB DEL PROYECTO */
    const [estadoPulSWeb, setPulSWeb] = useState(false); //true mostramos el boton, false no lo mostramos 
    $(()=>{
        if(infoProyecto.pagina==''){
            setPulSWeb(false);
        }
        else{
        setPulSWeb(true); 
        }
    });

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
                <a target="_blank" href={infoProyecto.pagina}  className='proyecto-pul' style={{display: estadoPulSWeb?'block':'none'} }>SITIO WEB</a>
            </div>
        </div>

    </div>
  )
}

export default Proyecto