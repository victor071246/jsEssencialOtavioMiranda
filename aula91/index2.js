import axios from 'axios';

fetch('pessoas.json')
    .then((resposta) => resposta.json())
    .then((json) => carregarElementosNaPagina(json));

function carregarElementosNaPagina(json) {
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td.innerHTML = pessoa.idade;
        td.appendChild(td2);

        let td3 = document.createElement('td');
        td.innerHTML = pessoa.salario;
        td.appendChild(td3);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}

axios('pessoas.json').then((resposta) =>
    carregarElementosNaPagina(resposta.data)
);
