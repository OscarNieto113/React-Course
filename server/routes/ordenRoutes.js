import express from "express";
import { ordenController } from "../controllers/ordenController.js";

const router = express.Router();

router.get("/", ordenController.findAll.bind(ordenController));
router.delete("/radiante/:id", ordenController.deleteById.bind(ordenController));
router.post("/postRadiante", ordenController.create.bind(ordenController));
router.put("/updateRadiante/:idRadiante", ordenController.updateById.bind(ordenController));

export default router;