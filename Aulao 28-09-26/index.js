/*
let cor1 = "azul";
let cor2 = 'vermelho';
let cor3 = `verde`;


let numero1 = 10;
const const2 = 20;
let  numero2 = 30.1;

let nulo = null;
let indefinido = undefined;
let booleano = true;

let lista1 =[]
let lista2 = [1, 2, 3, 4, 5];
let lista3 = ["a", "b", "c", "d", "e"];
let lista4 = [1, "a", true, null, undefined, [1, 2, 3],{}];
let lista5 = {nome: "João", idade: 30, cidade: "São Paulo"};

console.log(cor1 +" " + typeof(cor1));
console.log(cor2 +" " + typeof(cor2));
console.log(cor3 +" " + typeof(cor3));
console.log(numero1 +" " + typeof(numero1));
console.log(numero2 +" " + typeof(numero2));
console.log(const2 +" " + typeof(const2));
console.log(nulo +" " + typeof(nulo));
console.log(indefinido +" " + typeof(indefinido));
console.log(booleano +" " + typeof(booleano));
console.log(lista1 +" " + typeof(lista1));
console.log(lista2 +" " + typeof(lista2));
console.log(lista3 +" " + typeof(lista3));
console.log(lista4 +" " + typeof(lista4));
console.log(lista5 );

const novoElemento = document.createElement('p');
const container = document.querySelector('.container');
novoElemento.textContent = `${cor1} + ${cor2}`;
console.log(novoElemento)
container.appendChild(novoElemento);


numero1 +=2
numero2 -=3
console.log(numero1)
console.log(numero2)
let numero3 = "12"

// == < > <= >= != === !==
console.log(numero1 != 5)
console.log(numero1 == 5)
console.log(numero1 == numero3)
console.log(numero1 === numero3)
console.log(numero1 > 5) */


// Testa Pratico Aulao Ao vvivo
/*
/*1
Apenas trocar para uma variavel do tipo let, reatribuir o valor a ela e tirar as aspas duplas do console.log
 */
/*
let teste = 3
teste = 5
console.log(teste)
*/
/*2 modificar para let  */
/*
let nome = "julio"
{
    console.log(nome)
}
*/
/*3 MOdificar para let , reatribuir o valor e exibir normalmente */
/*
let a = []
{
     a = ["a"]
}
console.log(a)
*/
/*4 Modificar para let , reatiribuir o valor e exibir o novo valor */
/*
let b = 5
b = 7
console.log(b)
*/
/*5 apenas criar a variavel antes de exibir no console.log */
/*
let d = "teste"
console.log(d) */

//const idade = Number(prompt("Digite sua idade"));
const idade = prompt("Digite sua idade");
console.log(idade)
console.log(typeof idade)
if(idade >= 18 && idade <60 ){
    console.log(`Voce e maior de idade ${idade} `)

}else if(idade>=60){
     console.log(`Voce e Idoso ${idade} `)

}

else{
    console.log(`Voce e menor ${idade}`)

}
