// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas
const questions = [
  {
    question: "What messages are given by circular traffic signs that have a blue background?",
    answers: [
      { answer: "They give temporary directions during a diversion", correct: false },
      { answer: "They give directions to car parks", correct: false },
      { answer: "They give motorway information", correct: false },
      { answer: "They give mandatory instructions", correct: true }
    ]
  },
  {
    question: "Where would you see a contraflow bus lane?",
    answers: [
      { answer: "On a dual carriageway", correct: false },
      { answer: "On a roundabout", correct: false },
      { answer: "On an urban motorway", correct: false },
      { answer: "On a one-way street", correct: true }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Bus station on the right", correct: false },
      { answer: "Contraflow bus lane", correct: true },
      { answer: "With-flow bus lane", correct: false },
      { answer: "Give way to buses", correct: false }
    ]
  },
  {
    question: "What does a sign with a brown background show?",
    answers: [
      { answer: "Tourist directions", correct: true },
      { answer: "Primary roads", correct: false },
      { answer: "Motorway routes", correct: false },
      { answer: "Minor roads", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Tourist attraction", correct: true },
      { answer: "Beware of trains", correct: false },
      { answer: "Level crossing", correct: false },
      { answer: "Beware of trams", correct: false }
    ]
  },
  {
    question: "What's the purpose of triangular shaped signs?",
    answers: [
      { answer: "To give warnings", correct: true },
      { answer: "To give information", correct: false },
      { answer: "To give orders", correct: false },
      { answer: "To give directions", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Turn left ahead", correct: false },
      { answer: "T-junction", correct: true },
      { answer: "No through road", correct: false },
      { answer: "Give way", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Multi-exit roundabout", correct: false },
      { answer: "Risk of ice", correct: true },
      { answer: "Six roads converge", correct: false },
      { answer: "Place of historical interest", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Crossroads", correct: true },
      { answer: "Level crossing with gate", correct: false },
      { answer: "Level crossing without gate", correct: false },
      { answer: "Ahead only", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Ring road", correct: false },
      { answer: "Mini-roundabout", correct: false },
      { answer: "No vehicles", correct: false },
      { answer: "Roundabout", correct: true }
    ]
  },
  {
    question: "What information would be shown in a triangular road sign?",
    answers: [
      { answer: "Road narrows", correct: true },
      { answer: "Ahead only", correct: false },
      { answer: "Keep left", correct: false },
      { answer: "Minimum speed", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Cyclists must dismount", correct: false },
      { answer: "Cycles aren't allowed", correct: false },
      { answer: "Cycle route ahead", correct: true },
      { answer: "Cycle in single file", correct: false }
    ]
  },
  {
    question: "Which sign means that pedestrians may be walking along the road?",
    answers: [
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false }
    ]
  },
  {
    question: "Which sign means there's a double bend ahead?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Wait at the barriers", correct: false },
      { answer: "Wait at the crossroads", correct: false },
      { answer: "Give way to trams", correct: true },
      { answer: "Give way to farm vehicles", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Hump bridge", correct: false },
      { answer: "Humps in the road", correct: true },
      { answer: "Entrance to tunnel", correct: false },
      { answer: "Soft verges", correct: false }
    ]
  },
  {
    question: "Which sign means the end of a dual carriageway?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: true }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "End of dual carriageway", correct: true },
      { answer: "Tall bridge", correct: false },
      { answer: "Road narrows", correct: false },
      { answer: "End of narrow bridge", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Side winds", correct: true },
      { answer: "Road noise", correct: false },
      { answer: "Airport", correct: false },
      { answer: "Adverse camber", correct: false }
    ]
  },
  {
    question: "What does this traffic sign mean?",
    answers: [
      { answer: "Slippery road ahead", correct: false },
      { answer: "Tyres liable to punctures ahead", correct: false },
      { answer: "Danger ahead", correct: true },
      { answer: "Service area ahead", correct: false }
    ]
  },
  {
    question: "You're about to overtake. What should you do when you see this sign?",
    answers: [
      { answer: "Overtake the other driver as quickly as possible", correct: false },
      { answer: "Move to the right to get a better view", correct: false },
      { answer: "Switch your headlights on before overtaking", correct: false },
      { answer: "Hold back until you can see clearly ahead", correct: true }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Level crossing with gate or barrier", correct: true },
      { answer: "Gated road ahead", correct: false },
      { answer: "Level crossing without gate or barrier", correct: false },
      { answer: "Cattle grid ahead", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "No trams ahead", correct: false },
      { answer: "Oncoming trams", correct: false },
      { answer: "Trams crossing ahead", correct: true },
      { answer: "Trams only", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Adverse camber", correct: false },
      { answer: "Steep hill downwards", correct: true },
      { answer: "Uneven road", correct: false },
      { answer: "Steep hill upwards", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Uneven road surface", correct: false },
      { answer: "Bridge over the road", correct: false },
      { answer: "Road ahead ends", correct: false },
      { answer: "Water across the road", correct: true }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Turn left for parking area", correct: false },
      { answer: "No through road on the left", correct: true },
      { answer: "No entry for traffic turning left", correct: false },
      { answer: "Turn left for ferry terminal", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "T-junction", correct: false },
      { answer: "No through road", correct: true },
      { answer: "Telephone box ahead", correct: false },
      { answer: "Toilet ahead", correct: false }
    ]
  },
  {
    question: "Which is the sign for a ring road?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: true },
      { answer: "", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "The right-hand lane ahead is narrow", correct: false },
      { answer: "Right-hand lane for buses only", correct: false },
      { answer: "Right-hand lane for turning right", correct: false },
      { answer: "The right-hand lane is closed", correct: true }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Change to the left-hand lane", correct: false },
      { answer: "Leave at the next exit", correct: false },
      { answer: "Contraflow system", correct: true },
      { answer: "One-way street", correct: false }
    ]
  }
];

// substituição do quizz para a primeira pergunta
function init() {
  // criar primeira pergunta
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  // limpar questão anterior
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  // alterar texto da pergunta
  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  // inserir alternativas
  questions[i].answers.forEach((answer, i) => {
    // cria template botão quizz
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);

    // remover hide e template class
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    // inserir alternativa na tela
    answerBox.appendChild(answerTemplate);

    // inserir evento click no botão
    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  // incrementar o número da questão
  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  // seleciona todos os botões
  const buttons = answerBox.querySelectorAll('button');

  // verifica se resposta correta e add classe
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');

      // checa se usuário acertou a pergunta
      if (btn === button) {
        // incremento dos pontos
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  // exibir próxima pergunta
  nextQuestion();
}

// exibe a pŕoxima pergunta no quizz
function nextQuestion() {
  // timer para usuário ver as respostas
  setTimeout(function () {
    // verifica se ainda há perguntas
    if (actualQuestion >= questions.length) {
      // apresenta mensagem de sucesso
      showSuccessMessage();
      return;
    }

    createQuestion(actualQuestion);
  }, 4050);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  // trocar dados tela de sucesso
  // calcular score
  const score = ((points / questions.length) * 100).toFixed(2);

  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  //alterar o número de perguntas corretas
  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  // alterar o total de perguntas
  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esonde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  //zerar jogo
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();