import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());

// Habilitar express.json
app.use(express.json());

app.use('/api', router);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

