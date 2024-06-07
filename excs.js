// Pedro Victor Lopes de Souza - 23214290046
// Beatriz Alves Borges - 23214290001
// Giovanna Martins Soares - 23214290130
// Álvaro Matheus Alves da Silva - 23214290020

class Pessoa {
  constructor(nome, idade, profissao) {
    this._nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  get nome() {
    return this._nome;
  }

  set nome(novoNome) {
    return this._nome = novoNome;
  }

  apresentar() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}`
    );
  }

  actionInInglix() {
    console.log(`O que eu faço: `);
  }
}

class Estudante extends Pessoa {
  constructor(nome, idade, profissao, curso) {
    super(nome, idade, profissao);
    this.curso = curso;
  }

  apresentar() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao} de ${this.curso}.`
    );
  }

  actionInInglix() {
    console.log(`Eu estudo.`);
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, profissao, disciplina) {
    super(nome, idade, profissao);
    this.disciplina = disciplina;
  }

  apresentar() {
    console.log(
      `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao} de ${this.disciplina}.`
    );
  }

  actionInInglix() {
    console.log(`E eu dou aula.`);
  }
}

const aluno = new Estudante("Maria Silva", 21, "estudante", "ADS");
aluno.apresentar();
aluno._nome = 'Beatriz';
aluno.apresentar();
  
const sofredores = [new Estudante(), new Professor()];

sofredores.forEach((Alprazolam) => {
  Alprazolam.actionInInglix();
});

const teacher = new Professor("João Souza", 21, "professor", "Logica de Programação");
teacher.apresentar();
teacher._nome = 'Felipe';
teacher.apresentar();