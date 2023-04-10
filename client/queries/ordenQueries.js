import axios from "axios"

const baseURL = import.meta.env.VITE_BASEURL

export const createOrden = async (data) => {
  const { nombreOrden } = data

  try {
    const response = await axios.post(`${baseURL}/orden/postOrden`, {
      nombreOrden
    })

    return response.data

  } catch (err) {
    console.log(err.message)
  }
}

export const findAllOrden = async () => {
    try {
        const ordenes = await axios.get(`${baseURL}/orden/`);
        return ordenes.data;
    } catch (err) {
        console.log(err.message);
    }
}