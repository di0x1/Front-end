const produto = {
    "123": {"nome": "Coca-cola Espumante", "preco": 9.99},
    "456": {"nome": "Um mamute Pequenino", "preco": 8.99},
    "789": {"nome": "Vampiro Doidao", "preco": 4.69},
    "101": {"nome": "Mansão Maromba Protein Shake", "preco": 19.99},
    "102": {"nome": "Toguro 100% do Seu Potencial (suplemento)", "preco": 99.99},
    "103": {"nome": "Aura em Cápsula (sem garantia)", "preco": 7.77},
    "104": {"nome": "Guiana Brasileira Pastel de Belém", "preco": 3.50},
    "105": {"nome": "Tralalero Tralala (áudio em loop)", "preco": 0.01},
    "106": {"nome": "Bombardino Crocodilo Recheado", "preco": 12.49},
    "107": {"nome": "Garçom Tem Pitú? (pack 6un)", "preco": 24.90},
    "108": {"nome": "Morango do Ódio (receita deu errado)", "preco": 5.99},
    "109": {"nome": "Marisa Maiô Edição Limitada", "preco": 69.00},
    "110": {"nome": "Gerluce Atrasada (cronômetro)", "preco": 15.00},
    "111": {"nome": "Nazaré Confusa Kit Festa", "preco": 18.00},
    "112": {"nome": "Por Mim (resposta seca embalada)", "preco": 2.99},
    "113": {"nome": "Vampeta contra o Tarifaço (camiseta)", "preco": 45.00},
    "114": {"nome": "Sabour energetico", "preco": 2.50},

}

let = carrinho =  [];

const audio = new Audio("bip.mp3");

window.onload = () =>{
    document.getElementById("cod"),focus();

}

function addProduto(){
    const codValue = document.getElementById("cod");
    const qtdValue = document.getElementById("qtd");


    const codigo = codValue.value;
    const quantidade = qtdValue.value;

    if(!produto[codigo]){
        AlertItem();
        return;
    }

    const produtoBase = produto[codigo];
    const item ={
        nome: produto.nome,
        preco: produtoBase.preco,
        quantidade: quantidade,
        subtotal: produto.preco.preco*quantidade

    };

    carrinho.push(item);
    audio.currentTime = 0;
    audio.play();

    atualizarTela();


}

function atualizarTela(){
    const lista = getElementById("lista");
    lista.innerHTML = "";

    let total = 0;


    carrinho.forEach((item, index) =>{
        total += item.subtotal;

        const li = document.createElement("li");
        li.className = "list-group-item";

        li.innerHTML = `<div class = "d-flex justify-content-between">
        <strong>${item.nome}</strong>
        <small> ${item.quantidade} x R$ ${item.preco} = <strong>${item.subtotal}
        </strong></small>';

        lista.appendindChild(li);
    });

}