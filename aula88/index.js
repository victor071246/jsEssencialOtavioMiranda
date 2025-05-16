function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na Promise');
            return;
        }, tempo);
    });
}

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', aleatorio());
        console.log(fase1);

        setTimeout(function () {
            console.log('Essa promise estava pendente', fase1);
        }, 5000);

        const fase2 = await esperaAi('Fase 2', aleatorio());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', aleatorio());
        console.log(fase3);

        console.log('Terminamos na fase:', fase3);
    } catch (e) {
        console.log(e);
    }
}

executa();

const teste2 = await esperaAi('qlq', 5000);
console.log(teste2);

// pedinging -> pendente
// fullfilled

// esperaAi('Fase 1', aleatorio(0, 3))
//     .then((valor) => {
//         console.log(valor);
//         return esperaAi('Fase 2', aleatorio());
//     })
//     .then((fase) => {
//         console.log(fase);
//         return esperaAi('Fase 3', aleatorio());
//     })
//     .then((fase) => {
//         console.log(fase);
//         return fase;
//     })
//     .then((fase) => {
//         console.log('Terminamos na fase:', fase);
//     })
//     .catch((e) => console.log(e));
