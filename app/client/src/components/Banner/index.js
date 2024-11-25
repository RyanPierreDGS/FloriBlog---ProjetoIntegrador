import React from 'react';
import styles from './Banner.modules.css';

function Banner() {
    return(
        <section id="sec_index-primeira" className={styles.Banner}> 
        <div id="container_sec-primeira">
            <div class="container_sec-info text-center"> 
                <span class="promotion d-block mb-3 text-uppercase">
                    Por tempo limitado!!!
                </span>
                <span class="atencao d-block mb-3">
                    Não perca essa chance.
                </span>
                <h2 class="title_sec mb-4">Aprenda o passo-a-passo para abrir sua Floricultura!!</h2>
                <p class="desc_sec mb-4">
                    Você é apaixonado(a) por flores? Já sonhou em abrir e tocar sozinha sua própria rede de
                    Floriculturas?
                    Gostaria de entender como você poderá abrir sua própria floricultura do ZERO?
                    <span class="saiba_mais"> Clique em Saiba mais e aproveite.</span>
                </p>
                <button class="btn_sec">Saiba mais...</button>
            </div>
        </div>
    </section> 
    )
}



export default Banner;