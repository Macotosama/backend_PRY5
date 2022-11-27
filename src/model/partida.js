class Partida{
    Partida(idHost, nameParty, jugador){
        this.idHost = idHost;
        this.nameParty = nameParty
        this.jugadores = [jugador]
    }

    nuevoJuagador(jugador) {
        this.jugadores.push(jugador);
    }
}

module.exports = Partida;