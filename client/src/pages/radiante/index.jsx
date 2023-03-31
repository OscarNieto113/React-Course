import React, { useEffect, useState } from "react";
//import Card from "../../components/Card";
import { useForm, FormProvider } from "react-hook-form";
//import Button  from "../../components/Button"
import InputForm from '../../components/InputForm'
//import Select from '../../components/Select'
//import TextArea from '../../components/TextArea'
//import Navbar from '../../components/Navbar'
import { createOrden, findAllOrden } from '../../queries/restauranteQueries.js';
import { createRadiante, findAllRadiante } from '../../queries/platilloQueries.js';

const Form = () => {
  const [food, setFood] = useState([]);
  const [restaurants, setRestaurants] = useState([{ nombre: "" }]);

  useEffect(() => {
    getPlatillos().then((res) => {
      setFood(res);
    })
    getRestaurantes().then((res) => {
      setRestaurants(res)
    })
  }, []);

  const methods = useForm();
  const reset = methods.reset

  const onSubmitPlatillo = async (data) => {
    const response = await postPlatillo(data)
    setFood(response)
    reset()
  }

  const onSubmitRestaurante = async (data) => {
    const response = await postRestaurante(data)    
    setRestaurants(response)
    reset()
  }

  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-auto justify-between">
    <Navbar/>
      {/* Formulario platillos */}
      <div className="md:col-span-1 col-span-2 w-full h-full p-12 ">
        <h1 className="text-2xl font-bold mb-3">Formulario Platillos</h1>
        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-6"
            onSubmit={methods.handleSubmit(onSubmitPlatillo)}
          >
            <InputForm
              type="text"
              name="nameComida"
              label="Platillo"
              placeholder="Hamburguesa"
              defaultValue=""
            />
            <TextArea
              name="description"
              label="Descripcion"
              placeholder="Una deliciosa Hamburguesa"
              defaultValue=""
            />
            <Select
              name="nameRestaurante"
              options={restaurants}
              label="Restaurante"
              defaultValue={restaurants[0].nombre}
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

      {/* Formulario Restaurantes */}
      <div className="md:col-span-1 col-span-2 w-full h-full p-12">
        <h1 className="text-2xl font-bold mb-3">Formulario Restaurantes</h1>

        <FormProvider {...methods}>
          <form
            className="flex flex-col gap-6"
            onSubmit={methods.handleSubmit(onSubmitRestaurante)}
          >
            <InputForm
              defaultValue=""
              type="text"
              name="nameNewRestaurante"
              label="Restaurante"
              placeholder="Mc Donald's"
            />
            <Button type="submit" text="AGREGAR" />
          </form>
        </FormProvider>
      </div>

      {/* Catálogo Radiantezzz */}

    </div>
  );
};

export default Form;