function revelar() {
    
    const imagem = document.querySelector(".card-img-top");
    imagem.src = "img/_vinicius_junior.png";
    imagem.alt = "Vinícius Júnior";

    const spanNome = document.querySelector("#Nome span.placeholder");
    const rank     = document.getElementById("Rank");
    const dataNas  = document.getElementById("Data_Nas");
    const altura   = document.getElementById("Alutra");
    const posicao  = document.getElementById("Posição ");

    spanNome.textContent = "Vinícius José Paixão de Oliveira Júnior";
    rank.textContent     = "9,5";
    dataNas.textContent  = "Nascimento: 12/07/2000 (25 anos)";
    altura.textContent   = "Altura: 1,76 m";
    posicao.textContent  = "Posição: Ponta-esquerda / Atacante";

    const elementos = [spanNome, dataNas, altura, posicao];
    elementos.forEach(el => {
        el.classList.toggle("placeholder");
        el.classList.add("card-text");      
    });

    document.getElementById("Nome").classList.remove("placeholder-glow");
    document.querySelector("p.placeholder-glow")?.classList.remove("placeholder-glow");
}