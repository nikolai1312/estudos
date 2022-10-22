const prompt = require('prompt-sync')({sigint: true});

let frutas = [];
let lacticinios = [];
let congelados = [];
let doces = []; 
let limpeza = []; 

let listaMercado = prompt("Qual item deseja adicionar em sua lista de mercado? ");
let listaItem = prompt("Em qual lista deseja adicionar seu item? ");

if(listaItem === "frutas"){
    frutas.push(listaMercado);
} else if (listaItem === "lacticinios"){
    lacticinios.push(listaMercado);
} else if (listaItem === "congelados"){
    congelados.push(listaMercado);
} else if (listaItem === "doces"){
    doces.push(listaMercado);
} else if (listaItem === "limpeza"){
    limpeza.push(listaMercado);
} else {
    console.log("A lista não existe, será adicionado na lista comum. ");
}

let listaMercadoCheck = prompt("Deseja adicionar mais algum item em sua lista? ");

while(listaMercadoCheck === "sim") {
    listaMercado = prompt("Qual item deseja adicionar em sua lista de mercado? ");
    listaItem = prompt("Em qual lista deseja adicionar seu item? ");
    if(listaItem === "frutas"){
        frutas.push(listaMercado);
    } else if (listaItem === "lacticinios"){
        lacticinios.push(listaMercado);
    } else if (listaItem === "congelados"){
        congelados.push(listaMercado);
    } else if (listaItem === "doces"){
        doces.push(listaMercado);
    } else if (listaItem === "limpeza"){
        limpeza.push(listaMercado);
    } else {
        console.log("A lista não existe, será adicionado na lista comum. ");
    }
    listaMercadoCheck = prompt("Deseja adicionar mais algum item em sua lista? ");
}

console.log("Lista de frutas: ");
frutas.forEach(function(mostraLista){
    console.log(mostraLista);
})

console.log("Lista de lacticinios: ");
lacticinios.forEach(function(mostraLista){
    console.log(mostraLista);
})

console.log("Lista de congelados: ");
congelados.forEach(function(mostraLista){
    console.log(mostraLista);
})

console.log("Lista de doces: ");
doces.forEach(function(mostraLista){
    console.log(mostraLista);
})

console.log("Lista de limpeza: ");
limpeza.forEach(function(mostraLista){
    console.log(mostraLista);
})

 //adicionar condições para as listas 
 //pesquisar se é possível existir uma lista só para vários índices 


/*let adicionarItem = frutas.push(listaMercado);

console.log(frutas[0]); */