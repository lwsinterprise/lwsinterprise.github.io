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
    question: "What can you do to reduce environmental damage caused by your vehicle?",
    answers: [
      { answer: "Avoid using the cruise control", correct: false },
      { answer: "Use the air conditioning whenever you drive", correct: false },
      { answer: "Use the gears to slow the vehicle", correct: false },
      { answer: "Avoid making a lot of short journeys", correct: true }
    ]
  },
  {
    question: "What can people who live or work in towns and cities do to help reduce urban pollution levels?",
    answers: [
      { answer: "Drive more quickly", correct: false },
      { answer: "Over-rev in a low gear ", correct: false },
      { answer: "Walk or cycle", correct: true },
      { answer: "Drive short journeys", correct: false }
    ]
  },
  {
    question: "How can you reduce the chances of your car being broken into when leaving it unattended?",
    answers: [
      { answer: "Take all valuables with you", correct: true },
      { answer: "Park near a taxi rank", correct: false },
      { answer: "Place any valuables on the floor", correct: false },
      { answer: "Park near a fire station", correct: false }
    ]
  },
  {
    question: "How can you help to prevent your car radio being stolen?",
    answers: [
      { answer: "Park in an unlit area", correct: false },
      { answer: "Leave the radio turned on", correct: false },
      { answer: "Park near a busy junction", correct: false },
      { answer: "Install a security-coded radio", correct: true }
    ]
  },
  {
    question: "How can you reduce the risk of your vehicle being broken into at night?",
    answers: [
      { answer: "Leave it in a well-lit area", correct: true },
      { answer: "Park in a quiet side road", correct: false },
      { answer: "Don’t engage the steering lock", correct: false },
      { answer: "Park in a poorly lit area", correct: false }
    ]
  },
  {
    question: "What will help you to keep your car secure?",
    answers: [
      { answer: "Being a member of a vehicle breakdown organisation", correct: false },
      { answer: "Registering with a Vehicle Watch scheme", correct: true },
      { answer: "Passing an advanced driving test", correct: false },
      { answer: "Taking car maintenance classes", correct: false }
    ]
  },
  {
    question: "On a vehicle, where would you find a catalytic converter?",
    answers: [
      { answer: "In the fuel tank", correct: false },
      { answer: "In the air filter", correct: false },
      { answer: "On the cooling system", correct: false },
      { answer: "On the exhaust system", correct: true }
    ]
  },
  {
    question: "What can you achieve if you drive smoothly?",
    answers: [
      { answer: "Reduction in journey times by about 15%", correct: false },
      { answer: "Increase in fuel consumption by about 15%", correct: false },
      { answer: "Reduction in fuel consumption by about 15%", correct: true },
      { answer: "Increase in journey times by about 15%", correct: false }
    ]
  },
  {
    question: "Which driving technique can help you save fuel?",
    answers: [
      { answer: "Using lower gears as often as possible", correct: false },
      { answer: "Accelerating sharply in each gear", correct: false },
      { answer: "Using each gear in turn", correct: false },
      { answer: "Missing out some gears", correct: true }
    ]
  },
  {
    question: "How can driving in a fuel-efficient manner help protect the environment?",
    answers: [
      { answer: "Through the legal enforcement of speed regulations", correct: false },
      { answer: "By increasing the number of cars on the road", correct: false },
      { answer: "Through increased fuel bills", correct: false },
      { answer: "By reducing exhaust emissions", correct: true }
    ]
  },
  {
    question: "What does fuel-efficient driving achieve?",
    answers: [
      { answer: "Increased fuel consumption", correct: false },
      { answer: "Improved road safety", correct: true },
      { answer: "Damage to the environment", correct: false },
      { answer: "Increased exhaust emissions", correct: false }
    ]
  },
  {
    question: "What's the legal minimum tread depth for tyres on your trailer or caravan?",
    answers: [
      { answer: "1 mm", correct: false },
      { answer: "1.6 mm", correct: true },
      { answer: "2 mm", correct: false },
      { answer: "2.6 mm", correct: false }
    ]
  },
  {
    question: "When is fuel consumption at its highest?",
    answers: [
      { answer: "When you're braking", correct: false },
      { answer: "When you're coasting", correct: false },
      { answer: "When you're accelerating", correct: true },
      { answer: "When you're turning sharply", correct: false }
    ]
  },
  {
    question: "When may a passenger travel in a car without wearing a seat belt?",
    answers: [
      { answer: "When they're under 14 years old", correct: false },
      { answer: "When they're under 1.5 metres (5 feet) in height", correct: false },
      { answer: "When they're sitting in the rear seat", correct: false },
      { answer: "When they're exempt for medical reasons", correct: true }
    ]
  },
  {
    question: "You're driving a friend's children home from school. They're both under 14 years old. Who's responsible for making sure they wear a seat belt or approved child restraint where required?",
    answers: [
      { answer: "An adult passenger", correct: false },
      { answer: "The children", correct: false },
      { answer: "You, the driver", correct: true },
      { answer: "Your friend", correct: false }
    ]
  },
  {
    question: "What's likely to happen if you put too much oil in your engine?",
    answers: [
      { answer: "The clutch pedal will lock", correct: false },
      { answer: "The air intake will become blocked", correct: false },
      { answer: "The timing belt will slip", correct: false },
      { answer: "The oil seals will leak", correct: true }
    ]
  },
  {
    question: "You have to make an unexpected journey. You're carrying a five-year-old child on the back seat of your car. They're under 1.35 metres (4 feet 5 inches) tall. How should you seat them if a correct child restraint isn't available?",
    answers: [
      { answer: "Behind the passenger seat", correct: false },
      { answer: "Using an adult seat belt", correct: true },
      { answer: "Sharing a belt with an adult", correct: false },
      { answer: "Between two other children", correct: false }
    ]
  },
  {
    question: "You're carrying an 11-year-old child on the front seat of your car. They're under 1.35 metres (4 feet 5 inches) tall. What seat belt security must be in place?",
    answers: [
      { answer: "They must use an adult seat belt", correct: false },
      { answer: "They must be able to fasten their own seat belt ", correct: false },
      { answer: "They must use a suitable child restraint", correct: true },
      { answer: "They must be able to see clearly out of the front window", correct: false }
    ]
  },
  {
    question: "You're stopped at the side of the road. What must you do if you'll be waiting there for some time?",
    answers: [
      { answer: "Switch off the engine", correct: true },
      { answer: "Apply the steering lock", correct: false },
      { answer: "Switch off the radio", correct: false },
      { answer: "Use your headlights", correct: false }
    ]
  },
  {
    question: "You want to put a rear-facing baby seat on the front passenger seat. What must you do if the passenger seat is protected by a frontal airbag?",
    answers: [
      { answer: "Deactivate the airbag", correct: true },
      { answer: "Turn the seat to face sideways", correct: false },
      { answer: "Ask a passenger to hold the baby", correct: false },
      { answer: "Put the child in an adult seat belt", correct: false }
    ]
  },
  {
    question: "You're leaving your vehicle parked on a road and unattended. When may you leave the engine running?",
    answers: [
      { answer: "If you'll be parking for less than five minutes", correct: false },
      { answer: "If the battery keeps going flat", correct: false },
      { answer: "When parked in a 20 mph zone", correct: false },
      { answer: "Never if you're away from the vehicle", correct: true }
    ]
  },
  {
    question: "How much can stopping distances increase in icy conditions?",
    answers: [
      { answer: "Two times", correct: false },
      { answer: "Three times", correct: false },
      { answer: "Five times", correct: false },
      { answer: "Ten times", correct: true }
    ]
  },
  {
    question: "What requires extra care when you're driving or riding in windy conditions?",
    answers: [
      { answer: "Using the brakes", correct: false },
      { answer: "Moving off on a hill", correct: false },
      { answer: "Turning into a narrow road", correct: false },
      { answer: "Passing pedal cyclists", correct: true }
    ]
  },
  {
    question: "Why should you keep well to the left as you approach a right-hand bend?",
    answers: [
      { answer: "To improve your view of the road", correct: true },
      { answer: "To overcome the effect of the road’s slope", correct: false },
      { answer: "To let faster traffic from behind overtake", correct: false },
      { answer: "To be positioned safely if you skid", correct: false }
    ]
  },
  {
    question: "You’ve just gone through flood water. What should you do to make sure your brakes are working properly?",
    answers: [
      { answer: "Accelerate and keep to a high speed for a short time", correct: false },
      { answer: "Go slowly while gently applying the brakes", correct: true },
      { answer: "Avoid using the brakes at all for a few miles", correct: false },
      { answer: "Stop for at least an hour to allow them time to dry", correct: false }
    ]
  },
  {
    question: "What will be affected if the road surface becomes soft in very hot weather?",
    answers: [
      { answer: "The suspension", correct: false },
      { answer: "The exhaust emissions", correct: false },
      { answer: "The fuel consumption", correct: false },
      { answer: "The tyre grip", correct: true }
    ]
  },
  {
    question: "Where is your vehicle most likely to be affected by side winds?",
    answers: [
      { answer: "On a narrow country lane", correct: false },
      { answer: "On an open stretch of road", correct: true },
      { answer: "On a busy stretch of road", correct: false },
      { answer: "On a long, straight road", correct: false }
    ]
  },
  {
    question: "You're following a vehicle on a wet road. You stay a safe distance behind it. What should you do if a driver overtakes you and pulls into the gap you've left?",
    answers: [
      { answer: "Flash your headlights as a warning", correct: false },
      { answer: "Try to overtake safely as soon as you can", correct: false },
      { answer: "Drop back to regain a safe distance", correct: true },
      { answer: "Stay close to the other vehicle until it moves on", correct: false }
    ]
  },
  {
    question: "You're travelling on the motorway. How can you lower the risk of a collision when the vehicle behind is following too closely?",
    answers: [
      { answer: "Increase your distance from the vehicle in front", correct: true },
      { answer: "Brake sharply", correct: false },
      { answer: "Switch on your hazard warning lights", correct: false },
      { answer: "Move onto the hard shoulder and stop", correct: false }
    ]
  },
  {
    question: "You're following other vehicles in fog. You have your headlights on dipped beam. What else can you do to reduce the chances of being in a collision?",
    answers: [
      { answer: "Keep close to the vehicle in front", correct: false },
      { answer: "Use main beam instead of dipped headlights", correct: false },
      { answer: "Keep up with the faster vehicles", correct: false },
      { answer: "Keep a safe distance from the vehicle in front", correct: true }
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