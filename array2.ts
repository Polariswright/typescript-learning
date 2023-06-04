//voce tambem pode declarar os tipos dos valores inseridos nas tuples//
let myTuple: [number,string, string, number] = [28,'oi mundo','hello world',2]
/*arrays desse tipo sao chamadas de tuples, e seus valores nao podem ser inseridos errados 
ou mais do que os tipos que foram inseridos

usando o exemplo de cima, se eu colocasse assim:
let myTuple: [number,string, string, number] = ['oi mundo',28,2,'hello world']// error! 
Os elementos inseridos do tuple tem que seguir a mesma ordem dos tipos deles
entao a ordem correta seria 
let myTuple: [number,string, string, number] = [28,'oi mundo','hello world',2]

*/
/*
Algo a se ter em mente eh que tuples =/= arrays, ambas tem a propriedade length e pode ser encontrado
o index, mas tuples tem a propriedade de tipos diferentes e definidos, enquanto as arrays nao possuem isso necessariamente
Elas podem ser alteradas, enquanto as tuples sao estaticas 

Uma array nao pode ser colocada dentro de uma tuple.
Segue exemplo:
*/
let tupp:[string,string]=['ahoy','hola']
let arr : string[] = ['there','there']
let tup:[string,string] = ['there','there'] //nao causa erros
//let tupp = arr; //causa erro devido a arr ser uma array(Cannot redeclare block-scoped variable 'tupp'.)

/*
Como tuples tem um tamanho fixo e estatico, voce nao pode acessar e adicionar um index que nao existe

*/
let tup2:[number,number,number] = [2,2,3]
//let tup2[3] = [4]; //causa erro ja que tuples sao fixas
//tambem nao da pra usar o metodo concat()
let concatResult = tup2.concat([3,2,5]) //vai retornar uma array de numeros e na um tuple
