import './App.css';
import React,{useState} from 'react';
import Menu from './component/Menu'
import Inicio from './component/Inicio'

function App() {

 const [estadoMenu, setEstadoMenu] = useState(false);   {/* Si el menu está abierto estará en true sino en false */}
 let setEMenu =(estado)=> {
  setEstadoMenu(estado)
  console.log(estadoMenu)
 }

  return (
    <>
      <Menu setEMenu={setEMenu}/> 
      <Inicio estadoMenu={estadoMenu}/>
   </>
  );
}

export default App;
