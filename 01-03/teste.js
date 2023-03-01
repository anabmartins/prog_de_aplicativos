let anna = 'brava cmg';
let venus = 'esta bem';

let obj = {anna, venus};

console.log(obj.anna)

let anna2 = obj
obj.anna = 44

let sabao = {
    cor:roxa,
    marca: dove,
    custa: 2,

    cobrar(){
      console.log('Pague seus dois reais imediatamente!')
    }
}

sabao.cobrar();

let tipo = 'tipo_de_';

let cadeira = {
  [tipo+'cadeira']: 'verde'
}
console.log(tipo,cadeira);
