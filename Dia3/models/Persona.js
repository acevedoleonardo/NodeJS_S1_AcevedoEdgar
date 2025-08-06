// ###########################################################
// P.O.O - Abstracción 
// ###########################################################

class Persona{
    // Atributos en JS se integran em el contructor 
    constructor(nombre,edad){
        this.nombre=nombre; 
        this.edad=edad; 
    }

    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años }`);

    }
}

module.exports=Persona; 


/* Aqui podemos evidencia el uso de abstraccion, clase persona representa una entidad del mundo
real tener sus propios valores. */

