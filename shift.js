/*
shift() -> Remove o primeiro item do array

para rodar o arquivo = node nomedoargivo.js
*/

const x = ["Fernando", "Domingues", "Barnabe"];
console.log("Valor original: ", x);
const valorremovido = x.shift();
console.log("Shift: ", x);
console.log("Valor Removido: ",valorremovido);

/*
Valor original:  [ 'Fernando', 'Domingues', 'Barnabe' ]
Shift:  [ 'Domingues', 'Barnabe' ]
Valor Removido:  Fernando
*/