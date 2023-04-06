import React from 'react'
import { useFormContext } from 'react-hook-form'


const TextArea = ({ label, name, placeholder, defaultValue }) => {
  const { register } = useFormContext()

  return (
     <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label for="comment" class="sr-only">Escriba aquí...</label>
           <textarea {...register(name)} defaultValue={ defaultValue } className='w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400' id={ name } placeholder={ placeholder }  ></textarea>
       </div>
    </div>
  )
}

export default TextArea