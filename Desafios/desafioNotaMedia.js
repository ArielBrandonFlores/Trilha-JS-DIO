// 1 Faça um algorítimo que dado as 3 notas tiradas por um aluno em um
// semestre da faculdade calcule e imprima a sua média e a sua
// classificação conforme a tabela abaixo.
//
// Média = (nota 1 + nota 2 + nota 3) / 3;
//
// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;

function media(n1, n2, n3) {
  const nMedia = (n1 + n2 + n3) / 3;
  console.log(`Media: ${nMedia.toFixed(2)}`);
  if (nMedia < 5 && nMedia >= 0) {
    console.log("Reprovado");
  } else if (nMedia >= 5 && nMedia <= 7) {
    console.log("Recuperação");
  } else {
    console.log("Aprovado");
  }
}
media(7, 7, 7);
