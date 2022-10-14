const prompt = require('prompt-sync')({sigint: true});

const nome = prompt("Qual o seu nome? ");;
const idade = prompt("Qual sua idade? ");;
const linguagem = prompt("Qual linguagem de programação você estuda? ");;

console.log(`Olá, ${nome}, você tem ${idade} anos, e está aprendendo ${linguagem}.`);

const preferencia = prompt("Você gosta de estudar programação? ");

if (preferencia == 'sim'){
    console.log("Que legal, espero que você continue estudando!"); 
} else {
    console.log("Que pena, já pensou em estudar algo sobre tecnologia? ");
}
