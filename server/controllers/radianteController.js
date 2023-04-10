import BaseController from "./baseController.js";
import Radiante from "../models/Radiante.js";
import Orden from "../models/Orden.js";

class RadianteController extends BaseController {
    constructor() {
        super(Radiante, "orden");
    }

}

export const postRadiante2 = async (req, res) => {
  try {
    const { nombre, descripcion, ordenes } = req.body;
    const { filename } = req.file

    const orden = await Orden.findOne({ nombreOrden: ordenes});

    const radiante = new Radiante({
      nombre: nombre,
      descripcion: descripcion,
      orden: orden._id,
      imageUrl: filename
    });
    
    await radiante.save();

    const radiantes = await Radiante.find().populate("orden")

    res.status(201).send(radiantes);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
}

export const radianteController =  new RadianteController();