const prompt = require('prompt-sync')({sigint: true});
//Usar loops e condicionais para fazer escolhas 
    let techCarreira = '';
    let carreira = prompt("Qual carreira deseja seguir? (Digite 1 para Front-End e 2 para Back-End) ");
        if(carreira == "1"){
                console.log("Ótima escolha! ");    
                let techCarreira = prompt("Qual tecnologia deseja aprender, 'React' ou 'Vue'? ");        
        }   else if(carreira === "2") {
                console.log("Ótima escolha! ");
                let techCarreira = prompt("Qual tecnologia deseja aprender, 'C#' ou 'Java'? ");
        }   else {
                console.log("A opção é inválida. ");
                
        }

    let caminhoPro = prompt("Você deseja se especializar em alguma área ou se tornar um desenvolvedor Fullstack? ");
        if(caminhoPro == "Fullstack") {
            console.log("Que legal, a educação é o caminho para a liberdade! ");
        } else if (caminhoPro == "especializar"){
            caminhoPro = prompt("Isso é ótimo, em que área deseja se especializar? ");
        } else {
            console.log("É uma ótima opção! ");
        }

    let aprendizado = prompt("Deseja aprender uma nova tecnologia? Digite 'ok' para confirmar. ");
    while(aprendizado == "ok"){
        aprendizado = prompt("Qual tecnologia deseja aprender? ");
        aprendizado = prompt("Isso é ótimo, deseja aprender alguma outra tecnologia? Digite 'ok' para continuar. ");
    }
