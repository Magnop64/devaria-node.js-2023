// programa que vai receber dois numeros e um operador e realizar o calculo

const lerLinha = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const Enumero = (numero) => {
    let n = Number.parseFloat(numero);
    if(!n){
        console.log('Numero não informado');
        lerLinha.close();
    }else{
        return n;
    }
}

const OperadorValidado = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            return operador;
        default:
            console.log('Operador não informado!');
            break;
    }
}

lerLinha.question('Digite um número: ', (numero1) => {
    const number1 = Enumero(numero1);
    if(number1){
        lerLinha.question('Digite outro número: ',(numero2) => {
            const number2 = Enumero(numero2);
            if(number2){
                lerLinha.question('Digite o operador: (+,-,*,/,%) ',(operador)=>{
                    const operacao = OperadorValidado(operador);
                    if(operacao){
                        switch(operacao){
                            case '+':
                                console.log(`${numero1} ${operacao} ${numero2} = ${number1 + number2}`);
                                lerLinha.close();
                                break;
                            case '-':
                                console.log(`${numero1} ${operacao} ${numero2} = ${number1 - number2}`);
                                lerLinha.close();
                                break;
                            case '*':
                                console.log(`${numero1} ${operacao} ${numero2} = ${number1 * number2}`);
                                lerLinha.close();
                                break;
                            case '/':
                                console.log(`${numero1} ${operacao} ${numero2} = ${number1 / number2}`);
                                lerLinha.close();
                                break;
                            case '%':
                                console.log(`${numero1} ${operacao} ${numero2} = ${number1 % number2}`);
                                lerLinha.close();
                                break;
                        }
                    }
                })
            }
        })
    }
})