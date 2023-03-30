import express from "express";
import { postRadiante, /*deleteRadiante, updateRadiante,*/ getRadiantes } from "../controllers/radianteController.js";

const router = express.Router();

router.get("/", getRadiantes);
//router.delete("/radiante/:id", deleteRadiante);
router.post("/postRadiante", postRadiante);
//router.put("/updateRadiante/:idRadiante", updateRadiante);

export default router;