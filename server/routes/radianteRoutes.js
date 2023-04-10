import express from "express";
import { radianteController, postRadiante2 } from "../controllers/radianteController.js";

const router = express.Router();

router.get("/", radianteController.findAll.bind(radianteController));
router.delete("/radiante/:id", radianteController.deleteById.bind(radianteController));
router.post("/postRadiante", postRadiante2);
router.put("/updateRadiante/:id", radianteController.updateById.bind(radianteController));

export default router;