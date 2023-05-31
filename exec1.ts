//Criar uma variável do tipo number chamada numero e atribuir o valor 17
let numero:number;
numero = 17

//Realize as operações matemáticas básicas  por 3
//soma
var tres:number = 3;
const sum = (x:number) =>{
    return x+tres
}
  
console.log(sum(4))
//subtração
const sub = (x:number) =>{
    return x-tres
}
  
console.log(sub(4))
//divisão
const div = (x:number) =>{
    return x/tres
}
  
console.log(sum(4))
//Multiplicação
const multi = (x:number) =>{
   return x*tres
}
  
console.log(multi(4))
//Módulo
const mod = (x:number) =>{
     return x%tres
  }
  
console.log(mod(4))
//Exponenciação
const expo = (x:number) =>{
   return x**tres
  }
  
console.log(expo(4))
//Crie uma função que diga se um número é par ou impar
const checkParImp = (i:number)=>{
    if(i%2==0){
        console.log('Esse número é Par')
    }else{
        console.log('Esse número é impar')
    }
}

checkParImp(3);

//Essa função calcula se a variável é uma string

function checkString(){
    let isAString : string
    isAString = 'string';
    
    if(isAString=='string'){
    console.log('Definitely a String')
    }
    }
    
    checkString();