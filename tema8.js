class Persona{

    #edad;
    #nombre = '';
    #telefono;

    setEdad(edad){
        this.#edad = edad;
    }
    getEdad(){
        console.log(this.#edad);
    }

    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        console.log(this.#nombre);
    }

    setTelefono(telefono){
        this.#telefono = telefono;
    }
    getTelefono(){
        console.log(this.#telefono);
    }
}

const maxi = new Persona()
maxi.setEdad(70)
maxi.setNombre('Maximo Meridio')
maxi.setTelefono(12345678)
maxi.getEdad()
maxi.getNombre()
maxi.getTelefono()