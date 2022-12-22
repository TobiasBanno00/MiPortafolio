import React from 'react'
import {Routes, Route} from "react-router-dom"; /* Routes=switch */
import Inicio from './Inicio'
import SobreMi from './SobreMi'
import Habilidades from './Habilidades'
import Proyectos from './Proyectos'
import Contacto from './Contacto'
import NotFound from './NotFound'



function Rutas({estadoMenu}) {
  return (
    <>
   
      
        <Routes>
            <Route path="/" element={<Inicio estadoMenu={estadoMenu}/>}/>
            <Route path="/sobreMi" element={<SobreMi estadoMenu={estadoMenu}/>}/>
            <Route path="/habilidades" element={<Habilidades estadoMenu={estadoMenu}/>}/>
            <Route path="/proyectos" element={<Proyectos estadoMenu={estadoMenu}/>}/>
            <Route path="/contacto" element={<Contacto estadoMenu={estadoMenu}/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      
    
    </>
  )
}

export default Rutas;