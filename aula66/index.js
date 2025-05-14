// Dobre os números
//
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map((valor) => valor * 2);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomePessoas = pessoas.map((obj) => console.log(obj.nome));
const objSemNome = pessoas.map((obj) => {
    delete obj.nome;
    return console.log(obj);
});

const comIds = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice + 1;
    // obj.id = indice + 1;
    return console.log(newObj);
});
