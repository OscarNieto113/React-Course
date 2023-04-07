import React from 'react'
import { IoIosAddCircle, IoIosSearch } from "react-icons/io"
import NavbarItem from './NavbarItem'

const Navbar = () => {

  return (
    <nav className="flex gap-6 py-2 px-6 border-indigo-900 bg-indigo-900 fixed w-full">
      <NavbarItem navigation="/">
        <IoIosAddCircle className='text-white text-2xl'/>
      </NavbarItem>
      <NavbarItem navigation="/ListOrden" >
        <IoIosSearch className='text-white text-2xl' />
      </NavbarItem>
    </nav>
  )
}



export default Navbar