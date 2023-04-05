import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../components/Modal'
import { deleteByIdRadiante } from "../queries/radianteQueries";

const Card = ({setRadiante, id, nombre, orden, descripcion, urlRadiante, ordenes }) => {
  const baseURL = import.meta.env.VITE_BASEURL
  return (
    <div className='md:col-span-1 col-span-3'>
      <div className="flex rounded-2xl overflow-hidden shadow-xl ">
        { /* IMAGE SIDE */ }
        <div className='w-1/3'>
          <img className="w-full h-full object-cover object-center" src={ `${baseURL}/images/${urlRadiante}` } alt={ nombre } />
        </div>

        { /* INFO ABOUT THE DISH */}
        <div className="w-2/3 flex flex-col justify-between pt-4">
          <h5 className="font-bold text-xl ml-3 mr-3">{ nombre }</h5>
          <h6 className="text-md ml-3 mr-3">{ orden }</h6>
          <p className="text-gray-700 text-sm ml-3 mr-3 overflow-hidden mb-4">
            { descripcion.length < 35 ?  descripcion : `${descripcion.substr(0, 35)}...` }
          </p>
          <div className='grid grid-cols-2 justify-items-center'>
            <button  onClick = { async () => {
              const radiantes = await deleteByIdRadiante(id);
              setRadiante(radiantes);
              }} className='w-full h-full self-end py-1 hover:bg-gray-200 border-2 border-gray-100'> 
              <DeleteIcon  className='text-red-600'/>
            </button>
            <Modal
              id={id}
              nombre={nombre}
              orden={orden}
              descripcion={descripcion}
              ordenes={ordenes}
              setRadiante={setRadiante}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;