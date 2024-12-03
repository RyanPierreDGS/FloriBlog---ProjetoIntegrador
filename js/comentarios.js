document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formComentario");
  const listaComentarios = document.getElementById("listaComentarios");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const comentario = document.getElementById("comentario").value;

    if (nome && comentario) {
      const novoComentario = {
        nome: nome,
        comentario: comentario,
        data: new Date().toLocaleString(),
      };

      adicionarComentario(novoComentario);
      form.reset();
    }
  });

  function adicionarComentario(comentario) {
    // Adiciona o comentário na lista visualmente
    const comentarioElemento = document.createElement("div");
    comentarioElemento.className = "comentario mt-3";
    comentarioElemento.innerHTML = `
        <strong>${comentario.nome}</strong> - <em>${comentario.data}</em>
        <p>${comentario.comentario}</p>
        <hr>
      `;
    listaComentarios.appendChild(comentarioElemento);

    // Salva o comentário no arquivo JSON (simulado aqui)
    salvarComentario(comentario);
  }

  function salvarComentario(comentario) {
    fetch("./js/db.json")
      .then((response) => response.json())
      .then((data) => {
        data.comentarios.push(comentario);
        return fetch("./js/db.json", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      })
      .catch((error) => console.error("Erro ao salvar o comentário:", error));
  }

  // Carrega e exibe os comentários ao iniciar a página
  fetch("./js/db.json")
    .then((response) => response.json())
    .then((data) => {
      data.comentarios.forEach(adicionarComentario);
    })
    .catch((error) => console.error("Erro ao carregar os comentários:", error));
});
