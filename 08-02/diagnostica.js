// questão 1

var a = 10
var b = 20
var c = a * b
var d = a + b + c
var media = (d * 2) / 4

console.log(`a: ${a} \nb: ${b} \nc: ${c}\nd: ${d}\nmédia: ${media}`);

// questão 2

var salario = 3000
var novo_salario = 0, valor_reajustado = 0, indice = 0

if (salario <= 2000) {

    valor_reajustado = salario * 0.15
    indice = 15

} else if (salario <= 4000) {

    valor_reajustado = salario * 0.12
    indice = 12

} else {

    valor_reajustado = salario * 0.10
    indice = 10

}

novo_salario = salario + (valor_reajustado)
console.log(`Novo salário: R$${novo_salario}\nValor reajustado: R$${valor_reajustado}\nÍndice Reajustado: ${indice}%`);

// questão 3

var valor_base = 50
var minicurso = 'S'
var traducao = 'S'

if (minicurso == 'S') 
    valor_base += 20
    if (traducao == 'S') 
    total += 10

console.log("Valor da inscrição: R$" + total);

// questão 4 

var qtdMulher = 0
var qtdFilme = 0

for (var i = 0; i < 50; i++) {

    sexo = Math.floor(Math.random() * 2);
    filme = Math.floor(Math.random() * 23)

    if (sexo == 1) {
        qtdMulher++
    } if (filme > 10) {
        qtdFilme++
    }
}
percentual = (qtdMulher * 100) / 50

console.log(`Quantidade de mulheres: ${qtdMulher}\n Quantidade de pessoas que assistiram mais que 10 filmes: ${qtdFilme}\nPercentual de mulheres: ${percentual}%`);

// questão 5 

var NOTA1 = [7.0, 7.0, 5.5, 6.0, 6.0, 7.0, 9.0, 6.8, 6.5, 6.0]
var NOTA2 = [7.5, 8.0, 6.0, 6.0, 6.5, 6.0, 8.0, 7.2, 7.5, 8.0]
var MEDIA = []

var soma1 = 0
var soma2 = 0
var qtdA = 0

for (var i = 0; i < NOTA1.length; i++) {
    soma1 += NOTA1[i]
    soma2 += NOTA2[i]
    MEDIA.push((NOTA1[i] + NOTA2[i]) / 2)
}

if (MEDIA > 9) {
    qtdA++
}

media_geral = (soma1 + soma2) / 20

console.log(`Quantidade de alunos conceito A: ${qtdA}\nMédia geral da turma: ${media_geral}`);
