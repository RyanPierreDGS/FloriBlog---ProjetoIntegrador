document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#nav, #navbarSupportedContent");
  const heroHeight = document.querySelector("#nav ").offsetHeight;

  // Define o ponto em que a mudança ocorre (60% da altura da tela)
  const triggerHeight = heroHeight * 0.6;

  window.addEventListener("scroll", function () {
    if (window.scrollY > triggerHeight) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("#navbarSupportedContent");
  const heroHeight = document.querySelector("#nav").offsetHeight;

  // Define o ponto em que a mudança ocorre (60% da altura da tela)
  const triggerHeight = heroHeight * 0.6;

  window.addEventListener("scroll", function () {
    if (window.scrollY > triggerHeight) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  });
});
