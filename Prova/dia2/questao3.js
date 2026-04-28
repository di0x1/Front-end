const conjuntoABC = [
    {
        id: "grupo-a",
        titulo: "🅰️ Grupo A",
        selecoes: ["México", "África do Sul", "Coreia do Sul", "República Tcheca"],
        fatos: "O jogo de abertura será México x África do Sul. Confrontos entre Coreia do Sul e seleções europeias já ocorreram em várias Copas, com histórico equilibrado."
    },
    {
        id: "grupo-b",
        titulo: "🅱️ Grupo B",
        selecoes: ["Canadá", "Suíça", "Catar", "Vaga Europeia (Bósnia)"],
        fatos: "O Canadá joga em casa, fator importante de desempenho. Catar e Suíça já se enfrentaram recentemente em amistosos internacionais."
    },
    {
        id: "grupo-c",
        titulo: "🅲 Grupo C",
        selecoes: ["Brasil", "Marrocos", "Haiti", "Escócia"],
        fatos: "Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas."
    }
];

const conjuntoDEF = [
    {
        id: "grupo-a",
        titulo: "🅳 Grupo D",
        selecoes: ["Estados Unidos", "Paraguai", "Austrália", "Turquia"],
        fatos: "Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios."
    },
    {
        id: "grupo-b",
        titulo: "🅴 Grupo E",
        selecoes: ["Alemanha", "Equador", "Costa do Marfim", "Curaçao"],
        fatos: "Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes."
    },
    {
        id: "grupo-c",
        titulo: "🅵 Grupo F",
        selecoes: ["Holanda", "Japão", "Tunísia", "Suécia"],
        fatos: "Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas."
    }
];

let mostrandoABC = true;

function proximo() {
    const conjuntoAtual = mostrandoABC ? conjuntoDEF : conjuntoABC;

    conjuntoAtual.forEach(function (grupo) {
        const div = document.getElementById(grupo.id);

        div.querySelector("h2").textContent = grupo.titulo;

        const ul = div.querySelector("ul");
        ul.innerHTML = "";
        grupo.selecoes.forEach(function (selecao) {
            const li = document.createElement("li");
            li.textContent = selecao;
            ul.appendChild(li);
        });

        div.querySelector("details p").textContent = grupo.fatos;
    });

    mostrandoABC = !mostrandoABC;
}