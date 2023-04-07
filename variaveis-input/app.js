//aqui vamos ver como se usa o input no js, e as variaveis.
//const => numca muda seu valor
//let => multavel, porem restrita se criada dentro de uma função


//vou usar o nome função js no lugar de redline
const lerLinha = require('readline').createInterface({
    input : process.stdin, //entrada de dados
    output : process.stdout //saida de dados
});
//require => requisita a função redline do js
//createInterface = > cria uma interface para interação com o usuario

let nome; //variavel vazia

lerLinha.question('Qual é o seu nome: ',input => {
    nome = input;
    console.log('bem vindo ' ,nome);
    lerLinha.close();//encerra o programa
});
