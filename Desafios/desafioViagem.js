//Faça um programa para calcular o valor de uma viagem.
//
//Você terá 3 variáveis. Sendo elas:
// 1 - Preço do combustível;
// 2 - Gasto médio de combustível do carro por KM;
// 3 - Distância em KM da viagem;
//
//Imprima no console o valor que será gasto para realizar esta viagem.

const preçoCombustivelLitro = 5.80;
const gastoMedioCombustivel = 12.00;
const distanciaViagem = 160;

const litrosGastos = gastoMedioCombustivel * distanciaViagem;
const valorViagem = litrosGastos / preçoCombustivelLitro;
console.log(`?O valor gasto em media pra realizar essa viagem é de R$${valorViagem}`);


