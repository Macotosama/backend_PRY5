//import Partida from './partida';
var Partida = require('../model/partida');
var Jugador = require('../model/jugador');
//import Jugador from './jugador';

class Administrador {
    partidas = [];
    constructor() {
        this.partidas = [];
    }

    findPartida(nombre) {
        return this.partidas.find(partida => partida.nameParty === nombre);
    }

    existPartida(name) {
        let res = this.partidas.indexOf(partida => partida.nameParty === name);
        // console.log(`numero: ${res}`);
        if (res == -1) {
            return true;
        }
        return false;
    }

    setPartida(partida) {
        this.partidas.push(partida);
        // return this.
    }

    listPartidas() {
        var res = [];
        for (let i = 0; i < this.partidas.length; i++) {
            res.push({
                name: this.partidas[i].nameParty,
                jugadores: this.partidas[i].jugadores.length,
                vueltas: this.partidas[i].vueltas,
            });
        }
        // var res = this.partidas.map(partida => {
        //     name: partida.nameParty,
        //     jugadores: partida.jugadores,
        //     vueltas: partida.vueltas,
        //     });
        // var res = this.partidas.map((x) => {name: x.nameParty});
        console.log(res);
        return res;
    }
}

module.exports = Administrador;