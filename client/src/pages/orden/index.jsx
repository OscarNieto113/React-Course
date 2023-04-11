import React from 'react'
import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import Select from '../../components/Select'
import SearchBar from '../../components/SearchBar'
import { findAllOrden } from '../../../queries/ordenQueries';
import { findAllRadiante } from '../../../queries/radianteQueries';

const ListOrden = () => {
  const [radiante, setRadiante] = useState([]);
  const [loading, setLoading] = useState(true)
  const [selectData, setSelectData] = useState("1")
  const [searchData, setSearchData] = useState("")
  const [orden, setOrden] = useState([{ nombre: "" }]);

  useEffect(() => {
    findAllRadiante().then((res) => {
      setRadiante(res);
      setLoading(false)
    })
    findAllOrden().then((res) => {
      setOrden(res)
    })
  }, []);

  /* 
  Se utiliza una nueva variable para representar los platillos filtrados y no modificar el arreglo
  actual. Las condiciones puestas salen del análisis del comportamiento de los filtros.
  El nombre y la descripción son filtros aditivos. Los resultados que encuentres dentro del arreglo
  que coincidan con el nombre y aquellos que coincidan con la descripción formaran un resultado 
  en conjunto con todos los platillos que cumplan una u otra condición.
  El restaurante es un filtro restrictivo. Al combinar los resultados del arreglo anterior
  el restaurante limita aquellos que no tengan el mismo nombre. Esto acota el número de elementos
  del arreglo.
  Se convierte el arreglo final en un set para eliminar elementos duplicados
  */

  const radianteFilter = radiante.filter((caballero) => {
    if ((caballero.nombre && caballero.nombre.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())) || 
    (caballero.descripcion && caballero.descripcion.toLocaleLowerCase().includes(searchData.toLocaleLowerCase()))&& 
    selectData == "1") {
      return caballero
    } else if ((caballero.nombre && caballero.nombre.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())) || 
    (caballero.descripcion && caballero.descripcion.toLocaleLowerCase().includes(searchData.toLocaleLowerCase())) && 
    (caballero.orden.nombre && caballero.orden.nombre === selectData)) {
      return caballero
    }
  })

  const filteredRadiante = [...new Set(radianteFilter)]

  /* Detección de los valores al cambiar el dropdown */
  const handleSelectData = (event) => {
    setSelectData(event.target.value)
  }

  /* Detección de los valores al escribir en el buscador */
  const handleSearchData = (event) => {
    setSearchData(event.target.value)
  }

  return (
    <div className='flex flex-col p-12 w-full h-full pt-[5.5rem]'>
      <h1 className="text-2xl font-bold mb-3">Búsqueda de Radiantes</h1>
      {/* Filtros */}
      <div className='flex w-full flex-wrap justify-between gap-3'>
        <div className='md:w-1/5 w-full'>
          <Select name="nombreOrden" options={ orden } label="Orden" isForm={false} onChangeHandler={ handleSelectData }/>
        </div>
        <div className='md:w-3/4 w-full'>
          <SearchBar type="text" label="Busqueda" placeholder="Busca un radiante con depresion" name="busqueda" onChangeHandler={ handleSearchData } />
        </div>
      </div>

      {/* Catálogo Platillos */}
      <div className='mt-10 grid grid-cols-3 gap-10'>
          {filteredRadiante && filteredRadiante.length > 0 
            ? filteredRadiante.map((caballero, id) => (
              <Card
              key={id}
              id = {caballero._id}
              setRadiante={setRadiante}
              nombre={caballero.nombre}
              orden={caballero.orden.nombre}
              descripcion={caballero.descripcion}
              urlRadiante={caballero.imageUrl}
              ordenes={orden}
              />
            )) 
            : loading 
            ?  (<h1 className='font-bold text-3xl col-span-3'>Cargando...</h1>)
            : (<h1 className='font-bold text-3xl col-span-3'>No hay radiantes con los filtros que buscas</h1>)
          }
      </div>

    </div>
  )
}

export default ListOrden