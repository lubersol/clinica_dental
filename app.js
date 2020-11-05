const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const PORT = 3000;

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'clinica_dental',
    password: '1234'
})

app.use(express.json()); //para evitar que el req.body sea undefined

app.use(function(req, res, next) { //para evitar el error CORS
    res.header("Access-Control-Allow-Origin", "*"); //permite hacer peticiones desde todos los orígenes
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //permite peticiones con las cabeceras enumeradas
    // res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
});

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

//Enrutado a endpoints de user
app.use('/users', usersRouter);

//Enrutado a endpoints de citas
app.use('/citas', ordersRouter);


app.listen(PORT, () => console.log(`Servidor funcionando en puerto ${PORT}`));
