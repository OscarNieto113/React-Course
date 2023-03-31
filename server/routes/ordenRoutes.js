import express from "express";
import { ordenController } from "../controllers/ordenController.js";

const router = express.Router();

router.get("/", ordenController.findAll.bind(ordenController));
router.delete("/orden/:id", ordenController.deleteById.bind(ordenController));
router.post("/postOrden", ordenController.create.bind(ordenController));
router.put("/updateOrden/:idOrden", ordenController.updateById.bind(ordenController));

export default router;