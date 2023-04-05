import express from "express";
import { radianteController } from "../controllers/radianteController.js";

const router = express.Router();

router.get("/", radianteController.findAll.bind(radianteController));
router.delete("/radiante/:id", radianteController.deleteById.bind(radianteController));
router.post("/postRadiante", radianteController.create.bind(radianteController));
router.put("/updateRadiante/:id", radianteController.updateById.bind(radianteController));

export default router;