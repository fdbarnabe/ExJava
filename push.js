/*
push() -> Adiciona um item no final do array

para rodar o arquivo = node nomedoargivo.js
*/

const x = ["Fernando", "Domingues", "Barnabe"];
const y = ["Rosa"]
console.log("Valor original: ", x);

x.push("Filho","da")
console.log("Push: ", x);
console.log("Push + Concat: ", x.concat(y));

/*
Valor original:  [ 'Fernando', 'Domingues', 'Barnabe' ]
Push:  [ 'Fernando', 'Domingues', 'Barnabe', 'Filho', 'de' ]
Push + Concat:  [ 'Fernando', 'Domingues', 'Barnabe', 'Filho', 'da', 'Rosa' ]
*/
