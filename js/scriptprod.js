function carregar() {
  fetch("produtos.json")
    .then((Response) => Response.json())
    .then((produtos) => {
      const cardProdutos = document.querySelector("#divCard");

      produtos.map((produto) => {
        const card = document.createElement("div");
        card.classList.add("product");

        const img = document.createElement("img");
        img.src = produto.image;
        img.alt = produto.description;

        const name = document.createElement("h2");
        name.textContent = produto.name;

        const price = document.createElement("h3");
        price.textContent = `R$ ` + produto.price;

        const description = document.createElement("h3");
        description.textContent = produto.description;

        card.appendChild(name);
        card.appendChild(img);
        card.appendChild(price);
        card.appendChild(description);
        cardProdutos.appendChild(card);
      });
    });
}

carregar();

document.addEventListener("DOMContentLoaded", function () {
  const dataContainer = document.getElementById("data-container");

  data.forEach((item) => {
    const col = document.createElement("div");
    col.className = "col-lg-4 col-md-6 mb-4";

    const card = document.createElement("div");
    card.className = "card h-100";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h4");
    cardTitle.className = "card-title";
    cardTitle.textContent = item.title;

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = item.description;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    col.appendChild(card);
    dataContainer.appendChild(col);
  });
});
