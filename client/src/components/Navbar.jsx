import React from 'react'
import { IoIosAddCircleOutline, IoIosSearch } from "react-icons/io"
import NavbarItem from './NavbarItem'

const Navbar = () => {

  return (
    <nav className="flex gap-6 py-2 px-6 border-blue-200 bg-blue-500 fixed w-full">
      <NavbarItem navigation="/">
        <IoIosAddCircleOutline className='text-white text-2xl'/>
      </NavbarItem>
      <NavbarItem navigation="/ListOrden" >
        <IoIosSearch className='text-white text-2xl' />
      </NavbarItem>
    </nav>
  )
}



export default Navbar