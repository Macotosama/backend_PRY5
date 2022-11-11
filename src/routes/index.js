const {Router} = require('express');
const router = Router();
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL:'https://node-firebase-d105d-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get('/',(req,res)=>{
    console.log('Index szzzzz');
    res.send('recived');
});


router.post('/guardarinfojugadoresr',(req,res)=>{
    const newJugador ={
        nombre: req.body.nombre,
        mejorTiempo: req.body.mejorTiempo

    };
    console.log(req.body);
    db.ref('Jugadores').push(newJugador);
    res.send('recived');
});
module.exports = router;