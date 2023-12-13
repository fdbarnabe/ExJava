/* 
concat() -> Concatena(juntar) 2 arrays

para rodar o arquivo = node nomedoargivo.js
*/

const x = ["Fernando", "Domingues", "Barnabe"];
const y = ["Filho" , "de"];
const z = x.concat(y);

console.log("Valor original: ", x);
console.log("Concat: ", x.concat(y));
console.log("Concat e Join: ", z.join(" "));

/*
Valor original:  [ 'Fernando', 'Domingues', 'Barnabe' ]
Concat:  [ 'Fernando', 'Domingues', 'Barnabe', 'Filho', 'de' ]
Concat e Join:  Fernando Domingues Barnabe Filho de
*/