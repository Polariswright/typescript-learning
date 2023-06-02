//algumas formas de declarar arrays em typescript
let names: Array<string> = ['Daniel','Lucas']
let nomes:string[] = ['Danny','Levi']
//como antes, se uma array é tipo 'string' é impossivel colocar tipo number
//assim que poem uma array misturada
let tudo:any[] = ['Danny',12]

//exercicio, atribua o valor correto das arrays
let bestNumbers:number[] = [7,77,4];
let bestLunches:string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts:string[] = ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans:boolean[] = [true, false];

//arrays multidimensionais são declaradas assim:
let bestMealPlan:string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice:boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti:number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];