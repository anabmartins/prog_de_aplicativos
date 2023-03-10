// 1

class Ninja {
    constructor(nome, shuriken) {
        this.nome = nome
        this.shuriken = shuriken
        this.vivo = true
    }
    atirarShuriken(inimigo) {
        if (this.shuriken > 0) {
            console.log(`${this.nome} atirou uma shuriken`);
            this.shuriken -= 1
            inimigo.vivo = false
        } else {
            console.log('Sem poder');
        }
    }
}

let naruto = new Ninja('Naruto', 3)
// console.log(naruto);

// 2 

/* naruto.atirarShuriken()
naruto.atirarShuriken()
naruto.atirarShuriken()
console.log(naruto); */

// 3

let inimigo = new Ninja('Sasuske', 3)

naruto.atirarShuriken(inimigo)
console.log(naruto);
console.log(inimigo);

// 4

let instancia
if (naruto instanceof Ninja)
    instancia = 'positivo'
else
    instancia = 'negativo'
console.log(instancia);

// 5

let qtd = 'qtd_de_'

let fruta = {
    [qtd+'frutos']: 12
}  

let carro = {
    [qtd+'rodas']: 4
}

let barco = {
    [qtd+'velas']: 2
}
console.log(fruta, carro, barco);

// 6

let caminhao = {
    rodas: 4,
    motorista: 'Carlao',
    portas: 2,
    carga: 'bois'
}

console.log(caminhao);
let {rodas, motorista, portas, carga} = caminhao

console.log(rodas);
console.log(motorista);
console.log(portas);
console.log(carga);

// 7 

