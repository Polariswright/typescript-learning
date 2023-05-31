/**
 * Isso eh um documentation comment, tambem serve pra comentar em Typescript!
 * 
 */

//voce pode colocar valores padroes caso nao coloque nenhum valor na variavel
//dessa forma, o typescript assume o tipo da variavel.
const showVar=(name='Anonymus',day='quarta-feira')=>{
console.log(`Hello ${name}, today is ${day}`)
}
showVar('Aluminoses','Wendnesday')//input 'Hello Aluminoses, today is Wendnesday'

//outro exemplo
function proclaim(status='not ready...', repeat=1) {
    for (let i = 0; i < repeat || 0; i += 1) {
      console.log(`I'm ${status || 'not ready...'}`);
    }
  }
  
  proclaim();
  proclaim('ready?');
  proclaim('ready!', 3);

//funcoes podem ter tipos atribuidos tambem, e obrigatoriamente precisam ter um return dentro delas
function exemplo(x:number):number{
    return 2*x
}  

//tambem funciona com arrows functions
const arrowExemplo=(anon:string):string =>{
return `Boa noite,${anon}` 
}
//mesmo em casos que nao retorne nada, eh interessante colocar o tipo da funcao, nesse caso, colocamos o void.
function logGreeting(name:string): void{
    console.log(`Hello, ${name}!`)
  }

const greets=(name:string):void=>{
    console.log(`Hi, ${name}! Good to see you!`)
}  
/**
 * 
 * Documentation comments sao excelentes pra comentar funcoes e o uso delas
 * @param fruit1 = primeira fruta
 * @param fruit2 = segunda fruta
 */
//make a fruit salad exemplo
function makeFruitSalad(fruit1:string, fruit2:string):void{
    let salad=fruit1+fruit2+fruit2+fruit1+fruit2+fruit1+fruit1;
    console.log(salad);
  }
  
  makeFruitSalad('banana','pineapple'); 
  //um exemplo pra usar a funcao return do doc comments!!!
/**
 * 
 * @param x = um numero qualquer
 * @returns retorna a soma de x + 2
 */
  const retornar=(x:number):number=>{
    return x + 2
}


