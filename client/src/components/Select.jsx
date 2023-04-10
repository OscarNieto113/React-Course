import React from "react";
import { useFormContext } from "react-hook-form";

/* 
Dentro de los props está la función onChangeHandler (viene desde la página DishRestaurant).
Se utiliza para detectar cambios en el tag de html <select>
Se transformo en un componente condicional por su uso distinto en las páginas.
En la página del formulario se utiliza como formulario, en la página de catálogo
se utiliza como filtro
*/
const Select = ({ label, name, options, placeholder, defaultValue, isForm, onChangeHandler }) => {
  const methods = isForm ? useFormContext() : undefined

  if (isForm) {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="font-semibold text-md">
          {label}
        </label>
        <select
          {...methods.register(name)}
          defaultValue={defaultValue}
          className="p-2 rounded-md shadow-md ring-1 ring-gray-200 w-full px-3"
          id={name}
          placeholder={placeholder}
        >
          {options.map((option, id) => (
            <option key={id} value={option.nombre}>
              {option.nombre}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-semibold text-md">
        {label}
      </label>
      <select
        defaultValue={defaultValue}
        className="p-2 rounded-md shadow-md ring-1 ring-gray-200 w-full px-3"
        id={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
      > 
        <option value={1}> Todos </option>
        {options.map((option, id) => (
          <option key={id} value={option.nombre}>
            {option.nombre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;