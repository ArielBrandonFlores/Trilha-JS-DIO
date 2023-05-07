class Pessoa {
    nome;
    idade;
    anoNascimento;
    
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }
    descreva() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
}

function compararPessoa(p1,p2){
    if(p1.idade > p2.idade) {
        console.log(`${p1.nome } é mais velho que ${p2.nome}`)
    } else if(p2.idade > p1.idade) {
        console.log(`${p2.nome }é mais velho que ${p1.nome}`)
    } else {
        console.log('Ambos tem a mesma idade tem a mesma idade')
    }
}

const victor = new Pessoa('Victor',25);
const ariel = new Pessoa('Ariel', 24)

compararPessoa(victor,ariel);