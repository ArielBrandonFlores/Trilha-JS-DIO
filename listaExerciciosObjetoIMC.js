
class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }
    classificarImc(){
        const imc = this.calcularImc();
        if(imc < 18.5){
            return'Abaixo do peso';
       }else if (imc >= 18.5 && imc < 25) {
            return'Peso normal';
       }else if (imc >= 25 && imc < 30) {
            return'Acima do peso';
       }else if (imc >= 30 && imc < 40) {
            return'Obeso';
       }else {
            return'Obesidade Grave';
       }
    }
}
const jose = new Pessoa('Jose', 70, 1.75);
console.log(jose.classificarImc());
const renan = new Pessoa('Renan',100,1.75);
console.log(renan.classificarImc());
const ariel = new Pessoa('Ariel',79,1.63);
console.log(ariel.classificarImc());




