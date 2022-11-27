//import Partida from './partida';
var Partida = require('../model/partida');
var Jugador = require('../model/jugador');
//import Jugador from './jugador';

class Administrador {
    partidas = [];
    Administrador() {
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
}

module.exports = Administrador;