import React from 'react';
import styles from './Gamezone.modules.css';

function Gamezone() {
    return (
        <section className={styles.section}>
            <div id="container_game">
                <img className="game_img" src="/gamezone.jpg" alt="Gamezone" />
                <div id="aside_game">
                    <div id="desc_game">
                        FloriGame
                    </div>
                    <div id="btn_cont">
                        <a href="GameAgro.html">
                            Jogar Quizz
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Gamezone;
