import React, { useEffect } from 'react';
import styles from './Info.modules.css';

function Info() {
    useEffect(() => {
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

        // Cleanup function to remove event listeners when the component is unmounted
        return () => {
            infoPontos.forEach(ponto => {
                ponto.removeEventListener('mouseover', function () {
                    boxPonto.innerHTML = '';
                });

                ponto.removeEventListener('mouseout', function () {
                    boxPonto.innerHTML = '';
                });
            });
        };
    }, []);

    return (
        <section className={styles.section}>
            <div className="info_title">
                Conheça sobre nós
            </div>
            <div id="container_info--pr">
                <div id="box_ponto"></div>
                <div id="box_pontos">
                    <div className="box_info-pontos" data-info="Proposta da empresa...">Proposta</div>
                    <div className="box_info-pontos" data-info="Nossos objetivos incluem...">Objetivos</div>
                    <div className="box_info-pontos" data-info="Nossos valores são...">Valores</div>
                </div>
            </div>
        </section>
    );
}

export default Info;
