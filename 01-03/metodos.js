let pessoa = {
  nome: 'Matheus',
  getNome: function() {
    console.log("O nome é " + this.nome);
  },
  // Criando métodos
  setNome: function(novoNome){
    this.nome = novoNome;
  },
  // Objetos dentro de objetos
  caracteristicas: {
    olhos: 'verdes',
    cabelo: 'castanho',
    brincos: false,
    oculos: false
  }
}
// Criar props e metodos em objs existentes
pessoa.idade = 29;
pessoa.falar = function(){
  console.log('Olá')
}

// pessoa.getNome()
// pessoa.setNome('Teste')
// pessoa.getNome()
// console.log(pessoa.caracteristicas.olhos);
console.log(pessoa);