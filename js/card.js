function carregarCards() {
  fetch("./js/infoCards.json")
    .then((response) => response.json())
    .then((dadosCards) => {
      const containerCards = document.querySelector("#divInfoCards");

      dadosCards.cards.map((info) => {
        const card = document.createElement("div");
        card.classList.add("divCard");

        const imagem = document.createElement("img");
        imagem.src = info.img;

        const titulo = document.createElement("h2");
        titulo.textContent = info.titulo;

        const eventDate = new Date(info.data_publicacao);

        const options = { ano: "numeric", mes: "long", dia: "numeric" };
        const formattedDate = eventDate.toLocaleDateString("pt-BR", options);

        const data = document.createElement("h3");
        data.textContent = `Data de Publicação: ` + formattedDate;

        const resumo = document.createElement("p");
        resumo.textContent = info.resumo;

        const botao = document.createElement("button");
        botao.textContent = "Acessar Conteúdo";

        card.appendChild(imagem);
        card.appendChild(titulo);
        card.appendChild(resumo);
        card.appendChild(data);
        card.appendChild(botao);
        containerCards.appendChild(card);
      });
    })
    .catch((error) => console.error("Erro ao carregar o arquivo JSON:", error));
}

carregarCards();
