//Importar e invocar el modulo de express
const express = require('express');//para construir api rest
const app = express();

//Importar mysql2
const mysql = require('mysql2/promise');

//Importar rutas
let routesCitas = require('./routes/citaRouter.js');
let routesUser = require('./routes/userRouter.js');

//Puerto para el servidor
const PORT = 3000;

//Conexion a la base de datos
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'clinica_dental',
    password: '1234'
})
    //PARA VER SI ESTAMOS CONECTADOS A LA BD
.then(() => console.log('Sequelize connected'))
.catch((error) => console.log('Error Sequelize connection', error));

app.use(express.json()); //para evitar que el req.body sea undefined

app.use(function(req, res, next) { //para evitar el error CORS
    res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //permite peticiones con las cabeceras enumeradas
    // res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});

//Enrutado endpoint de citas
app.get('/', async(req, res) => {
    try {
        const db = await conexion;
        const [citas] = await db.execute(`SELECT * FROM citas`);
        console.log(citas)
        res.send({
            citas
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Ha habido un problema consultando las citas'
        });
    }
});

//Middleware para rutas usuario y citas
app.use('/user', routesUser);
app.use('/cita', routesCitas);

//ruta simple
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to clinica dental" });
//   });
  

app.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT}`));
