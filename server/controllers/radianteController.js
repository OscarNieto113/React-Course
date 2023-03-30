import BaseController from "./baseController.js";
import Radiante from "../models/Radiante.js";

class RadianteController extends BaseController {
    constructor() {
        super(Radiante, "orden");
    }

}


export const radianteController =  new RadianteController();