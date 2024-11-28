document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("#header");
    const heroHeight = document.querySelector("#sec_index-primeira").offsetHeight;
    
    // Define o ponto em que a mudança ocorre (60% da altura da tela)
    const triggerHeight = heroHeight * 0.6;

    window.addEventListener("scroll", function() {
        if (window.scrollY > triggerHeight) {
            header.classList.add("scroll");
        } else {
            header.classList.remove("scroll");
        }
    });
});

// Detecta se está na página principal (index.html)
const isHomePage = window.location.pathname.endsWith("index.html");

const header = document.getElementById("header");
if (isHomePage) {
    header.classList.add("fixed-header");
}