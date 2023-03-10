// criar uma classe

class Animal{
    // construtor
    constructor(n, c){
        this.nome = n
        this.cor = c
    }
    latir(){
        console.log(`${this.nome}: "Aooo lapada seca"`);
    }
    //parametro
    correr(km){
        console.log(`${this.nome} correu ${km} km`);
    }
    comer(comida){
        return this.nome + ' buchin cheio de ' + comida
    }
}

// instancia do objeto q pertence a classe Animal
let dog = new Animal('Enzo', 'branco')
console.table(dog);
//let dog2 = new Animal('Bernardo')
dog.latir()
dog.correr(200)
console.log(dog.comer('sopa de gato'));
