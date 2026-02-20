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
    question: "You're driving in the right-hand lane of a dual carriageway. What should you do if you see a sign showing that the right-hand lane is closed 800 yards ahead?",
    answers: [
      { answer: "Keep in that lane until you reach the queue", correct: false },
      { answer: "Move to the left immediately", correct: false },
      { answer: "Wait and see which lane is moving faster", correct: false },
      { answer: "Move to the left in good time", correct: true }
    ]
  },
  {
    question: "You're driving on a road that has a cycle lane. What does it mean if the lane is marked by a broken white line?",
    answers: [
      { answer: "You shouldn't drive in the lane unless it's unavoidable", correct: true },
      { answer: "There's a reduced speed limit for motor vehicles using the lane", correct: false },
      { answer: "Cyclists can travel in both directions in that lane", correct: false },
      { answer: "The lane must be used by motorcyclists in heavy traffic", correct: false }
    ]
  },
  {
    question: "When are you allowed to park in a parking bay for disabled drivers?",
    answers: [
      { answer: "When you have a Blue Badge", correct: true },
      { answer: "When you have a wheelchair", correct: false },
      { answer: "When you have an advanced driver certificate", correct: false },
      { answer: "When you have an adapted vehicle", correct: false }
    ]
  },
  {
    question: "When must you stop your vehicle?",
    answers: [
      { answer: "If you’re involved in an incident that causes damage or injury", correct: true },
      { answer: "At a junction where there are ‘give way’ lines", correct: false },
      { answer: "At the end of a one-way street", correct: false },
      { answer: "Before merging onto a motorway", correct: false }
    ]
  },
  {
    question: "How can you identify traffic signs that give orders?",
    answers: [
      { answer: "They're rectangular with a yellow border", correct: false },
      { answer: "They're triangular with a blue border", correct: false },
      { answer: "They're square with a brown border", correct: false },
      { answer: "They're circular with a red border ", correct: true }
    ]
  },
  {
    question: "What shape are traffic signs giving orders?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: true }
    ]
  },
  {
    question: "Which type of sign tells you what you must not do?",
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
      { answer: "Maximum speed limit with traffic calming", correct: true },
      { answer: "Minimum speed limit with traffic calming", correct: false },
      { answer: "‘20 cars only’ parking zone", correct: false },
      { answer: "Only 20 cars allowed at any one time", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "New speed limit 20 mph", correct: false },
      { answer: "No vehicles over 30 tonnes", correct: false },
      { answer: "Minimum speed limit 30 mph", correct: false },
      { answer: "End of 20 mph zone", correct: true }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "No overtaking", correct: false },
      { answer: "No motor vehicles", correct: true },
      { answer: "Clearway (no stopping)", correct: false },
      { answer: "Cars and motorcycles only", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "No parking", correct: false },
      { answer: "No road markings", correct: false },
      { answer: "No through road", correct: false },
      { answer: "No entry", correct: true }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Bend to the right", correct: false },
      { answer: "Road on the right closed", correct: false },
      { answer: "No traffic from the right", correct: false },
      { answer: "No right turn", correct: true }
    ]
  },
  {
    question: "Which sign means 'no entry'?",
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
      { answer: "Route for trams only", correct: true },
      { answer: "Route for buses only", correct: false },
      { answer: "Parking for buses only", correct: false },
      { answer: "Parking for trams only", correct: false }
    ]
  },
  {
    question: "Which type of vehicle does this sign apply to?",
    answers: [
      { answer: "Wide vehicles", correct: false },
      { answer: "Long vehicles", correct: false },
      { answer: "High vehicles", correct: true },
      { answer: "Heavy vehicles", correct: false }
    ]
  },
  {
    question: "Which sign means no motor vehicles allowed?",
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
      { answer: "You have priority", correct: false },
      { answer: "No motor vehicles", correct: false },
      { answer: "Two-way traffic", correct: false },
      { answer: "No overtaking", correct: true }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Waiting restrictions apply", correct: true },
      { answer: "Waiting permitted", correct: false },
      { answer: "National speed limit applies", correct: false },
      { answer: "Clearway (no stopping)", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "End of restricted speed area", correct: false },
      { answer: "End of restricted parking area", correct: true },
      { answer: "End of clearway", correct: false },
      { answer: "End of cycle route", correct: false }
    ]
  },
  {
    question: "Which sign means 'no stopping'?",
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
      { answer: "National speed limit applies", correct: false },
      { answer: "Waiting restrictions apply", correct: false },
      { answer: "No stopping", correct: true },
      { answer: "No entry", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Distance to parking place ahead", correct: true },
      { answer: "Distance to public telephone ahead", correct: false },
      { answer: "Distance to public house ahead", correct: false },
      { answer: "Distance to passing place ahead", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Vehicles may not park on the verge or footway", correct: false },
      { answer: "Vehicles may park on the left-hand side of the road only", correct: false },
      { answer: "Vehicles may park fully on the verge or footway", correct: true },
      { answer: "Vehicles may park on the right-hand side of the road only", correct: false }
    ]
  },
  {
    question: "What does this traffic sign mean?",
    answers: [
      { answer: "No overtaking allowed", correct: false },
      { answer: "Give priority to oncoming traffic", correct: true },
      { answer: "Two-way traffic", correct: false },
      { answer: "One-way traffic only", correct: false }
    ]
  },
  {
    question: "What's the meaning of this traffic sign?",
    answers: [
      { answer: "End of two-way road", correct: false },
      { answer: "Give priority to vehicles coming towards you", correct: false },
      { answer: "You have priority over vehicles coming towards you", correct: true },
      { answer: "Bus lane ahead", correct: false }
    ]
  },
  {
    question: "What shape is a 'stop' sign?",
    answers: [
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: false },
      { answer: "", correct: true }
    ]
  },
  {
    question: "In winter, road signs can become covered by snow. What does this sign mean?",
    answers: [
      { answer: "Crossroads", correct: false },
      { answer: "Give way", correct: false },
      { answer: "Stop", correct: true },
      { answer: "Turn right", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Service area 30 miles ahead", correct: false },
      { answer: "Maximum speed 30 mph", correct: false },
      { answer: "Minimum speed 30 mph", correct: true },
      { answer: "Lay-by 30 miles ahead", correct: false }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Give way to oncoming vehicles", correct: false },
      { answer: "Approaching traffic passes you on both sides", correct: false },
      { answer: "Turn off at the next available junction", correct: false },
      { answer: "Pass either side to get to the same destination", correct: true }
    ]
  },
  {
    question: "What does this sign mean?",
    answers: [
      { answer: "Route for trams", correct: true },
      { answer: "Give way to trams", correct: false },
      { answer: "Route for buses", correct: false },
      { answer: "Give way to buses", correct: false }
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