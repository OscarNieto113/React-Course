import React from 'react'
import { useFormContext } from 'react-hook-form'


const TextArea = ({ label, name, placeholder, defaultValue }) => {
  const { register } = useFormContext()

  return (
     <div className="flex flex-col gap-2">
           <label htmlFor="comment" className="font-semibold text-md">Escriba aquí...</label>
           <textarea {...register(name)} defaultValue={ defaultValue } className='p-1 rounded-md shadow-md ring-1 ring-gray-200 w-full h-20 px-3' id={ name } placeholder={ placeholder }  />
       </div>
  )
}

export default TextArea