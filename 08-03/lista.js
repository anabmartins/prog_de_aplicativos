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
  
  const meuNinja = new Ninja('Naruto');
  console.log(meuNinja.name); 
  meuNinja.atirarShuriken(5); 

  


