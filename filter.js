/*
filter() -> Filtra o array por uma function de item por item

para rodar o arquivo = node nomedoargivo.js
*/

const x = ["Fernando", "Domingues", "Barnabe"];
console.log("Valor original: ", x);

console.log("Filter: ", x.filter(item => item != "Domingues"));

/*
Valor original:  [ 'Fernando', 'Domingues', 'Barnabe' ]
Filter:  [ 'Fernando', 'Barnabe' ]

A variavel "item" so existe dentro do filter(), pode ser qualquer variavel x y z.
*/
