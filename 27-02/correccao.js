let pessoa = {
  nome: 'Ana',
  idade: 17,
  treina: true,

  bodyBuilder: function(){
      console.log('Biiirrlll');
  },
  soma: function(a,b){
      let c = a + b
      let d = 'O seu nome é ' + this.nome //referencia a variavel local do objeto
      return a + ' + ' + b + ' = ' + c // volta com resultado
  },
  imprimirNome: function () {
      console.log('Nome: ' + this.nome);
  },
  imprimirNome_retorno: function () {
      return 'Nome: ' + this.nome;
  },
}

console.table(pessoa)
pessoa.bodyBuilder()

let num1 = 10, num2 = 10
console.log(pessoa.soma(num1, num2));

// um chama função outro retorna valor  
pessoa.imprimirNome()
console.log(pessoa.imprimirNome_retorno());

let augusto = {
  nome: 'Augusto Saravia',
  idade: 16,
  salario: 4500
}

let benitis = {
  nome: 'Pedro Benitis',
  idade: 17, 
  salario: 600
}

if(augusto.idade > benitis.idade){
  console.log('Mais velho: ' + augusto.nome);
} else if (benitis.idade > augusto.idade){
  console.log('Mais velho: ' + benitis.nome);
} else console.log("Idades iguais");


let mediaSalarial = (augusto.salario + benitis.salario)/2
console.log('Média Salarial é ' + mediaSalarial);

// 5

let retangulo = {
  largura: 3.0,
  altura: 4.0,

  area: function(){
      let a = this.largura * this.altura
      console.log('Área: ' + a);
  },
  perimetro: function(){
      let p = 2*(this.largura + this.altura)
      console.log('Perimetro: ' + p);
  },
  diagonal: function(){
      let d = Math.sqrt(this.largura*this.largura + this.altura*this.altura)
     console.log('Diagonal: ' + d); 
  }
}

retangulo.area()
retangulo.perimetro()
retangulo.diagonal()
