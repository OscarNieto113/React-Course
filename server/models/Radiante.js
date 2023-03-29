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
    order: {
      type: Schema.Types.ObjectId, ref: "Orders"
    }
  }
);

const Order = mongoose.model("Radiants", RadiantSchema);

export default Order;