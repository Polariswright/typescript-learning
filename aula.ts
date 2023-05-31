
//em typescript você tem que dar assign nas variáveis pra elas terem um tipo só, caso não queira isso ela automaticamente vira 'any'
var nome : string = 'Carlos Machado';
var idade : number = 37;
var sentence : string = 'Olá, meu nome é ${nome}, eu tenho ${idade} anos';
//mostra no console hello world!
function greets(){
console.log('hello world')
}
console.log(sentence)
greets()

const mult = (x:number,z:number) =>{
  return x*z
}

console.log(mult(4,5))