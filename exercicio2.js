var text = prompt("Digite algo:")
alert(`apenas letras maiúsculas: ${text.toUpperCase()}\napenas letras minúsculas: ${text.toLowerCase()}`)
splitStr = text.split("")
for(let y = 0; y < splitStr.length; y++){
console.log(splitStr[y])}