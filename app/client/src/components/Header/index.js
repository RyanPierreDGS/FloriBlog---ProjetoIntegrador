import React from 'react';
import styles from './Header.modules.css';

function Header() {
    window.addEventListener("scroll", function () {
        let header = document.querySelector(".header");
        header.classList.toggle("glass", window.scrollY > 0);
      });

    return (
        <header className={styles.header}>
            <div className="header__name-logo">
                <span id="flori">Flori</span><span id="blog">Blog</span>
            </div>
            <div id="header__nav-menu">
                <nav className="navbar navbar-expand-lg">
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="header__menu">
                            <li className="nav-item">
                                <a className="header__nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="header__nav-link" href="quemSomos.html">Quem Somos</a>
                            </li>
                            <li className="nav-item">
                                <a className="header__nav-link" href="GameAgro.html">FloriGame</a>
                            </li>
                            <li className="nav-item">
                                <a className="header__nav-link" href="contato.html">Entre em Contato</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div>
                <input type="checkbox" className="checkbox" id="chk" />
                <label className="label" htmlFor="chk">
                    <i className="fas fa-moon"></i>
                    <i className="fas fa-sun"></i>
                    <div className="ball"></div>
                </label>
            </div>
        </header>
    );
}

export default Header;



