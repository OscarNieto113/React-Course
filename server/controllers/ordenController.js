import Orden from "../models/Orden.js";

export const getOrden = async (req, res) => {
    try {
      const ordenes = await Orden.find();
      res.status(200).json(ordenes);
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  };