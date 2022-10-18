const prompt = require('prompt-sync')({sigint: true});

let numeroSorte = Math.floor(Math.random() * (20 - 1) + 1);
let chance;

for(i = 2;0 <= i; i--){
    chance = prompt("Qual o número secreto? ");
    if (chance == numeroSorte){
        console.log("Parabéns, você acertou! ");
        break;
    } else if (i === 0){
        console.log("Poxa você errou todas as chances. ");
        console.log(`O número secreto era ${numeroSorte}`);
    } else {
        console.log(`Poxa, você errou, mas ainda tem ${i} chances`);
    }
}
