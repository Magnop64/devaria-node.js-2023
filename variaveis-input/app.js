//aqui vamos ver como se usa o input no js, e as variaveis.
//const => numca muda seu valor
//let => multavel, porem restrita se criada dentro de uma função


//vou usar o nome função js no lugar de redline
const funcaoJs = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});
//require => requisita a função redline do js
//createInterface = > cria uma interface para interação com o usuario

let nome;

funcaoJs.question('Qual é o seu nome: ',input => {
    nome = input;
    console.log('bem vindo ' ,nome);
});
