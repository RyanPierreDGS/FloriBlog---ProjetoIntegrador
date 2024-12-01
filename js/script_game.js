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
    startTimer(); // Inicia o timer para a nova pergunta
}

// Mostrar questão e respostas
function showQuestion(question) {
    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer-buttons");

    questionElement.innerText = question.question;
    answerButtonsElement.innerHTML = ""; // Limpa os botões de resposta

    question.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        button.dataset.correct = answer.correct;
        button.onclick = () => selectAnswer(button, answer.explanation); // Adiciona explicação
        answerButtonsElement.appendChild(button);
    });
}

// Reinicia o estado
function resetState() {
    clearInterval(timerInterval); // Para o timer anterior
    timerCount = 15; // Reseta o contador
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("explanation").innerText = ""; // Limpa a explicação
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
            alert("Tempo esgotado!");
            showCorrectAnswer(); // Mostra a resposta correta
            document.getElementById("next-btn").style.display = "block";
        }
    }, 1000);
}

// Seleção da resposta
function selectAnswer(button, explanation) {
    clearInterval(timerInterval); // Para o timer
    const correct = button.dataset.correct === "true";

    if (correct) {
        score++;
        document.getElementById("score").innerText = `Pontos: ${score}`;
        button.style.backgroundColor = "#66bb6a"; // Verde
    } else {
        button.style.backgroundColor = "#ef5350"; // Vermelho
    }

    showCorrectAnswer();
    document.getElementById("explanation").innerText = explanation; // Mostra explicação

    document.querySelectorAll(".btn").forEach((btn) => (btn.disabled = true));
    document.getElementById("next-btn").style.display = "block";
}

// Mostrar resposta correta
function showCorrectAnswer() {
    document.querySelectorAll(".btn").forEach((button) => {
        if (button.dataset.correct === "true") {
            button.style.backgroundColor = "#66bb6a"; // Destaque verde
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

// Perguntas e respostas com explicações
const questions = [
    {
        question: "Qual é o principal cultivo agrícola do Brasil?",
        answers: [
            { text: "Soja", correct: true, explanation: "A soja é o principal cultivo devido à sua grande exportação." },
            { text: "Milho", correct: false, explanation: "Embora importante, o milho é menos exportado que a soja." },
            { text: "Café", correct: false, explanation: "O café é relevante, mas o Brasil é mais forte na soja." },
            { text: "Cana-de-açúcar", correct: false, explanation: "Apesar de amplamente cultivada, a soja domina o mercado." },
        ],
    },
    // Outras perguntas...
];
