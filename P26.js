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
    question: "What does this sign mean?",
    answers: [
      { answer: "Leave motorway at next exit", correct: false },
      { answer: "Lane for heavy and slow vehicles", correct: true },
      { answer: "All lorries use the hard shoulder", correct: false },
      { answer: "Rest area for lorries", correct: false }
    ]
  },
  {
    question: "What does a red traffic light mean?",
    answers: [
      { answer: "You should stop unless turning left", correct: false },
      { answer: "Stop, if you're able to brake safely", correct: false },
      { answer: "You must stop and wait behind the stop line", correct: true },
      { answer: "Proceed with care", correct: false }
    ]
  },
  {
    question: "At traffic lights, what does it mean when the amber light shows on its own?",
    answers: [
      { answer: "Prepare to go", correct: false },
      { answer: "Go if the way is clear", correct: false },
      { answer: "Go if no pedestrians are crossing", correct: false },
      { answer: "Stop at the stop line", correct: true }
    ]
  },
  {
    question: "You're at a junction controlled by traffic lights. When should you wait at a green light?",
    answers: [
      { answer: "When pedestrians are waiting to cross", correct: false },
      { answer: "When your exit from the junction is blocked", correct: true },
      { answer: "When you think the lights may be about to change", correct: false },
      { answer: "When you intend to turn right", correct: false }
    ]
  },
  {
    question: "You're in the left-hand lane at traffic lights, waiting to turn left. Which signal means you must wait?",
    answers: [
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Traffic lights out of order", correct: true },
      { answer: "Amber signal out of order", correct: false },
      { answer: "Temporary traffic lights ahead", correct: false },
      { answer: "New traffic lights ahead", correct: false }
    ]
  },
  {
    question: "Who has priority when traffic lights are out of order?",
    answers: [
      { answer: "Traffic going straight on", correct: false },
      { answer: "Traffic turning right", correct: false },
      { answer: "Nobody", correct: true },
      { answer: "Traffic turning left", correct: false }
    ]
  },
  {
    question: "Where would you find these flashing red light signals?",
    answers: [
      { answer: "Pelican crossings", correct: false },
      { answer: "Motorway exits", correct: false },
      { answer: "Zebra crossings", correct: false },
      { answer: "Level crossings", correct: true }
    ]
  },
  {
    question: "What do these zigzag white lines mean?",
    answers: [
      { answer: "No parking at any time", correct: true },
      { answer: "Parking allowed only for a short time", correct: false },
      { answer: "Slow down to 20 mph", correct: false },
      { answer: "Sounding horns isn't allowed", correct: false }
    ]
  },
  {
    question: "When may you cross a double solid white line in the middle of the road?",
    answers: [
      { answer: "To pass traffic that's queuing back at a junction", correct: false },
      { answer: "To pass a car signalling to turn left ahead", correct: false },
      { answer: "To pass a road maintenance vehicle travelling at 10 mph or less", correct: true },
      { answer: "To pass a vehicle that's towing a trailer", correct: false }
    ]
  },
  {
    question: "What does this road marking mean?",
    answers: [
      { answer: "Don't cross the line", correct: false },
      { answer: "No stopping allowed", correct: false },
      { answer: "You're approaching a hazard", correct: true },
      { answer: "No overtaking allowed", correct: false }
    ]
  },
  {
    question: "Where would you see this road marking?",
    answers: [
      { answer: "At traffic lights", correct: false },
      { answer: "On road humps", correct: true },
      { answer: "Near a level crossing", correct: false },
      { answer: "At a box junction", correct: false }
    ]
  },
  {
    question: "Which diagram shows a hazard warning line?",
    answers: [
      { answer: "", correct: true },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false }
    ]
  },
  {
    question: "Why does this junction have a 'stop' sign and a stop line on the road?",
    answers: [
      { answer: "Speed on the major road is derestricted", correct: false },
      { answer: "It's a busy junction", correct: false },
      { answer: "Visibility along the major road is restricted", correct: true },
      { answer: "The junction is on a downhill gradient", correct: false }
    ]
  },
  {
    question: "What does this line across the road at the entrance to a roundabout mean?",
    answers: [
      { answer: "Give way to traffic from the right", correct: true },
      { answer: "Traffic from the left has right of way", correct: false },
      { answer: "You have right of way", correct: false },
      { answer: "Stop at the line", correct: false }
    ]
  },
  {
    question: "How will a police officer in a patrol vehicle signal for you to stop?",
    answers: [
      { answer: "Flash the headlights, indicate left and point to the left", correct: true },
      { answer: "Overtake and give a slowing down arm signal", correct: false },
      { answer: "Use the siren, overtake, cut in front and stop", correct: false },
      { answer: "Pull alongside you, use the siren and wave you to stop", correct: false }
    ]
  },
  {
    question: "You're approaching a junction where the traffic lights aren't working. What should you do when a police officer gives this signal?",
    answers: [
      { answer: "Turn left only", correct: false },
      { answer: "Turn right only", correct: false },
      { answer: "Continue ahead only", correct: false },
      { answer: "Stop at the stop line", correct: true }
    ]
  },
  {
    question: "What does this arm signal mean?",
    answers: [
      { answer: "The driver is slowing down", correct: false },
      { answer: "The driver intends to turn right", correct: false },
      { answer: "The driver wishes to overtake", correct: false },
      { answer: "The driver intends to turn left", correct: true }
    ]
  },
  {
    question: "What does this motorway sign mean?",
    answers: [
      { answer: "Change to the lane on your left", correct: true },
      { answer: "Leave the motorway at the next exit", correct: false },
      { answer: "Change to the opposite carriageway", correct: false },
      { answer: "Pull up on the hard shoulder", correct: false }
    ]
  },
  {
    question: "What does this motorway sign mean?",
    answers: [
      { answer: "Temporary minimum speed 50 mph", correct: false },
      { answer: "No services for 50 miles", correct: false },
      { answer: "Obstruction 50 metres (164 feet) ahead", correct: false },
      { answer: "Temporary maximum speed 50 mph", correct: true }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Through traffic to use left lane", correct: false },
      { answer: "Right-hand lane T-junction only", correct: false },
      { answer: "Right-hand lane closed ahead", correct: true },
      { answer: "11 tonne weight limit", correct: false }
    ]
  },
  {
    question: "What does '25' mean on this motorway sign?",
    answers: [
      { answer: "The distance to the nearest town", correct: false },
      { answer: "The route number of the road", correct: false },
      { answer: "The number of the next junction", correct: true },
      { answer: "The speed limit on the slip road", correct: false }
    ]
  },
  {
    question: "How should the right-hand lane of a three-lane motorway be used?",
    answers: [
      { answer: "As a high-speed lane", correct: false },
      { answer: "As an overtaking lane", correct: true },
      { answer: "As a right-turn lane", correct: false },
      { answer: "As an acceleration lane", correct: false }
    ]
  },
  {
    question: "Where can you find reflective amber studs on a motorway?",
    answers: [
      { answer: "Separating the slip road from the motorway", correct: false },
      { answer: "On the left-hand edge of the road", correct: false },
      { answer: "On the right-hand edge of the road", correct: true },
      { answer: "Separating the lanes", correct: false }
    ]
  },
  {
    question: "Where would you find green reflective studs on a motorway?",
    answers: [
      { answer: "Separating driving lanes", correct: false },
      { answer: "Between the hard shoulder and the carriageway", correct: false },
      { answer: "At slip-road entrances and exits", correct: true },
      { answer: "Between the carriageway and the central reservation", correct: false }
    ]
  },
  {
    question: "What should you do when you see this sign as you travel along a motorway?",
    answers: [
      { answer: "Leave the motorway at the next exit", correct: true },
      { answer: "Turn left immediately", correct: false },
      { answer: "Change lane", correct: false },
      { answer: "Move onto the hard shoulder", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "No motor vehicles", correct: false },
      { answer: "End of motorway", correct: true },
      { answer: "No through road", correct: false },
      { answer: "End of bus lane", correct: false }
    ]
  },
  {
    question: "Which sign means that the national speed limit applies?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: true }
    ]
  },
  {
    question: "What's the national speed limit on a single carriageway road?",
    answers: [
      { answer: "50 mph", correct: false },
      { answer: "60 mph", correct: true },
      { answer: "40 mph", correct: false },
      { answer: "70 mph", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "End of motorway", correct: false },
      { answer: "End of restriction", correct: true },
      { answer: "Lane ends ahead", correct: false },
      { answer: "Free recovery ends", correct: false }
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