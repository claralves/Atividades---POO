//JavaScript
let l = [1,2,3];
console.log(l);

//TypeScript
//só podendo números;
let l1:number[] = [2,3,4];
console.log(l1);

//só podendo letras;
let l2:string[] = ["Clara","Víctor","Pedro"];
console.log(l2);

//Interação - JavaScript;
for(let i=0; i<l1.length; i++){
    console.log(i, l1[i]);
}

//for...in;
//for(let i in l1){
//    console.log(i, l1[i]);
//}

//for..of - para quando precisar somente dos valores de l1;
//for(let elemento of l1){
//    console.log(elemento);
//}

let lista:number[] = [10, 20, 30, 40];
//inserir elementos;
lista.push(50);
console.log(lista);

//remover elementos;
lista.splice(2,3);
console.log(lista);
