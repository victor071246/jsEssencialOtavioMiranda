const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'pessoas_aleatorias.json');

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const json = JSON.parse(data);
    console.log(json);
});
