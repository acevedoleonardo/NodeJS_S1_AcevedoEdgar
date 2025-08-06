class CuentaBancaria{
    #saldo //Atributo privado

    constructor(titular, saldoInicial){
        this.titular=titular; 
        this.#saldo= saldoInicial; 
    }

    depositar(monto){
        if(monto>0){
            this.#saldo += monto; 
        }
    }

    verSaldo(){
        return this.#saldo; 
    }
}

module.exports=CuentaBancaria; 
/*  Con el uso de campos privados (#) proteger el estado 
interno del objeto, reforzando la seguridad y confiabilidad del sistema. 

Hay que recordaque el encapsulamientio busca ocultar los detaller internos y exponer solo}
lo necesario*/