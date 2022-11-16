// Faça um programa para calcular o valor de uma viagem.
// 
// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;
//  
// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 7.20;
const precoGasolina = 9.80;
const gastoMedio = 10;
const distanciaViagem = 120;
const tipoGasolina = 'Gasolina';

const litrosConsumidos = distanciaViagem / gastoMedio;
if (tipoGasolina === 'Gasolina'){
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(`Foi Gasto na viagem R$${valorGasto} de Gasolina`);
} else {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(`Foi Gasto na viagem R$${valorGasto} de Etanol`);
}


