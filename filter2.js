/*
filter() -> Filtra o array por uma function de item por item

para rodar o arquivo = node nomedoargivo.js
*/

const x = [1,2,3,4,5,6,7,8,9,10];
console.log("Valor original: ", x);


console.log("Filter: ", x.filter(item => item > 5));

/*
Valor original:  [  1, 2, 3, 4,  5,  6, 7, 8, 9, 10]
Filter:  [ 6, 7, 8, 9, 10 ]
*/