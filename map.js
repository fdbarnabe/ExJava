/*
map() -> Transforma cada item do array em outra coisa

para rodar o arquivo = node nomedoargivo.js
*/

const x = [1,2,3,4,5,6,7,8,9,10];
console.log("Valor original: ", x);
const result = x.map(item => {
    if (item % 2 == 0){
        return 0
    }
    return item
})

console.log("Map: ", result);

/*
Valor original:  [  1, 2, 3, 4,  5,  6, 7, 8, 9, 10]
Map:  [  1, 0, 3, 0, 5,  0, 7, 0, 9, 0]
*/