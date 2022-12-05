import React,{useState, useRef} from 'react'
import { createRoot } from "react-dom/client";
import '../style/proyecto.css'
import { AiFillCloseCircle } from 'react-icons/ai';
import $ from 'jquery';

function Proyecto({infoProyecto}) {

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

    /* Funcion en dónde ampliamos el proyecto que queramos ver, renderizamos solo cuando se presiona sobre la img */
    const refImgAmpl = useRef(null);
    let abrirImg=()=>
    {   
        const proyectoAmpli = document.createElement("div");    // creamos div
        proyectoAmpli.id = "proyectoAmpliado";
        document.body.appendChild(proyectoAmpli);            // agregamos el div como ultimo elemento de la hoja
        const root = createRoot(proyectoAmpli);  // createRoot(CONTENEDOR)
        root.render(                            // LO QUE RENDERIZO

            <div className='proyecto-ampliado proyecto-abrir' ref={refImgAmpl}>
                <img src={require(`../img/proyectos/${infoProyecto.imagen}`)} className="proyecto-imgAmpliada" />
                <a onClick={imgClose} className='proyecto-close'><AiFillCloseCircle/></a>
                <div className='proyecto-contenedorInfo'>
                    <p className='proyecto-info'>{infoProyecto.resumen}</p>
                </div>
                <div className='proyecto-contenedorPul'>
                    <a target="_blank" href={infoProyecto.codigo}  className='proyecto-pul'>VER CÓDIGO</a>
                    <a target="_blank" href={infoProyecto.pagina}  className='proyecto-pul' style={{display: estadoPulSWeb?'block':'none'} }>SITIO WEB</a>
                </div>
            </div>

        );   
        
        /* cerramos la vista cuando se precione la x y termine la animacion */
        function imgClose() {
            refImgAmpl.current.classList.add('proyecto-cerrar');
            refImgAmpl.current.addEventListener("animationend", (e) => {
              root.unmount();                           // elimina el nodo del dom
            });
        }
    }

  return (
    <div  className='proyecto-contenedor'>
        <img src={require(`../img/proyectos/${infoProyecto.imagen}`)} className="proyecto-img" onClick={abrirImg}/>
        <h1 className='proyecto-pie'>{infoProyecto.titulo}</h1>
    </div>
  )
}

export default Proyecto