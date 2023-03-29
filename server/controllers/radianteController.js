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

