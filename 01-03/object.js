/* Quando você atribui um obj já criado para uma outra variável, você só está passando uma referência;
Se alterar a referência, o original também é alterado; */

// exemplo 1

let obj = {
  teste: 1,
}

let copia = obj;

copia.teste = 2;

console.log(obj.teste);

// exemplo 2
// cria um objeto "pessoa"
let pessoa = {
  nome: 'Maria',
  idade: 30,
  altura: 1.70
};

// atribui a referência do objeto "pessoa" para outra variável chamada "outraPessoa"
let outraPessoa = pessoa;

// modifica o valor da propriedade "idade" do objeto "outraPessoa"
outraPessoa.idade = 35;

// imprime os valores das propriedades "idade" da "pessoa" e da "outraPessoa" (ambas devem ser 35)
console.log(pessoa.idade);
console.log(outraPessoa.idade);

// exemplo 3

let aula = {
  horas: 2,
  materia: 'programacao de apps',
  profesor: 'Bruno',
  quarta: true
}

testes = aula.materia = 'testes'
quarta = aula.quarta = false

console.log(aula);