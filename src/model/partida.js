class Partida{
    idHost;
    nameParty;
    jugadores;
    vueltas;
    cantidadJugadores;
    constructor(idHost, nameParty, vueltas, cantidadJugadores, jugador){
        console.log(`Se ha creado la partida ${nameParty} con el host ${idHost}`);
        this.idHost = idHost;
        this.nameParty = nameParty
        this.jugadores = [jugador]
        this.vueltas = vueltas;
        this.cantidadJugadores = cantidadJugadores;
    }

    nuevoJuagador(jugador) {
        this.jugadores.push(jugador);
    }
}

module.exports = Partida;