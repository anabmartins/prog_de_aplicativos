// 1 e 2 
function Ninja(name, shurikens) {
    this.name = name;
    this.shurikens = shurikens;
    this.atirarShuriken = function(estrelas) {
      console.log(`${this.name} atirou um shuriken!`);
      for(i = 0; i<5; i++){
      estrelas = (estrelas -1)
      if (estrelas > 0 ){
        console.log(`O ninja ainda tem ${estrelas} estrelas`);
      } else {
        console.log(`Acabou`);
      }
     }
    }
  }
  
  // const meuNinja = new Ninja('Naruto');
  console.log(meuNinja.name); 
  meuNinja.atirarShuriken(5); 

// 3
function Inimigo(nome){
  this.nome = nome;
  this.vivo = true;
  this.atirarShuriken = function() {
    if (this.vivo && this.shuriken > 0) {
      console.log(`${this.nome} foi atingido por um shuriken e morreu!`);
      this.vivo = false;
      this.shuriken = 0;
    } else if (this.vivo) {
      console.log(`${this.nome} desviou do shuriken!`);
    } else {
      console.log(`${this.nome} já está morto!`);
    }
  }
}

const inimigo = new Inimigo('Sasuske')
console.log(inimigo.nome);
console.log(inimigo.vivo);
inimigo.atirarShuriken()

const meuNinja = new Ninja('Naruto', 1);
meuNinja.atirarShuriken(inimigo); // 'Gato Negro foi atingido por um shuriken e morreu!'
console.log(inimigo.vivo); // false
inimigo.atirarShuriken(); // 'Gato Negro já está morto!'

