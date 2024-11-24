import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <body class="light-mode">
      <header id="header">
        <div class="header__name-logo">
          <span id="flori">Flori</span>
          <span id="blog">Blog</span>
        </div>
        <div id="header__nav-menu">
          <nav>
            <ul id="header__menu">
              <li>
                <a class="header__nav-link" href="index.html">
                  Home
                </a>
              </li>
              <li>
                <a class="header__nav-link" href="quemSomos.html">
                  Quem Somos
                </a>
              </li>
              <li>
                <a class="header__nav-link" href="GameAgro.html">
                  GameAgro
                </a>
              </li>
              <li>
                <a class="header__nav-link" href="contato.html">
                  Entre em Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <input type="checkbox" class="checkbox" id="chk" />
          <label class="label" for="chk">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <div class="ball"></div>
          </label>
        </div>
      </header>
      {/* <!--Fim da Section de Blog--> */}
      <section id="sec_game">
        <div id="contain_box-game">
          <div id="box-aside">
            <button id="btn_game">Acessar Game</button>
          </div>
          <div id="box_info-game">informações</div>
        </div>
      </section>{" "}
      {/* <!--Final da section do Game --> */}
      <footer style="font-size: 30px; position: relative; bottom: 0; width: 100%; background-color: rgba(41, 111, 45, 0.71); color: white; text-align: center; padding: 10px;">
        <p>FloriBlog &copy; 2024 Direitos Reservados</p>
      </footer>{" "}
      {/*  <!--final da sectionde rodapé--> */}
      <script src="Js Pages/container_cards.js"></script>
      <script src="script.js"></script>
      <script>
        src="https://kit.fontawesome.com/998c60ef77.js" crossorigin="anonymous"
      </script>
      <script>
        const chk = document.getElementById('chk')
        chk.addEventListener('change', () =&gt;{" "}
        {document.body.classList.toggle("dark")})
      </script>
    </body>
  );
}

export default App;
