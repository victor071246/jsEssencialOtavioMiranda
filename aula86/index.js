function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', aleatorio(1, 3))
    .then((resposta) => {
        console.log(resposta);
        return esperaAi('Frase 2', aleatorio(1, 3));
    })
    .then((resposta) => {
        console.log(resposta);
        return esperaAi(2222, aleatorio(1, 3));
    })
    .then((resposta) => {
        console.log('Último a ser exebidio');
    })
    .catch((e) => {
        console.log('ERRO:', e);
    });

console.log('Isso aqui será exibido antes de qualquer promise');
