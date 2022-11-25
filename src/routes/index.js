// import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
const {Router} = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../node-firebase-d105d-firebase-adminsdk-5v5vd-97087fdf70.json");
const { map } = require('../app');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://node-firebase-d105d-default-rtdb.firebaseio.com/'
});

const db = admin.database();


router.get('/buscarpartida/:nombre', async(req, res)=>{
    
});

router.get('/crearpartida/:nombre', async(req, res)=>{
    //en espera
});

router.get('/inicio',(req,res)=>{
    db.ref('Jugadores').once('value',(snapshot)=>{
        const datos = snapshot.val();
        console.log(datos);
        res.send(datos);
    });
    // console.log(datos);
    // res.send(datos);
});

//Este enlace solo envia las estadisticas de las partida, sin estar ligadas a los jugadores respectivos
router.get('/get/estadisticas',(req,res)=>{
    db.ref('estadisticas2').once('value',(snapshot)=>{
        const datos = snapshot.val();
        console.log(datos);
        res.send(datos);
    });
});

router.post('/get/estadisticas/byId', function(req,res,next){
    // const colRef = collection(db, 'Jugadores');
    // const result = await getDocs(query(colRef, where('idEstadistica', '==', req.params.id)));
    // // return getArrayFromCollection(result);
    // console.log(getArrayFromCollection(result));
    const ref = db.ref('Jugadores');
    console.log("vea la vara");
    console.log(req.body.idEstad);

    ref.orderByChild('idEstadistica')
      .equalTo(req.body.idEstad)
      .once('value')
      .then(function (snapshot) {
        var value = snapshot.val();
        console.log(value);
        res.send(value);
      })
      .catch(next);
  });


router.post('/estadisticas2',(req,res)=>{
    console.log(req.body);
    const newEstadistica ={
        ganador:req.body.ganador,
        tiempo:req.body.tiempo,
        pista:req.body.pista,
        vueltas:req.body.vueltas,
        
    };
    // console.log('El resultado es =>> ');
    var resi;
    resi = db.ref('Estadisticas').push(newEstadistica).key//.then((respuesta) => {res = respuesta.id});
    console.log(resi);
    guradarInfoJugadores(req.body.Jugadores,resi);

    res.send('recived');
});

function guradarInfoJugadores(nLista, idEstadistica){
    // console.log(nLista);
    nLista.map(function (jugador) {
        console.log(jugador)
        var newJugador = {
            nombre: jugador.nombre,
            posicion: jugador.posicion,
            idEstadistica: idEstadistica
        };
        db.ref('Jugadores').push(newJugador);
    })
}

router.post('/estadisticas',(req,res)=>{
    db.ref('Estadisticas').once('value',(snapshot)=>{
        const datos = snapshot.val();
        console.log(datos);
        const temp = [
            {
            detalles: 
                {
                    jugadores: [{nombre: "a", posicion: 2}, {nombre: "b", posicion: 1}, {nombre: "c", posicion: 3}],
                    ganador: "b",
                    tiempo: "2:30",
                    vueltas: 6,
                    pista: "pepe",
                    id: "fsd3",
                },
            pista: "pepe",
            id: "fsd3",
            cantidadJugadores: 3},
        
        
            {
            detalles: 
                {
                    jugadores: [{nombre: "a", posicion: 2}, {nombre: "b", posicion: 1}, {nombre: "c", posicion: 3}],
                    ganador: "b",
                    tiempo: "2:30",
                    vueltas: 6,
                    pista: "pepe",
                    id: "fsd3",
                },
            pista: "pepe",
            id: "fsd3",
            cantidadJugadores: 3},
        
        
        
            {
            detalles: 
                {
                    jugadores: [{nombre: "a", posicion: 2}, {nombre: "b", posicion: 1}, {nombre: "c", posicion: 3}],
                    ganador: "b",
                    tiempo: "2:30",
                    vueltas: 6,
                    pista: "pepe",
                    id: "fsd3",
                },
            pista: "pepe",
            id: "fsd3",
            cantidadJugadores: 3}
        
        ]
        res.send(temp);
    });
});

router.post('/guardarinfojugadores',(req,res)=>{
    console.log(req.body);
    const newJugador ={
        nombre: req.body.nombre,
        posicion: req.body.posicion,
        idEstadistica: req.body.idEstadistica
    };
    // console.log('El resultado es =>> ');
    // console.log(req.body);
    db.ref('Jugadores').push(newJugador);

    res.send('recived');
});
module.exports = router;