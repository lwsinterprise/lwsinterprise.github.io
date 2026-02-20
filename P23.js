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
    question: "You're turning right onto a dual carriageway. What should you do if the central reservation is too narrow to contain your vehicle?",
    answers: [
      { answer: "Proceed to the central reservation and wait", correct: false },
      { answer: "Wait until the road is clear in both directions", correct: true },
      { answer: "Stop in the first lane so that other vehicles give way", correct: false },
      { answer: "Emerge slightly to show your intentions", correct: false }
    ]
  },
  {
    question: "What's the national speed limit on a single carriageway road for cars and motorcycles?",
    answers: [
      { answer: "30 mph", correct: false },
      { answer: "50 mph", correct: false },
      { answer: "60 mph", correct: true },
      { answer: "70 mph", correct: false }
    ]
  },
  {
    question: "What should you do when you park at night on a road that has a 40 mph speed limit?",
    answers: [
      { answer: "Park facing the traffic", correct: false },
      { answer: "Leave parking lights switched on", correct: true },
      { answer: "Leave dipped headlights switched on", correct: false },
      { answer: "Park near a street light", correct: false }
    ]
  },
  {
    question: "Where will you see these red and white markers?",
    answers: [
      { answer: "Approaching the end of a motorway", correct: false },
      { answer: "Approaching a concealed level crossing", correct: true },
      { answer: "Approaching a concealed speed-limit sign", correct: false },
      { answer: "Approaching the end of a dual carriageway", correct: false }
    ]
  },
  {
    question: "You're travelling on a motorway in England. When must you stop your vehicle?",
    answers: [
      { answer: "When signalled to stop by a roadworks supervisor", correct: false },
      { answer: "When signalled to stop by a traffic officer", correct: true },
      { answer: "When signalled to stop by a pedestrian on the hard shoulder", correct: false },
      { answer: "When signalled to stop by a driver who has broken down", correct: false }
    ]
  },
  {
    question: "How should you signal if you're going straight ahead at a roundabout?",
    answers: [
      { answer: "Signal right on the approach and then left to leave the roundabout", correct: false },
      { answer: "Signal left after you leave the roundabout and enter the new road", correct: false },
      { answer: "Signal right on the approach to the roundabout and keep the signal on", correct: false },
      { answer: "Signal left just after you pass the exit before the one you're going to take", correct: true }
    ]
  },
  {
    question: "When may you drive over a pavement?",
    answers: [
      { answer: "To overtake slow-moving traffic", correct: false },
      { answer: "When the pavement is very wide", correct: false },
      { answer: "If there are no pedestrians nearby", correct: false },
      { answer: "To gain access to a property", correct: true }
    ]
  },
  {
    question: "A single carriageway road has this sign. What's the maximum permitted speed for a car towing a trailer?",
    answers: [
      { answer: "30 mph", correct: false },
      { answer: "40 mph", correct: false },
      { answer: "50 mph", correct: true },
      { answer: "60 mph", correct: false }
    ]
  },
  {
    question: "What's the speed limit for a car towing a caravan on a dual carriageway?",
    answers: [
      { answer: "50 mph", correct: false },
      { answer: "40 mph", correct: false },
      { answer: "70 mph", correct: false },
      { answer: "60 mph", correct: true }
    ]
  },
  {
    question: "You want to park and you see this sign. What should you do on the days and times shown?",
    answers: [
      { answer: "Park in a bay and not pay", correct: false },
      { answer: "Park on yellow lines and pay", correct: false },
      { answer: "Park on yellow lines and not pay", correct: false },
      { answer: "Park in a bay and pay", correct: true }
    ]
  },
  {
    question: "A cycle lane, marked by a solid white line, is in operation. What does this mean for car drivers?",
    answers: [
      { answer: "They may park in the lane", correct: false },
      { answer: "They may drive in the lane at any time", correct: false },
      { answer: "They may use the lane when necessary", correct: false },
      { answer: "They mustn't drive along the lane", correct: true }
    ]
  },
  {
    question: "You're going to turn left from a main road into a minor road. What should you do as you approach the junction?",
    answers: [
      { answer: "Keep just left of the middle of the road", correct: false },
      { answer: "Keep in the middle of the road", correct: false },
      { answer: "Swing out to the right just before turning", correct: false },
      { answer: "Keep well to the left of the road", correct: true }
    ]
  },
  {
    question: "You're waiting at a level crossing. What should you do if the red warning lights continue to flash after a train has passed by?",
    answers: [
      { answer: "Get out and investigate", correct: false },
      { answer: "Telephone the signal operator", correct: false },
      { answer: "Continue to wait", correct: true },
      { answer: "Drive across carefully", correct: false }
    ]
  },
  {
    question: "What should you do if the amber lights come on and a warning sounds while you're driving over a level crossing?",
    answers: [
      { answer: "Get everyone out of the vehicle immediately", correct: false },
      { answer: "Stop and reverse back to clear the crossing", correct: false },
      { answer: "Keep going and clear the crossing", correct: true },
      { answer: "Stop immediately and use your hazard warning lights", correct: false }
    ]
  },
  {
    question: "You're driving on a busy main road. What should you do if you find that you're driving in the wrong direction?",
    answers: [
      { answer: "Turn into a side road on the right and reverse into the main road", correct: false },
      { answer: "Make a U-turn in the main road", correct: false },
      { answer: "Make a ‘three-point’ turn in the main road", correct: false },
      { answer: "Turn around in a side road", correct: true }
    ]
  },
  {
    question: "When may you drive without wearing your seat belt?",
    answers: [
      { answer: "When you're carrying out a manoeuvre that includes reversing", correct: true },
      { answer: "When you're moving off on a hill", correct: false },
      { answer: "When you're testing your brakes", correct: false },
      { answer: "When you're driving slowly in queuing traffic", correct: false }
    ]
  },
  {
    question: "How far are you allowed to reverse?",
    answers: [
      { answer: "No further than is necessary", correct: true },
      { answer: "No more than a car’s length", correct: false },
      { answer: "As far as it takes to reverse around a corner", correct: false },
      { answer: "The length of a residential street", correct: false }
    ]
  },
  {
    question: "What should you do when you're unsure whether it's safe to reverse your vehicle?",
    answers: [
      { answer: "Sound your horn", correct: false },
      { answer: "Rev your engine", correct: false },
      { answer: "Get out and check", correct: true },
      { answer: "Reverse slowly", correct: false }
    ]
  },
  {
    question: "Why could it be dangerous to reverse from a side road into a main road?",
    answers: [
      { answer: "Your reverse sensors will beep", correct: false },
      { answer: "Your view will be restricted", correct: true },
      { answer: "Your reversing lights will be hidden", correct: false },
      { answer: "Your mirrors will need adjusting", correct: false }
    ]
  },
  {
    question: "You want to turn right at a box junction. What should you do if there's oncoming traffic?",
    answers: [
      { answer: "Wait in the box junction if your exit is clear", correct: true },
      { answer: "Wait before the junction until it's clear of all traffic", correct: false },
      { answer: "Drive on; you can't turn right at a box junction", correct: false },
      { answer: "Drive slowly into the box junction when signalled by oncoming traffic", correct: false }
    ]
  },
  {
    question: "You're reversing into a side road. When would your vehicle be the greatest hazard to passing traffic?",
    answers: [
      { answer: "After you’ve completed the manoeuvre", correct: false },
      { answer: "Just before you begin to manoeuvre", correct: false },
      { answer: "After you’ve entered the side road", correct: false },
      { answer: "When the front of your vehicle swings out", correct: true }
    ]
  },
  {
    question: "Where's the safest place to park your vehicle at night?",
    answers: [
      { answer: "In a garage", correct: true },
      { answer: "On a busy road", correct: false },
      { answer: "In a quiet car park", correct: false },
      { answer: "Near a red route", correct: false }
    ]
  },
  {
    question: "When may you stop on an urban clearway?",
    answers: [
      { answer: "To set down and pick up passengers", correct: true },
      { answer: "To use a mobile telephone", correct: false },
      { answer: "To ask for directions", correct: false },
      { answer: "To load or unload goods", correct: false }
    ]
  },
  {
    question: "You're looking for somewhere to park your vehicle. Neither you or your passenger are disabled. What should you do if the only free spaces are marked for disabled drivers?",
    answers: [
      { answer: "Use one of these spaces", correct: false },
      { answer: "Park in one of these spaces but stay with your vehicle", correct: false },
      { answer: "Use one of the spaces as long as one is kept free", correct: false },
      { answer: "Wait for a regular parking space to become free", correct: true }
    ]
  },
  {
    question: "You're on a road that's only wide enough for one vehicle. What should you do if a car is coming towards you?",
    answers: [
      { answer: "Pull into a passing place on your right", correct: false },
      { answer: "Force the other driver to reverse", correct: false },
      { answer: "Pull into a passing place if your vehicle is wider", correct: false },
      { answer: "Pull into a passing place on your left", correct: true }
    ]
  },
  {
    question: "You're driving at night with your headlights on main beam. A vehicle is overtaking you. When should you dip your headlights?",
    answers: [
      { answer: "Some time after the vehicle has passed you", correct: false },
      { answer: "Before the vehicle starts to pass you", correct: false },
      { answer: "Only if the other driver dips their headlights", correct: false },
      { answer: "As soon as the vehicle passes you", correct: true }
    ]
  },
  {
    question: "When may you drive a car in this bus lane?",
    answers: [
      { answer: "Outside its hours of operation", correct: true },
      { answer: "To get to the front of a traffic queue", correct: false },
      { answer: "You may not use it at any time", correct: false },
      { answer: "To overtake slow-moving traffic", correct: false }
    ]
  },
  {
    question: "Other than direction indicators, how can you give signals to other road users?",
    answers: [
      { answer: "By using brake lights", correct: true },
      { answer: "By using sidelights", correct: false },
      { answer: "By using fog lights", correct: false },
      { answer: "By using interior lights", correct: false }
    ]
  },
  {
    question: "You're parked in a busy high street. What's the safest way to turn your vehicle around so you can drive in the opposite direction?",
    answers: [
      { answer: "Turn around in a quiet side road", correct: true },
      { answer: "Drive into a side road and reverse out into the main road", correct: false },
      { answer: "Ask someone to stop the traffic", correct: false },
      { answer: "Carry out a U-turn", correct: false }
    ]
  },
  {
    question: "Where should you park your vehicle at night?",
    answers: [
      { answer: "Near a police station", correct: false },
      { answer: "In a quiet road", correct: false },
      { answer: "On a red route", correct: false },
      { answer: "In a well-lit area", correct: true }
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