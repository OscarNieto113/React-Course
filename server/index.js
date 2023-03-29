/* IMPORTS DE LIBRERÍAS */
import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet"; //Setting http headers
import morgan from "morgan"; //HTTP request logger middleware
import cors from "cors"; //Use different options from the brwoser
import dotenv from "dotenv"; //ENV variables
import mongoose from "mongoose"; //MongoDB
import multer from "multer"; //Upload files
import { fileURLToPath } from "url";
import path from "path";

/* IMPORTS DE RUTAS */
import radianteRoutes from "./routes/radianteRoutes.js";
import ordenRoutes from "./routes/ordenRoutes.js"

const app = express();

/* CONFIGURACION DE MIDDLEWARES */
const __filename = fileURLToPath(import.meta.url) //import.meta.url obtiene la url del server y fileURLtoPath la convierte en directorio adecuado al OS (incluye el archivo)
const __dirname = path.dirname(__filename) //path.dirname Obtiene el directorio de un archivo sin el archivo: de C:/Documentos/test.txt regresa -> C:/Documentos
dotenv.config();
app.use(express.json()); //Parsea los Jsons
app.use(helmet()); //Protege las APIs y no muestra las tecnologías usadas del Backend los headers
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); //Permite recibir peticiones de un orígen diferente para leer recursos del Backend
app.use(morgan("common")); //Loggea las peticiones hechas al Backend
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); //Parseo del form
app.use(cors()); //Permite recibir peticiones de diferentes orígenes para cargar recursos al Backend (Se puede configurar para que acepte sólo de ciertos dominios)

/*Ruta para acceder a las imagenes serán recursos estáticos en local,
  en producción no es necesario, se guardan en el bucket y se consultan igual
*/
app.use("/images", express.static(path.join(__dirname, 'public/images'))) 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function(req, file, cb) {
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  }
});

const upload = multer({ storage })

app.use(upload.single('urlImg'))

/* CONFIGURACION DE RUTAS */
app.use("/radiante", radianteRoutes);
app.use("/orden", ordenRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5001;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: process.env.DB_NAME
}).then(() => {
  app.listen(PORT, () => console.log(`Server Port ${ PORT }`));
}).catch((error) => console.log(`${ error } did not connect`));