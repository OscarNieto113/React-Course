import mongoose, { Schema } from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
    }
  }
);

const Order = mongoose.model("Ordenes", OrderSchema);

export default Order;