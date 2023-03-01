// CLASSE
// OBJETO - INSTÂNCIA 
// ATRIBUTO / CARACTERÍSTICAS / PROPRIEDADES
// MÉTODOS / FUNÇÕES / COMPORTAMENTOS / AÇÔES

let carro = {
  marca: 'Ford',
  portas: 4,
  novo: true,
  acessorios: [
      'ar condicionado', 'tv', 'freio a disco'],
  atirar: function() {
      console.log('pew pew pew');
  }
}

carro.atirar

console.log(carro.novo);
console.log(carro['marca']);
console.log(`O carro ${carro.marca} possui ${carro.portas} portas`);
console.log(carro.acessorios[1]);
