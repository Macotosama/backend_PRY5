class jugador{
    jugador(){
        this.Nombre = "";
        this.poX = 0;
        this.posY = 0;
        this.direccion = 0;
        this.posicionEnCarrera = 0;
    }
    getNom(){
        return this.Nombre;
    }
    setNom(nNombre){
        nNombre = this.Nombre;
    }
    getPosX(){
        return this.poX;
    }
    serPox(nPosx){
        nPosx = this.poX;
    }
    getPosy(){
        return this.posY;
    }
    setPosy(nPosY){
        nPosY = this.posY;
    }
    getDir(){
        return this.direccion;
    }
    setDir(nDir){
        nDir = this.direccion;
    }
    getPosRace(){
        return this.posicionEnCarrera;
    }
    setPosRace(nPos){
        nPos = this.posicionEnCarrera;
    }
}

module.exports = jugador;