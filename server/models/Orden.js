import mongoose, { Schema } from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    descripcion: {
        type: String,
      }
  }
);

const Order = mongoose.model("Orders", OrderSchema);

export default Order;