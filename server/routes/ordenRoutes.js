import express from "express";
import { postOrden, /*deleteOrden, updateOrden,*/ getOrden } from "../controllers/ordenController.js";

const router = express.Router();

router.get("/", getOrden);
//router.delete("/orden/:id", deleteOrden);
router.post("/postOrden", postOrden);
//router.put("/updateOrden/:idOrden", updateOrden);

export default router;