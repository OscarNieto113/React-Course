import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import Button  from "../components/Button"
import InputForm from '../components/InputForm'
import Select from '../components/Select'
import TextArea from '../components/TextArea'
import { updateByIdRadiante } from "../../queries/radianteQueries";
import { useForm, FormProvider } from "react-hook-form";

export default function Modal({ id, nombre, orden, ordenes, descripcion, setRadiante }) {
  const [showModal, setShowModal] = useState(false);

  const methods = useForm();
  const reset = methods.reset

  const onSubmitUpdateRadiante = async (data) => {
    const response = await updateByIdRadiante(data, id)
    setRadiante(response)
    setShowModal(false)
  }

  return (
    <>
      <button
        className="w-full h-full self-end py-1 hover:bg-gray-200 rounded-br-2xl border-2 border-gray-100"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <EditIcon className='text-blue-600'/>
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Actualiza los datos del Raditante
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      Cerrar
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <FormProvider {...methods}>
                    <form
                      className="flex flex-col gap-6"
                      onSubmit={methods.handleSubmit(onSubmitUpdateRadiante)}
                    >
                      <InputForm
                        type="text"
                        name="nombre"
                        label="Nombre Radiante"
                        placeholder="Hamburguesa"
                        defaultValue={ nombre }
                      />
                      <TextArea
                        name="descripcion"
                        label="Descripcion"
                        placeholder="Una deliciosa Hamburguesa"
                        defaultValue={ descripcion }
                      />
                      <Select
                        name="orden"
                        options={ordenes}
                        label="Orden"
                        defaultValue={orden}
                      />
                      <InputForm
                        type="file"
                        name="urlRadiante"
                        label="Imagen"
                        placeholder="kaladin.jpg"
                      />
                      {/*footer*/}
                      <div className="flex items-center justify-between gap-6 p-6 border-t border-solid border-slate-200 rounded-b">
                        <Button type="submit" text="ACTUALIZAR" />
                        <button
                          className="text-red-500 hover:bg-gray-100 rounded-lg font-bold uppercase p-2 text-sm ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => {
                            setShowModal(false)
                            reset()
                          }}
                        >
                          Cerrar
                        </button>
                      </div>
                    </form>
                  </FormProvider>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}