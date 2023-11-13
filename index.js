const express = require("express");
const cors = require('cors')
const app = express();
const atheleteRoutes = require('./routes/athelete');
const userRoutes = require('./routes/users');
// const dotenv = require('dotenv')
// dotenv.config()
require('dotenv').config();


// Database conection

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function main() {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log('Database connected');
}
main().catch((err) => console.log(err));


app.use(cors());
app.use(express.json())


// Ruta para obtener la lista de usuarios
app.use('/users', userRoutes)

app.use('/atheletes', atheleteRoutes);


// Iniciar el servidor en el puerto 3000
app.listen(process.env.PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${process.env.PORT}`);
});