import Radiante from "../models/Radiante.js";
import Orden from "../models/Orden.js";
import mongoose from "mongoose";

export const getRadiantes = async (req, res) => {
  try {
    const radiantes = await Radiante.find().populate("order");

    res.status(200).json(radiantes);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

export const postRadiante = async (req, res) => {
  try {
    const { nombreRadiante, nombreOrden, descripcionRadiante } = req.body;
    //const { filename } = req.file

    const ordenes = await Orden.findOne({ nombre: nombreOrden });

    const radiante = new Radiante({
      nombre: nombreRadiante,
      descripcion: descripcionRadiante,
      urlRadiante: "https://www.google.com/url?sa=i&url=https%3A%2F%2Faminoapps.com%2Fc%2Flibros-aminoespanol%2Fpage%2Fitem%2Fshallan-davar%2FpzjY_WLFpIqarEpDDkzKvXWZ8bDx4obKMm&psig=AOvVaw2ZF1NDri3xo9NY2wTn_O2d&ust=1680273648894000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCYzKPxg_4CFQAAAAAdAAAAABAD",
      orden: ordenes._id
    });
    
    await radiante.save();

    const radiantes = await Radiante.find().populate("ordenes")

    res.status(201).send(radiantes);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

export const deleteRadiante = async (req, res) => {
  try {
      const { id } = req.params;
      const _id = new mongoose.Types.ObjectId(id);
      await Radiante.deleteOne({ _id: _id });
      //const radiantes= await Radiante.find().populate("orden");
      res.status(200).json(_id);
     
  }
  catch (err) {
      res.status(404).send({ message: err.message })
  }
};

export const updateRadiante = async (req, res) => {
  try {
    const { newNombreRadiante, nameOrden, newDescripcion } = req.body;
    const { idRadiante } = req.params;
    
    const ID = new mongoose.Types.ObjectId(idRadiante);
    const orden = await Orden.findOne({ nombre: nameOrden });
    const radiante = await Radiante.findOne({ _id: ID });
    
    radiante.nombre = newNombreRadiante;
    radiante.descripcion = newDescripcion;
    
    if (req.file) {
      const { filename } = req.file
      platillo.imageUrl = filename;
    }
    
    radiante.orden = orden._id;
    
    await radiante.save();

    const radiantes = await Radiante.find().populate("ordenes")

    res.status(201).send(radiantes);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};