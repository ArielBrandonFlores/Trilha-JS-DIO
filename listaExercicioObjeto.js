
class Carro {
    marca;
    cor;
    gastoMediaPorKm;

    constructor(marca,cor,gastoMediaPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMediaPorKm = gastoMediaPorKm;
    }

    CalcularGastoDePercurso(distanciaEmKm,precoCombustivel){
        return distanciaEmKm * this.gastoMediaPorKm *precoCombustivel;
    }
}

const uno = new Carro ('Fiat','Prata', 1/12);
console.log(uno.CalcularGastoDePercurso(70,5));
const palio = new Carro ('Fiat','Preto',1/10);
console.log(palio.CalcularGastoDePercurso(70,5));



