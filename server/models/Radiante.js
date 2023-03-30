import mongoose, { Schema } from "mongoose";

const RadiantSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    descripcion: {
      type: String
    },
    urlRadiante: {
      type: String
    },
    orden: {
      type: Schema.Types.ObjectId, ref: "Ordenes"
    }
  }
);

const Radiante = mongoose.model("Radiantes", RadiantSchema);

export default Radiante;