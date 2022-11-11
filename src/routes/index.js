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
    console.log('Index szzzzz');
    res.send('recived');
});


router.post('/guardarinfojugadores',(req,res)=>{
    console.log(req.body);
    const newJugador ={
        nombre: req.body.nombre,
        mejorTiempo: req.body.mejorTiempo
    };
    console.log(req.body);
    db.ref('Jugadores').push(newJugador);

    res.send('recived');
});
module.exports = router;