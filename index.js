//Lógica de Programação

//Imprimir na tela
console.log('Hello World');

//Variáveis
const nome = 'John';
const sobrenome = 'Doe';
console.log(nome);
console.log(sobrenome);

let imc = 0;
const altura = 1.7;
const peso = 70;
imc = peso / (altura * altura);
console.log(imc);

//Concatenação
const nomeC0mpleto = nome + ' ' + sobrenome;
console.log(nomeC0mpleto);

//Template String
const nomeCompleto = `${nome} ${sobrenome}`;
console.log(nomeCompleto);

//Operador Ternário
const resultado = imc >= 30 ? 'Obesidade' : 'Normal';
console.log(resultado);

//if e else
const nota = 7;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

//switch
const cor = 'azul';
switch (cor) {
    case 'verde':
        console.log('Olá');
        break;
    case 'amarelo':
        console.log('Tudo bem?');   
        break;
    case 'azul':
        console.log('Bem-vindo');
        break;
    default:
        console.log('Cor inválida');
        break;
}


//Array
const frutas = ['Maçã', 'Uva', 'Banana'];
console.log(frutas);

//Matriz
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matriz);

//Push
frutas.push('Abacaxi');
console.log(frutas);

//Pop
frutas.pop();
console.log(frutas);


//Splice
frutas.splice(2, 1);
console.log(frutas);


//Slice
const frutas2 = frutas.slice(0, 2);
console.log(frutas2);


//Concat
const frutas3 = frutas.concat(frutas2);
console.log(frutas3);


//Sort
frutas3.sort();
console.log(frutas3);


//Join
console.log(frutas3.join(' - '));


//Split
const nomeCompleto2 = 'John Doe';
const nome2 = nomeCompleto2.split(' ')[0];
const sobrenome2 = nomeCompleto2.split(' ')[1];
console.log(nome2);
console.log(sobrenome2);

//Spread
const array = [1, 2, 3];
const array2 = [...array, 4, 5, 6];
console.log(array2);


//ForEach
frutas.forEach(function(fruta) {
    console.log(fruta);
}
);

//For
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//While
let i = 0;
while (i < frutas.length) {
    console.log(frutas[i]);
    i++;
}

//Funções
function soma(a, b) {
    return a + b;
}
console.log(soma(1, 2));

function subtracao(a, b){
    console.log(a - b);
}
subtracao(5, 2);

//Função arrow
const soma2 = (a, b) => a + b;
console.log(soma2(1, 2));

//try catch
try {
    console.log(soma(1, 'a'));
} catch (error) {
    console.log(error);
}

//Objeto
const pessoa = {
    nome: 'John',
    sobrenome: 'Doe',
    idade: 35,
    endereco: {
        rua: 'Rua dos Bobos',
        numero: 123
    }
};
console.log(pessoa);


//Operador rest
const usuario = {
    nome: 'John',
    idade: 35,
    empresa: 'Google'
};


const { nome, ...resto } = usuario;
console.log(nome);


//Operador spread
const usuario2 = { ...usuario, nome: 'Elton' };
console.log(usuario2);


//import
import { soma as soma2 } from './funcoes';
console.log(soma2(1, 2));

//require
const soma3 = require('./funcoes');
console.log(soma3(1, 2));

//export
export const idade = 35;
export let nome = 'John';
export function soma(a, b) {
    return a + b;
}






























