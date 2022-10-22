const prompt = require('prompt-sync')({sigint: true});
let listas = {
    frutas: [],
    lacticinios: [],
    congelados: [],
    doces: [],  
    limpeza: [], 
    listaComum: []
}

let listaMercado; 
let listaItem; 

let listaMercadoCheck = prompt("Deseja adicionar algum item em sua lista do mercado? ");

while(listaMercadoCheck === "sim") {
    listaMercado = prompt("Qual item deseja adicionar em sua lista de mercado? ");
    listaItem = prompt("Em qual lista deseja adicionar seu item? Ex.: Frutas, lacticinios, doces, limpeza, congelados. ");
    if(listaItem === "frutas"){
        listas['frutas'].push(listaMercado);
    } else if (listaItem === "lacticinios"){
        listas['lacticinios'].push(listaMercado);
    } else if (listaItem === "congelados"){
        listas['congelados'].push(listaMercado);
    } else if (listaItem === "doces"){
        listas['doces'].push(listaMercado);
    } else if (listaItem === "limpeza"){
        listas['limpeza'].push(listaMercado);
    } else {
        console.log("A lista não existe, será adicionado na lista comum. ");
        listas['listaComum'].push(listaMercado);
    }
    listaMercadoCheck = prompt("Deseja adicionar mais algum item em sua lista? ");
}

    console.log(`Sua lista de mercado:\nFrutas: ${listas['frutas']}\nLacticinios: ${listas['lacticinios']}\nCongelados: ${listas['congelados']}\nDoces: ${listas['doces']}\nLimpeza: ${listas['limpeza']}\nLista Comum: ${listas['listaComum']}.`)
