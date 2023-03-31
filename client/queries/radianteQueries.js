import axios from "axios"

const baseURL = import.meta.env.VITE_BASEURL

export const createRadiante = async (data) => {
  const { nombreRadiante, descripcionRadiante, nombreOrden, urlImg } = data //"Name" de html
  
  /* Para subir archivos es necesario hacer la consulta de axios como está abajo y transformar
  los datos como está abajo con FormData */

  const formData = new FormData();

  formData.append('nombreRadiante', nombreRadiante)
  formData.append('descripcionRadiante', descripcionRadiante)
  formData.append('nombreOrden', nombreOrden)
  formData.append('urlImg', urlImg[0])

  try {
    const response = await axios({
      url: `${baseURL}/radiante/postRadiante`,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" } //para indicar que se está enviando un formulario con datos binarios
    })

    return response.data
  } catch (err) {
    console.log(err.message)
  }
}


export const findAllRadiante = async () => {
    try {
        const radiantes = await axios.get(`${baseURL}/radiante/`);
        return radiantes.data;
    } catch (err) {
        console.log(err.message);
    }
}

/*
export const deletePlatillos = async (id) => {
  try {
      const platillos = await axios.delete(`${baseURL}/platillos/platillo/${id}`);
      return platillos.data;
  } catch (err) {
      console.log(err.message);
  }
}

export const updatePlatillo = async (data, idPlatillo) => {
  const { newNameComida, description, nameRestaurante, urlImg} = data
  
  const formData = new FormData();

  formData.append('newNameComida', newNameComida)
  formData.append('description', description)
  formData.append('nameRestaurante', nameRestaurante)
  formData.append('urlImg', urlImg[0])

  try {
    const response = await axios({
      url: `${baseURL}/platillos/updatePlatillo/${idPlatillo}`,
      method: "PUT",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" }
    })
    
    return response.data
  } catch (err) {
    console.log(err.message)
  }
}
*/