import Orden from "../models/Orden.js";

export const getOrden = async (req, res) => {
    try {
      const ordenes = await Orden.find();
      res.status(200).json(ordenes);
    } catch (err) {
      res.status(404).send({ message: err.message });
    }
  };

export const postOrden = async (req, res) => {
    try {
      const { nameNewOrden} = req.body;
  
      const orden = new Orden({
        nombre: nameNewOrden
      });
  
      await orden.save();
  
      const ordenes = await Orden.find()
  
      res.status(201).send(ordenes);
    } catch (err) {
      res.status(404).send({ message: err.message })
    }
}