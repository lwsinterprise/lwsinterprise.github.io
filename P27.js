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
    question: "What does this sign indicate?",
    answers: [
      { answer: "A diversion route", correct: true },
      { answer: "A picnic area", correct: false },
      { answer: "A pedestrian zone", correct: false },
      { answer: "A cycle route", correct: false }
    ]
  },
  {
    question: "What does this traffic sign mean?",
    answers: [
      { answer: "Compulsory maximum speed limit", correct: true },
      { answer: "Advisory maximum speed limit", correct: false },
      { answer: "Compulsory minimum speed limit", correct: false },
      { answer: "Advised separation distance", correct: false }
    ]
  },
  {
    question: "What should you do when you see this sign at a crossroads?",
    answers: [
      { answer: "Maintain the same speed", correct: false },
      { answer: "Carry on with great care", correct: true },
      { answer: "Find another route", correct: false },
      { answer: "Telephone the police", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Motorcycles only", correct: false },
      { answer: "No cars", correct: false },
      { answer: "Cars only", correct: false },
      { answer: "No motorcycles", correct: true }
    ]
  },
  {
    question: "You're on a motorway. A lorry has stopped in the right-hand lane. What should you do when you see this sign on the lorry?",
    answers: [
      { answer: "Move into the right-hand lane", correct: false },
      { answer: "Stop behind the flashing lights", correct: false },
      { answer: "Pass the lorry on the left", correct: true },
      { answer: "Leave the motorway at the next exit", correct: false }
    ]
  },
  {
    question: "You're on a motorway. What should you do if there's a red cross showing on the signs above your lane only?",
    answers: [
      { answer: "Continue in that lane and look for further information", correct: false },
      { answer: "Don't continue in that lane", correct: true },
      { answer: "Pull onto the hard shoulder", correct: false },
      { answer: "Stop and wait for an instruction to proceed", correct: false }
    ]
  },
  {
    question: "When may you sound your vehicle's horn?",
    answers: [
      { answer: "To give you right of way", correct: false },
      { answer: "To attract a friend’s attention", correct: false },
      { answer: "To warn others of your presence", correct: true },
      { answer: "To make slower drivers move over", correct: false }
    ]
  },
  {
    question: "Your vehicle is stationary. When may you use its horn?",
    answers: [
      { answer: "When another road user poses a danger", correct: true },
      { answer: "When the road is blocked by queuing traffic", correct: false },
      { answer: "When it's used only briefly", correct: false },
      { answer: "When signalling that you've just arrived", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "You can park on the days and times shown", correct: false },
      { answer: "No parking on the days and times shown", correct: true },
      { answer: "No parking at all from Monday to Friday", correct: false },
      { answer: "End of the urban clearway restrictions", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Quayside or river bank", correct: true },
      { answer: "Steep hill downwards", correct: false },
      { answer: "Uneven road surface", correct: false },
      { answer: "Road liable to flooding", correct: false }
    ]
  },
  {
    question: "Which sign means you have priority over oncoming vehicles?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: true },
      { answer: "", correct: false }
    ]
  },
  {
    question: "What do the long white lines along the centre of the road mean?",
    answers: [
      { answer: "Bus lane", correct: false },
      { answer: "Hazard warning", correct: true },
      { answer: "Give way", correct: false },
      { answer: "Lane marking", correct: false }
    ]
  },
  {
    question: "What's the reason for the hatched area along the centre of this road?",
    answers: [
      { answer: "It separates traffic flowing in opposite directions", correct: true },
      { answer: "It marks an area to be used by overtaking motorcyclists", correct: false },
      { answer: "It's a temporary marking to warn of the roadworks", correct: false },
      { answer: "It separates the two sides of the dual carriageway", correct: false }
    ]
  },
  {
    question: "Other drivers may sometimes flash their headlights at you. What's the official meaning of this signal?",
    answers: [
      { answer: "There's a radar speed trap ahead", correct: false },
      { answer: "They're giving way to you", correct: false },
      { answer: "They're warning you of their presence", correct: true },
      { answer: "There's a fault with your vehicle", correct: false }
    ]
  },
  {
    question: "What does this signal mean?",
    answers: [
      { answer: "Cars must stop", correct: false },
      { answer: "Trams must stop", correct: true },
      { answer: "Both trams and cars must stop", correct: false },
      { answer: "Both trams and cars can continue", correct: false }
    ]
  },
  {
    question: "Where would you find these road markings?",
    answers: [
      { answer: "At a railway crossing", correct: false },
      { answer: "At a mini-roundabout", correct: true },
      { answer: "On a motorway", correct: false },
      { answer: "On a pedestrian crossing", correct: false }
    ]
  },
  {
    question: "A police car is following you. What should you do if the police officer flashes the headlights and points to the left?",
    answers: [
      { answer: "Turn left at the next junction", correct: false },
      { answer: "Pull up on the left", correct: true },
      { answer: "Stop immediately", correct: false },
      { answer: "Move over to the left", correct: false }
    ]
  },
  {
    question: "You see this amber traffic light ahead. Which light, or lights, will come on next?",
    answers: [
      { answer: "Red alone", correct: true },
      { answer: "Red and amber together", correct: false },
      { answer: "Green and amber together", correct: false },
      { answer: "Green alone", correct: false }
    ]
  },
  {
    question: "What does it mean if you see this signal on the motorway?",
    answers: [
      { answer: "Leave the motorway at the next exit", correct: true },
      { answer: "All vehicles use the hard shoulder", correct: false },
      { answer: "Sharp bend to the left ahead", correct: false },
      { answer: "Stop: all lanes ahead closed", correct: false }
    ]
  },
  {
    question: "What must you do when you see this sign?",
    answers: [
      { answer: "Stop only if traffic is approaching", correct: false },
      { answer: "Stop even if the road is clear", correct: true },
      { answer: "Stop only if children are waiting to cross", correct: false },
      { answer: "Stop only if a red light is showing", correct: false }
    ]
  },
  {
    question: "Which shape is used for a 'give way' sign?",
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
      { answer: "Buses turning", correct: false },
      { answer: "Ring road", correct: false },
      { answer: "Mini-roundabout", correct: true },
      { answer: "Keep right", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Two-way traffic straight ahead", correct: false },
      { answer: "Two-way traffic crosses a one-way road", correct: true },
      { answer: "Two-way traffic over a bridge", correct: false },
      { answer: "Two-way traffic crosses a two-way road", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Two-way traffic crosses a one-way road", correct: false },
      { answer: "Traffic approaching you has priority", correct: false },
      { answer: "Two-way traffic straight ahead", correct: true },
      { answer: "Motorway contraflow system ahead", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Hump bridge", correct: true },
      { answer: "Traffic-calming hump", correct: false },
      { answer: "Low bridge", correct: false },
      { answer: "Uneven road", correct: false }
    ]
  },
  {
    question: "Which sign informs you that you're coming to a 'no through road'?",
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
      { answer: "Direction to park-and-ride car park", correct: true },
      { answer: "No parking for buses or coaches", correct: false },
      { answer: "Direction to bus and coach park", correct: false },
      { answer: "Parking area for cars and coaches", correct: false }
    ]
  },
  {
    question: "What should you do when you're approaching traffic lights that have red and amber showing together?",
    answers: [
      { answer: "Pass the lights if the road is clear", correct: false },
      { answer: "Take care because there's a fault with the lights", correct: false },
      { answer: "Wait for the green light", correct: true },
      { answer: "Stop because the lights are changing to red", correct: false }
    ]
  },
  {
    question: "You've stopped at a railway level crossing. What should you do if the red lights continue to flash after a train has gone by?",
    answers: [
      { answer: "Phone the signal operator", correct: false },
      { answer: "Alert drivers behind you", correct: false },
      { answer: "Wait", correct: true },
      { answer: "Proceed with caution", correct: false }
    ]
  },
  {
    question: "You're in a tunnel and you see this sign. What does it mean?",
    answers: [
      { answer: "Direction to an emergency pedestrian exit", correct: true },
      { answer: "Beware of pedestrians: no footpath ahead", correct: false },
      { answer: "No access for pedestrians", correct: false },
      { answer: "Beware of pedestrians crossing ahead", correct: false }
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