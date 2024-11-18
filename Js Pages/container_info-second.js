document.addEventListener('DOMContentLoaded', function () {
    const infoPontos = document.querySelectorAll('.box_info-pontos');
    const boxPonto = document.getElementById('box_ponto');

    infoPontos.forEach(ponto => {
        ponto.addEventListener('mouseover', function () {
            // Limpa o conteúdo anterior
            boxPonto.innerHTML = '';

            // Cria um novo card
            const card = document.createElement('div');
            card.classList.add('card-info');
            card.innerText = this.getAttribute('data-info');

            // Adiciona o card ao box_ponto
            boxPonto.appendChild(card);
        });

        // Limpar o conteúdo ao sair do hover
        ponto.addEventListener('mouseout', function () {
            boxPonto.innerHTML = '';
        });
    });
});