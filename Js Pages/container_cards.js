document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container_blog-cards");
    const showMoreBtn = document.getElementById("showMoreBtn");
    const cards = container.children;

    // Verifica se há mais de 8 cards
    if (cards.length > 8) {
        showMoreBtn.style.display = "block"; // Exibe o botão se houver mais de 8 cards

        // Limita visualmente a exibição aos primeiros 8 cards
        for (let i = 8; i < cards.length; i++) {
            cards[i].style.display = "none";
        }
    }
    
    // Evento de clique no botão "Mostrar Mais"
    showMoreBtn.addEventListener("click", function () {
        container.classList.toggle("expanded");

        if (container.classList.contains("expanded")) {
            showMoreBtn.textContent = "Mostrar Menos";
            for (let i = 8; i < cards.length; i++) {
                cards[i].style.display = "block"; // Exibe todos os cards
            }
        } else {
            showMoreBtn.textContent = "Mostrar Mais";
            for (let i = 8; i < cards.length; i++) {
                cards[i].style.display = "none"; // Esconde os cards adicionais
            }
        }
    });
});