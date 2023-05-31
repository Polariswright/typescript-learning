//função que te comprimenta a quantidade de vezes que você quiser x 2!
const duplegreets = (greet:string,i:number)=>{
const duple =(num:number)=>{
    return num*2
}
return `${greet},${duple(i)} vezes!`

}
console.log(duplegreets('Oie',4))