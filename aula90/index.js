fetch('pagina4.html')
    .then((resposta) => {
        if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
        return resposta.text();
    })
    .then((html) => console.log(html))
    .catch((e) => console.error(e));

async function carregarPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('ERRO 404!');

        const html = await response.text();
        carregaResultado(html);
    } catch (e) {
        console.log(e);
    }
}

function carregaResultado(response) {}
