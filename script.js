const questions = [
    {
        question: "Qual é o principal cultivo agrícola do Brasil?",
        answers: [
            { text: "Soja", correct: true },
            { text: "Milho", correct: false },
            { text: "Café", correct: false },
            { text: "Cana-de-açúcar", correct: false }
        ]
    },
    {
        question: "Qual destes métodos é mais sustentável para o solo?",
        answers: [
            { text: "Monocultura", correct: false },
            { text: "Rotação de culturas", correct: true },
            { text: "Uso intensivo de fertilizantes", correct: false },
            { text: "Queimada", correct: false }
        ]
    },
    {
        question: "Qual cultura agrícola é a principal responsável por fazer do Mato Grosso o maior produtor agrícola do Brasil?",
        answers: [
            { text: "Cana-de-açucar", correct: false },
            { text: "Algodão", correct: false },
            { text: "Milho", correct: false },
            { text: "Soja", correct: true }
        ]
    },
    // Adicione mais perguntas conforme necessário
];

document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');

});

let currentQuestionIndex = 0;
let score = 0;
let playerName = "";

function startGame() {
    const nameInput = document.getElementById('name-input').value;
    if (nameInput.trim() === "") {
        alert("Por favor, digite seu nome!");
        return;
    }
    playerName = nameInput;
    document.getElementById('player-name').innerText = `Jogador: ${playerName}`;
    document.getElementById('start-container').style.display = "none";
    document.getElementById('quiz-container').style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').innerText = `Pontos: ${score}`;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionElement = document.getElementById('question');
    const answerButtonsElement = document.getElementById('answer-buttons');

    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = answerButtonsElement.children[index];
        button.innerText = answer.text;
        button.dataset.correct = answer.correct;
    });
}

function resetState() {
    document.getElementById('next-btn').style.display = 'none';
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.style.backgroundColor = '#4caf50';
        button.disabled = false;
    });
}

function selectAnswer(button) {
    const correct = button.dataset.correct === 'true';
    if (correct) {
        score++;
        document.getElementById('score').innerText = `Pontos: ${score}`;
        button.style.backgroundColor = '#66bb6a';
    } else {
        button.style.backgroundColor = '#ef5350';
    }

    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.disabled = true;
    });

    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setNextQuestion();
    } else {
        alert(`Parabéns, ${playerName}! Você completou o quiz com ${score} pontos.`);
        document.getElementById('quiz-container').style.display = "none";
        document.getElementById('start-container').style.display = "block";
        document.getElementById('name-input').value = "";
    }
}