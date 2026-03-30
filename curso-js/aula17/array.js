const pessoa1 = {
    nome: "Jean",
    sobrenome: "Vitor",
    idade: 22,


    fala (){
        console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos`)
    },
incrementaIdade() {
    this.idade++;
  }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
