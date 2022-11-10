import './App.css';
import React,{useState} from 'react';
import Menu from './component/Menu'
import Inicio from './component/Inicio'
import SobreMi from './component/SobreMi'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; /* Routes=switch */

function App() {

 const [estadoMenu, setEstadoMenu] = useState(false);   {/* Si el menu está abierto estará en true sino en false */}
 let setEMenu =(estado)=> {
  setEstadoMenu(estado)
  console.log(estadoMenu)
 }

 let NotFound=()=>{return <>Pagina no existente</>;}

  return (
    <>
      <Menu setEMenu={setEMenu}/> 
      <Router>
        <Routes>
          <Route path="/" element={<Inicio estadoMenu={estadoMenu}/>}/>
          <Route path="/sobreMi" element={<SobreMi estadoMenu={estadoMenu}/>}/>
          <Route path="*" component={NotFound}/>
        </Routes>
      </Router>
      
   </>
  );
}

export default App;
