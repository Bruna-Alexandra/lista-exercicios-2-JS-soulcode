/* ----------------------------------soma/média--------------------------------------- */
var soma = 0;
var quantidade = parseInt(prompt("Quantos números deseja digitar?"));
var arrayNumeros = [];

for (let y = 0; y < quantidade; y++) {
    var numero = parseFloat(prompt("Digite um número:"));
    arrayNumeros.push(numero);
}

for (let y = 0; y < quantidade; y++) {
    soma += arrayNumeros[y];
}
var media = soma / arrayNumeros.length
/* ---------------------------------potências/raízes--------------------------------------- */
var potenciaStr = ""
for (let y = 0; y < quantidade; y++) {
    potenciaStr += `valor: ${arrayNumeros[y]} | potência: ${arrayNumeros[y] ** 2}\n`;
}

var raizQuadradaStr = ""
for (let y = 0; y < quantidade; y++) {
    raizQuadradaStr += `valor: ${arrayNumeros[y]} | raíz quadrada: ${Math.sqrt([arrayNumeros[y]])}\n`;
}

var raizCubicaStr = ""
for (let y = 0; y < quantidade; y++) {
    raizCubicaStr += `valor: ${arrayNumeros[y]} | raíz cúbica: ${Math.cbrt([arrayNumeros[y]])}\n`;
}

alert(`soma: ${soma}\nmédia: ${media}\n\n${potenciaStr}\n${raizQuadradaStr}\n${raizCubicaStr}`)