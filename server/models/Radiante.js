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
      type: Schema.Types.ObjectId, ref: "ordenes"
    }
  }
);

const Order = mongoose.model("Radiantes", RadiantSchema);

export default Order;