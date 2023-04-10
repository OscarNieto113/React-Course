import axios from "axios"

const baseURL = import.meta.env.VITE_BASEURL

export const createRadiante = async (data) => {
  const formData = new FormData();
  const { nombre, descripcion, orden, urlImg } = data //"Name" de html
  
  /* Para subir archivos es necesario hacer la consulta de axios como está abajo y transformar
  los datos como está abajo con FormData */
  formData.append('nombre', nombre)
  formData.append('descripcion', descripcion)
  formData.append('orden', orden)
  formData.append('urlImg', urlImg[0])
  for (const [key, value] of formData.entries()) {
    console.log(key + ": " + value);
  }

  try {
    const response = await axios({
      url: `${baseURL}/radiante/postRadiante`,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" } //para indicar que se está enviando un formulario con datos binarios
    })
    console.log(response.data)
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


export const deleteByIdRadiante = async (id) => {
  try {
      const radiantes = await axios.delete(`${baseURL}/radiante/radiante/${id}`);
      return radiantes.data;
  } catch (err) {
      console.log(err.message);
  }
}

export const updateByIdRadiante = async (data, idRadiante) => {
  const { nombre, descripcion, orden, urlImg} = data
  
  const formData = new FormData();

  formData.append('nombre', nombre)
  formData.append('descripcion', descripcion)
  formData.append('orden', orden)
  formData.append('urlImg', urlImg[0])

  try {
    const response = await axios({
      url: `${baseURL}/radiante/updateRadiante/${idRadiante}`,
      method: "PUT",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" }
    })
    
    return response.data
  } catch (err) {
    console.log(err.message)
  }
}
