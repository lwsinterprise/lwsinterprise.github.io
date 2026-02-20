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
    question: "What will the speed limit usually be where you can see street lights but no speed-limit signs?",
    answers: [
      { answer: "30 mph", correct: true },
      { answer: "40 mph", correct: false },
      { answer: "50 mph", correct: false },
      { answer: "60 mph", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Minimum speed 30 mph", correct: false },
      { answer: "End of maximum speed", correct: false },
      { answer: "End of minimum speed", correct: true },
      { answer: "Maximum speed 30 mph", correct: false }
    ]
  },
  {
    question: "What should you do if you want to overtake a tractor but aren't sure that it's safe?",
    answers: [
      { answer: "Follow another vehicle as it overtakes the tractor", correct: false },
      { answer: "Sound your horn to make the tractor driver pull over", correct: false },
      { answer: "Speed past, flashing your lights at oncoming traffic", correct: false },
      { answer: "Stay behind it if you're in any doubt", correct: true }
    ]
  },
  {
    question: "Which vehicle is most likely to take an unusual course at a roundabout?",
    answers: [
      { answer: "Estate car", correct: false },
      { answer: "Milk float", correct: false },
      { answer: "Delivery van", correct: false },
      { answer: "Long vehicle", correct: true }
    ]
  },
  {
    question: "When may you stop on a clearway?",
    answers: [
      { answer: "Never", correct: true },
      { answer: "When it's busy", correct: false },
      { answer: "In the rush hour", correct: false },
      { answer: "During daylight hours", correct: false }
    ]
  },
  {
    question: "What's the meaning of this sign?",
    answers: [
      { answer: "No entry", correct: false },
      { answer: "Waiting restrictions", correct: true },
      { answer: "National speed limit", correct: false },
      { answer: "School crossing patrol", correct: false }
    ]
  },
  {
    question: "You're looking for somewhere to park at night. When may you park on the right-hand side of the road?",
    answers: [
      { answer: "When you're in a one-way street", correct: true },
      { answer: "When you have your sidelights on", correct: false },
      { answer: "When you're more than 10 metres (32 feet) from a junction", correct: false },
      { answer: "When you're under a lamppost", correct: false }
    ]
  },
  {
    question: "When should you use the right-hand lane of a three-lane dual carriageway?",
    answers: [
      { answer: "When you're overtaking only", correct: false },
      { answer: "When you're overtaking or turning right", correct: true },
      { answer: "When you're using cruise control", correct: false },
      { answer: "When you're turning right only", correct: false }
    ]
  },
  {
    question: "You're approaching a busy junction. What should you do when, at the last moment, you realise you're in the wrong lane?",
    answers: [
      { answer: "Continue in that lane", correct: true },
      { answer: "Force your way into the lane you need", correct: false },
      { answer: "Stop until the area has cleared", correct: false },
      { answer: "Use arm signals to help you change lane", correct: false }
    ]
  },
  {
    question: "Where may you overtake on a one-way street?",
    answers: [
      { answer: "Only on the left-hand side", correct: false },
      { answer: "Overtaking isn't allowed", correct: false },
      { answer: "Only on the right-hand side", correct: false },
      { answer: "On either the right or the left", correct: true }
    ]
  },
  {
    question: "What signal should you give when you're going straight ahead at a roundabout?",
    answers: [
      { answer: "Signal left before leaving the roundabout", correct: true },
      { answer: "Don't signal at any time", correct: false },
      { answer: "Signal right when you're approaching the roundabout", correct: false },
      { answer: "Signal left when you're approaching the roundabout", correct: false }
    ]
  },
  {
    question: "Which vehicle might have to take a different course from normal at a roundabout?",
    answers: [
      { answer: "Sports car", correct: false },
      { answer: "Van", correct: false },
      { answer: "Estate car", correct: false },
      { answer: "Long vehicle", correct: true }
    ]
  },
  {
    question: "When may you enter a box junction?",
    answers: [
      { answer: "When there are fewer than two vehicles ahead", correct: false },
      { answer: "When signalled by another road user", correct: false },
      { answer: "When your exit road is clear", correct: true },
      { answer: "When traffic signs direct you", correct: false }
    ]
  },
  {
    question: "When may you stop and wait in a box junction?",
    answers: [
      { answer: "When oncoming traffic prevents you from turning right", correct: true },
      { answer: "When you're in a queue of traffic turning left", correct: false },
      { answer: "When you're in a queue of traffic going ahead", correct: false },
      { answer: "When you're on a roundabout", correct: false }
    ]
  },
  {
    question: "Who is authorised to signal you to stop?",
    answers: [
      { answer: "A motorcyclist", correct: false },
      { answer: "A pedestrian", correct: false },
      { answer: "A police officer", correct: true },
      { answer: "A bus driver", correct: false }
    ]
  },
  {
    question: "What should you do if you see a pedestrian waiting at a zebra crossing?",
    answers: [
      { answer: "Go on quickly before they step onto the crossing", correct: false },
      { answer: "Stop before you reach the zigzag lines and let them cross", correct: false },
      { answer: "Be ready to slow down or stop to let them cross", correct: true },
      { answer: "Ignore them as they're still on the pavement", correct: false }
    ]
  },
  {
    question: "Which road users benefit from toucan crossings?",
    answers: [
      { answer: "Car drivers and motorcyclists", correct: false },
      { answer: "Cyclists and pedestrians", correct: true },
      { answer: "Bus and lorry drivers", correct: false },
      { answer: "Tram and train drivers", correct: false }
    ]
  },
  {
    question: "You’re waiting at a pelican crossing. What does it mean when the red light changes to flashing amber?",
    answers: [
      { answer: "Give way to pedestrians on the crossing", correct: true },
      { answer: "Move off immediately without any hesitation", correct: false },
      { answer: "Wait for the green light before moving off", correct: false },
      { answer: "Get ready and go when the continuous amber light shows", correct: false }
    ]
  },
  {
    question: "You see these double white lines along the centre of the road. When may you park on the left?",
    answers: [
      { answer: "If the line nearest to you is broken", correct: false },
      { answer: "When there are no yellow lines", correct: false },
      { answer: "To pick up or set down passengers", correct: true },
      { answer: "During daylight hours only", correct: false }
    ]
  },
  {
    question: "You're turning right at a crossroads. An oncoming driver is also turning right. What's the advantage of turning behind the oncoming vehicle?",
    answers: [
      { answer: "You'll have a clearer view of any approaching traffic ", correct: true },
      { answer: "You'll use less fuel because you can stay in a higher gear", correct: false },
      { answer: "You'll have more time to turn", correct: false },
      { answer: "You'll be able to turn without stopping", correct: false }
    ]
  },
  {
    question: "You're travelling along a residential street. There are parked vehicles on the left-hand side. Why should you keep your speed down?",
    answers: [
      { answer: "So that oncoming traffic can see you more clearly", correct: false },
      { answer: "You may set off car alarms", correct: false },
      { answer: "There may be delivery lorries on the street", correct: false },
      { answer: "Children may run out from between the vehicles", correct: true }
    ]
  },
  {
    question: "What should you do when there's an obstruction on your side of the road?",
    answers: [
      { answer: "Carry on, as you have priority", correct: false },
      { answer: "Give way to oncoming traffic", correct: true },
      { answer: "Wave oncoming vehicles through", correct: false },
      { answer: "Accelerate to get past first", correct: false }
    ]
  },
  {
    question: "When would you use the right-hand lane of a two-lane dual carriageway?",
    answers: [
      { answer: "When you're turning right or overtaking", correct: true },
      { answer: "When you're passing a side road on the left", correct: false },
      { answer: "When you're staying at the minimum allowed speed", correct: false },
      { answer: "When you're travelling at a constant high speed", correct: false }
    ]
  },
  {
    question: "Who has priority at an unmarked crossroads?",
    answers: [
      { answer: "The larger vehicle", correct: false },
      { answer: "No-one has priority", correct: true },
      { answer: "The faster vehicle", correct: false },
      { answer: "The smaller vehicle", correct: false }
    ]
  },
  {
    question: "What's the nearest you may park to a junction?",
    answers: [
      { answer: "10 metres (32 feet)", correct: true },
      { answer: "12 metres (39 feet)", correct: false },
      { answer: "15 metres (49 feet)", correct: false },
      { answer: "20 metres (66 feet)", correct: false }
    ]
  },
  {
    question: "You're looking for somewhere to safely park your vehicle. Where would you choose to park?",
    answers: [
      { answer: "At or near a bus stop", correct: false },
      { answer: "In a designated parking space", correct: true },
      { answer: "Near the brow of a hill", correct: false },
      { answer: "On the approach to a level crossing", correct: false }
    ]
  },
  {
    question: "You're waiting at a level crossing. What must you do if a train passes but the lights keep flashing?",
    answers: [
      { answer: "Carry on waiting", correct: true },
      { answer: "Phone the signal operator", correct: false },
      { answer: "Edge over the stop line and look for trains", correct: false },
      { answer: "Park and investigate", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "No through road", correct: false },
      { answer: "End of traffic-calming zone", correct: false },
      { answer: "Free-parking zone ends", correct: false },
      { answer: "End of controlled parking zone", correct: true }
    ]
  },
  {
    question: "What must you do if you come across roadworks that have a temporary speed limit displayed?",
    answers: [
      { answer: "Obey the speed limit", correct: true },
      { answer: "Obey the limit, but only during rush hour", correct: false },
      { answer: "Ignore the displayed limit ", correct: false },
      { answer: "Use your own judgement; the limit is only advisory", correct: false }
    ]
  },
  {
    question: "You're in a built-up area at night and the road is well lit. Why should you use dipped headlights?",
    answers: [
      { answer: "So that you can see further along the road", correct: false },
      { answer: "So that you can go at a much faster speed", correct: false },
      { answer: "So that you can switch to main beam quickly", correct: false },
      { answer: "So that you can be easily seen by others", correct: true }
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