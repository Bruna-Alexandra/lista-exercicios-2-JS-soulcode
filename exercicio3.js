var numero = prompt("Digite um número binário:")

var numeroSplit = numero.split("")
var arrayPotencias = []
for (let y = 1; y <= numero.length; y++){
    arrayPotencias.push(2 ** (numero.length - y))
}

for(let y = 0; y < numero.length; y++){
    if (numeroSplit[y] == "0"){
        numeroSplit.splice(y, 1, 0)
    }else{
        numeroSplit.splice(y, 1, parseInt(arrayPotencias[y]))
    }
}
var soma = 0    

for(let y = 0; y < numeroSplit.length; y++){
    soma += numeroSplit[y]
}

alert(`Binário: ${numero}\nDecimal: ${soma}`)