import axios from "axios"

const baseURL = import.meta.env.VITE_BASEURL

export const createOrden = async (data) => {

  const { newNameOrden } = data

  try {
    const response = await axios.post(`${baseURL}/orden/postOrden`, {
      newNameOrden
    })

    return response.data

  } catch (err) {
    console.log(err.message)
  }
}

export const findAll = async () => {
    try {
        const ordenes = await axios.get(`${baseURL}/orden/`);
        return ordenes.data;
    } catch (err) {
        console.log(err.message);
    }
}