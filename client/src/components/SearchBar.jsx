import React from 'react'

const SearchBar = ({ type, label,  placeholder, name, onChangeHandler }) => {

  return (
    <div className="flex flex-col gap-2">
    	<label htmlFor={ name } className="font-semibold text-md" >{ label } </label>
        <input
          type={ type }
          id={name}
          className="p-2 rounded-md shadow-md ring-1 ring-gray-200 w-full"
          placeholder={ placeholder }
          onChange={onChangeHandler}
        />
    </div>
  )
}

export default SearchBar