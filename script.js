
const botoesAdicionar = document.querySelectorAll(".add-carrinho");
const listaCarrinho = document.getElementById("lista-carrinho");
const totalTexto = document.getElementById("total");

carrinho = []

function atualizaCarrinho(){
    listaCarrinho.innerHTML = '';
    total = 0;

    carrinho.forEach((item, index) => {
        li = document.createElement('li');
        li.innerHTML = item.nome +'-' + item.preco;
        listaCarrinho.appendChild(li);
        total += item.preco;
    });
    totalTexto,innerHTML = 'Total R$' + total.toFixed(2);
}

botoesAdicionar.forEach(botao => {
    botao.addEventListener("click", () => {
        const nome = botao.getAttribute("data-nome");
        const preco = parseFloat(botao.getAttribute("data-preco"));


        const items = {nome, preco}
        carrinho.push (items);


        atualizaCarrinho();
    })
});