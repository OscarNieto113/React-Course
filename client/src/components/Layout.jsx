import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

/* 
Se utiliza este layout para realizar la "single web application" con las rutas.
El outlet es lo que muestra los otros componentes de las páginas cuando ingresan a una ruta.
En este caso mostrarán en <Outlet /> los componentes correspondientes de las rutas "/" y "dish-restaurant"
La configuración de este comportamiento se encuentra en el App.jsx.
*/
const Layout = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Layout