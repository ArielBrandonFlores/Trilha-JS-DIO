class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca,cor,gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGatoDeViagem(distanciaEmKm,precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}
const uno = new Carro('fiat','vermelho',1/12);
console.log(uno.calcularGatoDeViagem(78, 7));
const palio = new Carro('fiat','preto',1/10);
console.log(palio.calcularGatoDeViagem(70,5));
  
