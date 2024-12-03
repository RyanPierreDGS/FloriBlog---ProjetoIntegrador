// Variáveis globais
let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let timerInterval;
let timerCount = 15;
let highScore = 0;

// Função para iniciar o jogo
function startGame() {
  const nameInput = document.getElementById("name-input").value;
  if (nameInput.trim() === "") {
    alert("Por favor, digite seu nome!");
    return;
  }
  playerName = nameInput;
  document.getElementById("player-name").innerText = `Jogador: ${playerName}`;
  document.getElementById("start-container").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  timerCount = 15;
  document.getElementById("score").innerText = `Pontos: ${score}`;
  setNextQuestion();
}

// Função para mostrar a próxima pergunta
function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
  startTimer();
}

// Mostrar questão e respostas
function showQuestion(question) {
  const questionElement = document.getElementById("question");
  const answerButtonsElement = document.getElementById("answer-buttons");

  questionElement.innerText = question.question;
  answerButtonsElement.innerHTML = "";

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.onclick = () => selectAnswer(button, answer.explanation);
    answerButtonsElement.appendChild(button);
  });
}

// Reinicia o estado
function resetState() {
  clearInterval(timerInterval);
  timerCount = 15;
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("explanation").innerText = "";
}

// Timer de 15 segundos
function startTimer() {
  const timerElement = document.getElementById("timer");
  timerElement.innerText = `Tempo restante: ${timerCount}s`;

  timerInterval = setInterval(() => {
    timerCount--;
    timerElement.innerText = `Tempo restante: ${timerCount}s`;

    if (timerCount <= 0) {
      clearInterval(timerInterval);
      showCorrectAnswer();
      document.getElementById("next-btn").style.display = "block";
    }
  }, 1000);
}

// Seleção da resposta
function selectAnswer(button, explanation) {
  clearInterval(timerInterval);
  const correct = button.dataset.correct === "true";

  if (correct) {
    score++;
    document.getElementById("score").innerText = `Pontos: ${score}`;
    button.style.backgroundColor = "#66bb6a";
  } else {
    button.style.backgroundColor = "#ef5350";
  }

  showCorrectAnswer();
  document.getElementById("explanation").innerText = explanation;

  document.querySelectorAll(".btn").forEach((btn) => (btn.disabled = true));
  document.getElementById("next-btn").style.display = "block";
}

// Mostrar resposta correta
function showCorrectAnswer() {
  document.querySelectorAll(".btn").forEach((button) => {
    if (button.dataset.correct === "true") {
      button.style.backgroundColor = "#66bb6a";
    }
  });
}

// Próxima questão
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setNextQuestion();
  } else {
    if (score > highScore) {
      highScore = score;
      alert(`Novo recorde! Sua pontuação mais alta é: ${highScore}`);
    }
    alert(`Parabéns, ${playerName}! Você terminou com ${score} pontos.`);
    resetGame();
  }
}

// Reiniciar o jogo
function resetGame() {
  clearInterval(timerInterval);
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("start-container").style.display = "block";
  document.getElementById("name-input").value = "";
}

const questions = [
  {
    question: "01 - Qual característica é exclusiva do Manacá da Serra?",
    answers: [
      {
        text: "Raízes agressivas",
        correct: false,
        explanation:
          "O Manacá da Serra possui raízes pouco agressivas, ideal para arborização urbana.",
      },
      {
        text: "Mudança de cor das flores",
        correct: true,
        explanation:
          "O Manacá da Serra é a única árvore do seu gênero que apresenta mudança de cor nas flores.",
      },
      {
        text: "Flores amarelas",
        correct: false,
        explanation: "As flores do Manacá da Serra não são amarelas, mas mudam de branco para rosa e roxo.",
      },
      {
        text: "Altura máxima de 8 metros",
        correct: false,
        explanation: "O Manacá da Serra pode atingir até 12 metros de altura.",
      },
    ],
  },
  {
    question: "02 - Qual é a principal função das plantas carnívoras?",
    answers: [
      {
        text: "Capturar insetos por diversão",
        correct: false,
        explanation:
          "As plantas carnívoras capturam insetos para suplementar sua dieta com nutrientes, não por diversão.",
      },
      {
        text: "Sobreviver em solos pobres em nutrientes",
        correct: true,
        explanation:
          "As plantas carnívoras se adaptaram para capturar insetos devido à falta de nutrientes nos solos em que vivem.",
      },
      {
        text: "Atrair polinizadores",
        correct: false,
        explanation: "Embora algumas possam atrair polinizadores, essa não é sua principal função.",
      },
      {
        text: "Propagar espécies invasoras",
        correct: false,
        explanation: "As plantas carnívoras não propagam espécies invasoras.",
      },
    ],
  },
  {
    question: "03 - Qual é a altura máxima que a Quaresmeira pode alcançar?",
    answers: [
      {
        text: "5 metros",
        correct: false,
        explanation: "A Quaresmeira pode alcançar alturas maiores do que 5 metros.",
      },
      {
        text: "12 metros",
        correct: true,
        explanation:
          "A Quaresmeira pode alcançar até 12 metros de altura.",
      },
      {
        text: "20 metros",
        correct: false,
        explanation: "A altura máxima da Quaresmeira é de 12 metros, não 20 metros.",
      },
      {
        text: "8 metros",
        correct: false,
        explanation: "Embora a Quaresmeira possa medir 8 metros, essa não é sua altura máxima.",
      },
    ],
  },
  {
    question: "04 - Qual é o principal uso da Monstera adansonii em decoração?",
    answers: [
      {
        text: "Como cerca-viva",
        correct: false,
        explanation:
          "A Monstera adansonii é mais usada como elemento decorativo em ambientes internos devido à sua aparência interessante.",
      },
      {
        text: "Para jardinagem vertical",
        correct: true,
        explanation:
          "A Monstera adansonii é ideal para jardinagem vertical, compondo o estilo urban jungle.",
      },
      {
        text: "Como árvore de sombra",
        correct: false,
        explanation: "A Monstera adansonii é uma planta de interior, não uma árvore de sombra.",
      },
      {
        text: "Em projetos de reflorestamento",
        correct: false,
        explanation: "A Monstera adansonii não é comumente usada em projetos de reflorestamento.",
      },
    ],
  },
  {
    question: "05 - Qual planta é conhecida como 'Cacto-da-Páscoa'?",
    answers: [
      {
        text: "Flor-de-maio",
        correct: true,
        explanation:
          "A Flor-de-maio é também conhecida como 'Cacto-da-Páscoa' devido ao seu período de floração.",
      },
      {
        text: "Monstera adansonii",
        correct: false,
        explanation: "A Monstera adansonii não é conhecida como 'Cacto-da-Páscoa'.",
      },
      {
        text: "Lobelia brasiliensis",
        correct: false,
        explanation: "A Lobelia brasiliensis não é conhecida como 'Cacto-da-Páscoa'.",
      },
      {
        text: "Manacá da Serra",
        correct: false,
        explanation: "O Manacá da Serra não é conhecido como 'Cacto-da-Páscoa'.",
      },
    ],
  },
  {
    question: "06 - Qual é uma característica da Lobelia brasiliensis?",
    answers: [
      {
        text: "Flores brancas",
        correct: false,
        explanation:
          "A Lobelia brasiliensis possui flores de um azul intenso, não brancas.",
      },
      {
        text: "Flores delicadas e vibrantes",
        correct: true,
        explanation:
          "A Lobelia brasiliensis encanta com suas flores delicadas e de cor vibrante.",
      },
      {
        text: "Raízes agressivas",
        correct: false,
        explanation: "A Lobelia brasiliensis não tem raízes agressivas.",
      },
      {
        text: "Cresce em áreas de sombra total",
        correct: false,
        explanation: "A Lobelia brasiliensis cresce em várias condições, não apenas sombra total.",
      },
    ],
  },
  {
    question: "07 - Qual é a vantagem de usar um vaso autoirrigável para a Monstera adansonii?",
    answers: [
      {
        text: "Facilita o cultivo",
        correct: true,
        explanation:
          "O vaso autoirrigável facilita o cultivo da Monstera adansonii, economizando tempo.",
      },
      {
        text: "Aumenta a produção de flores",
        correct: false,
        explanation: "A Monstera adansonii é conhecida mais por suas folhas do que por flores.",
      },
      {
        text: "Promove raízes agressivas",
        correct: false,
        explanation: "Um vaso autoirrigável não promove raízes agressivas.",
      },
      {
        text: "Necessita de mais luz",
        correct: false,
        explanation: "Um vaso autoirrigável não altera a necessidade de luz da Monstera adansonii.",
      },
    ],
  },
  {
    question: "08 - Qual ação é recomendada para a preservação da Lobelia brasiliensis?",
    answers: [
      {
        text: "Expansão agrícola",
        correct: false,
        explanation:
          "A expansão agrícola é um dos fatores que ameaçam a Lobelia brasiliensis.",
      },
      {
        text: "Desmatamento controlado",
        correct: false,
        explanation: "O desmatamento contribui para o declínio da Lobelia brasiliensis.",
      },
      {
        text: "Preservação do habitat natural",
        correct: true,
        explanation:
          "Preservar o habitat natural é essencial para a sobrevivência da Lobelia brasiliensis.",
      },
      {
        text: "Uso de pesticidas",
        correct: false,
        explanation: "O uso de pesticidas pode prejudicar ainda mais a Lobelia brasiliensis.",
      },
    ],
  },
  {
    question: "09 - Para qual finalidade a Flor-de-Maio é comumente cultivada?",
    answers: [
      {
        text: "Arborização urbana",
        correct: false,
        explanation:
          "A Flor-de-Maio é mais comumente cultivada como planta ornamental em vasos e jardins.",
      },
      {
        text: "Produção de frutos",
        correct: false,
        explanation: "A Flor-de-Maio não é cultivada para a produção de frutos.",
      },
      {
        text: "Decoração de interiores",
        correct: true,
        explanation:
          "A Flor-de-Maio é popularmente utilizada na decoração de interiores devido às suas flores chamativas.",
      },
      {
        text: "Reflorestamento",
        correct: false,
        explanation: "A Flor-de-Maio não é geralmente utilizada em reflorestamento.",
      },
    ],
  },
  {
    question: "10 - Por que as plantas carnívoras capturam insetos?",
    answers: [
      {
        text: "Para diversão",
        correct: false,
        explanation:
          "As plantas carnívoras capturam insetos para obter nutrientes, não por diversão.",
      },
      {
        text: "Para obter nutrientes",
        correct: true,
        explanation:
          "As plantas carnívoras se adaptaram a solos pobres em nutrientes e capturam insetos para suprir essa necessidade.",
      },
      {
        text: "Para polinização",
        correct: false,
        explanation: "A principal função da captura de insetos não é a polinização.",
      },
      {
        text: "Para competir com outras plantas",
        correct: false,
        explanation: "A captura de insetos não está relacionada à competição com outras plantas.",
      },
    ],
  },
];

// Função para finalizar o jogo e exibir a tela de finalização
function finishGame() {
  document.getElementById("quiz-container").style.display = "none"; // Esconde o container do quiz
  document.getElementById("start-container").style.display = "none"; // Garante que a tela inicial não apareça

  const totalQuestions = questions.length;
  const wrongAnswers = totalQuestions - score;
  const accuracy = ((score / totalQuestions) * 100).toFixed(2);

  // Preenche os dados na tela de finalização
  document.getElementById("final-player-name").innerText = playerName;
  document.getElementById("total-questions").innerText = totalQuestions;
  document.getElementById("correct-answers").innerText = score;
  document.getElementById("wrong-answers").innerText = wrongAnswers;
  document.getElementById("accuracy-percentage").innerText = accuracy;

  // Exibe a tela de finalização
  document.getElementById("end-screen").style.display = "block";
}

// Função para reiniciar o jogo
function restartGame() {
  document.getElementById("end-screen").style.display = "none"; // Esconde a tela de finalização
  resetGame(); // Chama a função que reinicia o jogo
}

// Função para redirecionar para a página inicial
function goToHome() {
  window.location.href = "index.html"; // Redireciona para a página inicial
}

// Ajuste na função para exibir a tela de finalização ao invés de alertar
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setNextQuestion(); // Configura a próxima pergunta
  } else {
    finishGame(); // Exibe a tela de finalização
  }
}
