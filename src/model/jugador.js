class Jugador{
    constructor(nombre, idJugador){
        this.nombre = nombre;
        this.idJugador = idJugador;
        this.poX = 0;
        this.posY = 0;
        this.direccion = 0;
        this.posicionEnCarrera = 0;
    }
}
//export default Jugador;
module.exports = Jugador;