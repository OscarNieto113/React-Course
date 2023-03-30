import Orden from "../models/Orden.js";
import BaseController from "./baseController.js";


class OrdenController extends BaseController {
    constructor() {
        super(Orden, '');
    }

}


export const ordenController =  new OrdenController();