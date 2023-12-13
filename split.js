/*
split() -> Ele transforma uma string em array pelo delimitador

para rodar o arquivo = node nomedoargivo.js
*/

const x = "Fernando-:Domingues-:Barnabe";
console.log("Valor original: ", x);

x.split("-:");
console.log("Split: ", x.split("-:"));

/*
Valor original:  Fernando,Domingues,Barnabe
Split:  [ 'Fernando', 'Domingues', 'Barnabe' ]
*/