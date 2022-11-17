const {Router} = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../node-firebase-d105d-firebase-adminsdk-5v5vd-97087fdf70.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://node-firebase-d105d-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get('/inicio',(req,res)=>{
    db.ref('Jugadores').once('value',(snapshot)=>{
        const datos = snapshot.val();
        console.log(datos);
        res.send(datos);
    });
    // console.log(datos);
    // res.send(datos);
});

router.post('/estadisticas',(req,res)=>{
    db.ref('Estadisticas').once('value',(snapshot)=>{
        const datos = snapshot.val();
        console.log(datos);
        const temp = {
            jugadores: [{nombre: "a", posicion: 2}, {nombre: "b", posicion: 1}, {nombre: "c", posicion: 3}],
            pista: "pepe",
            id: "fsd3",
            ganador: "b",
            tiempo: "2:30",
            vueltas: 6,
        }
        res.send(temp);
    });
});

router.post('/guardarinfojugadores',(req,res)=>{
    console.log(req.body);
    const newJugador ={
        nombre: req.body.nombre,
        mejorTiempo: req.body.mejorTiempo
    };
    // console.log('El resultado es =>> ');
    // console.log(req.body);
    db.ref('Jugadores').push(newJugador);

    res.send('recived');
});
module.exports = router;