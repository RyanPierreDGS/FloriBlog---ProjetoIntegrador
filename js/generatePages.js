const fs = require("fs");
const path = require("path");

// Leitura e análise do arquivo JSON
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "infoCards.json"), "utf-8")
);

// Geração de arquivos HTML para cada card
data.cards.forEach((card) => {
  const htmlContent = `
<!doctype html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> O Mundo das Flores || FloriBlog </title>
    <link rel="stylesheet" href="../cssComponents/nav_home.css">
    <link rel="stylesheet" href="../cssComponents/pub.css">
    <link rel="icon" href="../icon.png" type="image/x-icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./cssComponents/section_game-Game.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg" id="nav">
        <div class="container-fluid">
            <a class="navbar-brand nav_logo fs-1 " href="../index.html"><span class="flori">Flori</span><span
                    class="blog">Blog</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                        <a style="font-size: 20px; color: #718143;" class="nav-link active nav__nav-link linkfs p-4"
                            aria-current="page" href="../index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a style="font-size: 20px; color: #718143;" class="nav-link active nav__nav-link linkfs p-4"
                            href="../FloriGame.html">FloriGame</a>
                    </li>

                    <li class="nav-item">
                        <a style="font-size: 20px; color: #718143;" class="nav-link active nav__nav-link linkfs p-4"
                            href="../index.html">Curiosidades</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="div_info">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators"> <button type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button> <button
                    type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button> <button type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2" aria-label="Slide 3"></button> </div>
            <div class="carousel-inner">
                <div class="carousel-item active"> <img src="${card.img}" class="d-block" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="text-black">Primeiro Slide</h5>
                        <p class="text-black">Descrição do primeiro slide.</p>
                    </div>
                </div>
                <div class="carousel-item"> <img src="${card.img2}" class="d-block " alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="text-black">Segundo Slide</h5>
                        <p class="text-black">Descrição do segundo slide.</p>
                    </div>
                </div>
                <div class="carousel-item"> <img src="${card.img3}" class="d-block " alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5 class="text-black">Terceiro Slide</h5>
                        <p class="text-black">Descrição do terceiro slide.</p>
                    </div>
                </div>
            </div> <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span
                    class="visually-hidden">Anterior</span> </button> <button class="carousel-control-next"
                type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"> <span
                    class="carousel-control-next-icon" aria-hidden="true"></span> <span
                    class="visually-hidden">Próximo</span> </button>
        </div>
        <h1>${card.titulo}</h1>
        <br />
        <p style="text-align: justify; text-indent: 40px;">${card.conteudo}</p>
        </div>
        <div class="container mt-5">
            <h1 class="mb-4 p-4">Sistema de Comentários</h1>
            <form id="formComentario">
                <div class="form-group"> <label for="nome">Nome:</label> <input type="text" class="form-control"
                        id="nome" required> </div>
                <div class="form-group"> <label for="comentario">Comentário:</label> <textarea class="form-control"
                        id="comentario" rows="3" required></textarea> </div> <button type="submit"
                    class="btn mt-3 text-white w-100" style="background-color: #718143 ">Enviar</button>
            </form>
            <hr>
            <h2>Comentários:</h2>
            <div id="listaComentarios" class="mt-3"> <!-- Comentários serão inseridos aqui dinamicamente --> </div>
        </div>
    </main>
    <footer style=" font-size: 1rem; position: relative; bottom: 0; width: 100%; background-color: #718143; color: white;
        text-align: center; padding: 10px;">
        <p>FloriBlog &copy; 2024 Direitos Reservados</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz4fnFO9gyb4fQpUfGA4rXrLs6YFSXpD3iS3tkIWIABJ1p4OHh5E5pIbbQ"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
        integrity="sha384-DOORX7OD3mt7tXrmK5vsdfxK0S5QF9ZDRnuJ8ASzUbMIyQXO/Yx0v6zzO06f0ks4"
        crossorigin="anonymous"></script>
    <script src="../js/container_info-second.js"></script>
    <script src="../js/header.js"></script>
    <script src="../js/card.js"></script>
    <script src="../js/comentarios.js"></script>
</body>

</html>
  `;
  fs.writeFileSync(path.join(__dirname, `card${card.id}.html`), htmlContent);
});
