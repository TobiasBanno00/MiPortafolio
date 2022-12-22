import './App.css';
import { createRoot} from "react-dom/client";
import React,{useState, useEffect} from 'react';
import Menu from './component/Menu'
import Cargando from './component/Cargando'
import Rutas from './component/Rutas';
import { useLocation } from 'react-router-dom';   // Solo se puede usar dentro del enrutado, por eso enruto en el index



function App() {

 const [estadoMenu, setEstadoMenu] = useState(false);   {/* Si el menu Responsivo está abierto estará en true sino en false */}
 let setEMenu =(estado)=> {
  setEstadoMenu(estado)
  console.log(estadoMenu)
 }

 let location = useLocation();                             // Ruta dónde nos encontramos

 //----------------------------------------------------CAMBIO DE RUTA
 let cambiarRuta =()=>{
  const rutas = document.createElement("div");    
        rutas.id = "rutas";
        document.body.appendChild(rutas);           
        const root = createRoot(rutas);  
        
  root.render( )
  
 } 
 
 useEffect(()=>{
  setTimeout( cambiarRuta , 500);
 },location) 


 
 

  return (
      <>
      <Cargando location={location}/>
      <Menu setEMenu={setEMenu}/>
      <Rutas estadoMenu={estadoMenu}/> 
      </>
  );
}

export default App;
