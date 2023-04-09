
//Configuração de interface de interação com usuario

const lerLinha = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Para netrar no kart vou precisar de algumas informaçoes: ok');

lerLinha.question('Qual é a sua idade?', idade => {
    if(idade >= 18 && idade <= 80){//validação de dados
        lerLinha.question('Voçe possui habilitação? (Sim/Não): ', habilitado =>{console.log(habilitado)
            if((habilitado.toUpperCase() === 'SIM')){
                lerLinha.question('Qual o seu nome? Para eu ver se voçe está na lista.',nome =>{
                    switch(nome){//Comparação de casos no caso lista. Se verdadeiro entra no caso se não testa o proximo se houver
                        case 'Magno':
                            console.log('Seja bem vindo Magno');
                            break;
                        case 'Paulo':
                            console.log('Seja bem vindo Paulo');
                            break;
                        case 'Lara':
                            console.log('Seja bem vindo Lara');
                            break;
                        case 'Magno':
                            console.log('Seja bem vindo Magno');
                            break;
                        default:
                            console.log('Lamento! Seu nome não está na lista.');
                            
                    }
                    lerLinha.close();
                });
            }else{// Caso negue
                console.log('É necessario habilitação para andar no kart.');
                lerLinha.close();
            }
        });
    }else{
        console.log('Infelismente voçe não tem idade para andar de kart.');
        lerLinha.close();// Para o programa;
    }
});