window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    const heroHeight = document.querySelector(".hero").offsetHeight;

    // Checa se o scroll passou da altura da seção de background
    if (window.scrollY > heroHeight) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});