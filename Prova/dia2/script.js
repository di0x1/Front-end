function add() {
    const cardOriginal = document.querySelector("#Cards .card");

    const novoCard = cardOriginal.cloneNode(true);

    const img = novoCard.querySelector(".card-img-top");
    img.src = "img/Lucas_Paqueta.webp";
    img.alt = "Lucas Paquetá";

    novoCard.querySelector("h5 span.card-title").textContent = "Lucas Paquetá";

    novoCard.querySelector(".badge").textContent = "8,8";

    const dados = novoCard.querySelectorAll("p.card-text > span");
    dados[0].innerHTML = "<strong>Nascimento:</strong> 27/08/1997";
    dados[1].innerHTML = "<strong>Altura:</strong> 1,80";
    dados[2].innerHTML = "<strong>Posição:</strong> Meio-campista";

    novoCard.querySelectorAll("[id]").forEach(function (el) {
        el.removeAttribute("id");
    });

    novoCard.style.marginLeft = "20px";

    document.getElementById("Cards").appendChild(novoCard);
}