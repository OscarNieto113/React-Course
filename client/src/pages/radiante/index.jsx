import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { useForm, FormProvider } from "react-hook-form";
import Button  from "../../components/Button"
import InputForm from '../../components/InputForm'
import Select from '../../components/Select'
import TextArea from '../../components/TextArea'
import Navbar from '../../components/Navbar'
import { createOrden, findAllOrden } from '../../../queries/ordenQueries';
import { createRadiante, findAllRadiante } from '../../../queries/radianteQueries';

const Form = () => {
  const [radiante, setRadiante] = useState([]);
  const [orden, setOrden] = useState([{ nombre: "" }]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    findAllRadiante().then((res) => {
      setRadiante(res);
      setLoading(false)
    })
    findAllOrden().then((res) => {
      setOrden(res)
    })
  }, []);

  const methods = useForm();
  const reset = methods.reset

  const onSubmitRadiante = async (data) => {
    const response = await createRadiante(data)
    setRadiante(response)
    reset()
  }

  const onSubmitOrden = async (data) => {
    const response = await createOrden(data)    
    setOrden(response)
    reset()
  }

  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-auto justify-between">
    <Navbar/>
      {/* Formulario platillos */}
      <div className="md:col-span-1 col-span-2 w-full h-full p-12 ">
        <h1 className="text-2xl font-bold mb-3">Formulario Radiante</h1>
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-6"
            onSubmit={methods.handleSubmit(onSubmitRadiante)}
          >
            <InputForm
              type="text"
              name="nombre"
              label="Radiante"
              placeholder="Kaladin"
              defaultValue=""
            />
            <TextArea
              name="descripcion"
              label="Descripcion"
              placeholder="Un radiante con depresion"
              defaultValue=""
            />
            <Select
              name="orden"
              options={orden}
              label="Orden"
              defaultValue={orden[0].nombreOrden}
              isForm={true}
            />
            <InputForm
              type="file"
              name="urlImg"
              label="Imagen"
            />
            <Button type="submit" text="AGREGAR" />
          </form>
        </FormProvider>
      </div>

      {/* Formulario Orden */}
      <div className="md:col-span-1 col-span-2 w-full h-full p-12">
        <h1 className="text-2xl font-bold mb-3">Formulario Orden</h1>

        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-6"
            onSubmit={methods.handleSubmit(onSubmitOrden)}
          >
            <InputForm
              defaultValue=""
              type="text"
              name="nombreOrden"
              label="nombreOrden"
              placeholder="Truthwatchers"
            />
            <Button type="submit" text="AGREGAR" />
          </form>
        </FormProvider>
      </div>

      {/* Catálogo Radiante */}
      <div className="w-full h-full col-span-2 px-12 pb-10">
        <div className="grid grid-cols-3 gap-10">
          {radiante && radiante.length > 0 
            ? radiante.map((temRadiant, id) => (
              <Card
                key={id}
                id = {temRadiant._id}
                setRadiante={setRadiante}
                nombre={temRadiant.nombre}
                orden={temRadiant.orden.nombre}
                descripcion={temRadiant.descripcion}
                urlRadiante={temRadiant.imageUrl}
                ordenes={orden}
              />
            )) 
            : loading 
            ? (<h1 className='font-bold text-3xl col-span-3'>Cargando...</h1>)
            : (<h1 className='font-bold text-3xl col-span-3'>No hay Radiantes</h1>)
          }
        </div>
      </div>
    </div>
  );
};

export default Form;