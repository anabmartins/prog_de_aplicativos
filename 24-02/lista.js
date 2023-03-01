//1

let casa = {
  cor: 'rosa',
  quartos: 3,
  vendida: false
}

//2 
let Pessoa = {
  nome: 'Victoria',
  lerNome: function ler() {
      console.log(`Meu nome é ${Pessoa.nome}`);
  }
}

Pessoa.lerNome()

//3
let pessoa1 = {
  nome: 'Bernardo',
  idade: 40
}

let pessoa2 = {
  nome: 'Venus',
  idade: 22
}

if(pessoa1.idade > pessoa2.idade) console.log(`Pessoa mais velha: ${pessoa1.nome}`)
else console.log(`Pessoa mais velha: ${pessoa2.nome}`)

//4 
let Funcionario = {
  nome: ['Carlos', 'Bianca'],
  salario: [1500, 4600],
  media: (Funcionario.nome[0]+Funcionario.nome[1])/2
}

console.log(`Salário médio dos funcionários: ${Funcionario.media}`)

//5