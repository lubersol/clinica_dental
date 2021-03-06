//Importar e invocar el modulo de express
const express = require('express');
const app = express();

//CORS
const cors = require('cors');
app.use(cors());

//Importar mysql2
const mysql = require('mysql2/promise');

//Importar rutas
const routesCitas = require('./routes/citaRouter.js');
const routesUser = require('./routes/userRouter.js');

//Puerto para el servidor
const PORT = process.env.PORT || 3000;

//Conexion a la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'clinica_dental',
    password: '1234'
})
    //PARA VER SI ESTAMOS CONECTADOS A LA BD
    .then(() => console.log('Sequelize connected'))
    .catch((error) => console.log('Error Sequelize  connection ', error));

app.use(express.json()); //para evitar que el req.body sea undefined

app.use(function (req, res, next) { //para evitar el error CORS
    res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"); //permite peticiones con las cabeceras enumeradas
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Ruta por defecto con mensaje de bienvenida en formato JSON.
// app.get('/', (req, res) => res.status(200).send({
//     message: 'Bienvenido a nuestra clínica dental'
// }));

//Middleware para rutas usuario y citas
app.use('/api/user', routesUser);
app.use('/api/cita', routesCitas);


app.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT}`));
