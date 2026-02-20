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
    question: "What should you do when you're using a contraflow system?",
    answers: [
      { answer: "Choose an appropriate lane in good time", correct: true },
      { answer: "Switch lanes to make better progress", correct: false },
      { answer: "Increase speed to get through the contraflow more quickly", correct: false },
      { answer: "Follow other motorists closely to avoid long queues", correct: false }
    ]
  },
  {
    question: "How can you avoid wheelspin when you're driving on an icy road?",
    answers: [
      { answer: "Drive at a slow speed in the highest gear possible", correct: true },
      { answer: "Use the parking brake if the wheels start to slip", correct: false },
      { answer: "Brake gently and repeatedly", correct: false },
      { answer: "Drive in a low gear at all times", correct: false }
    ]
  },
  {
    question: "What's the main cause of skidding?",
    answers: [
      { answer: "The weather", correct: false },
      { answer: "The driver", correct: true },
      { answer: "The vehicle", correct: false },
      { answer: "The road", correct: false }
    ]
  },
  {
    question: "You're driving in freezing conditions. What should you do as you approach a sharp bend?",
    answers: [
      { answer: "Coast into the bend", correct: false },
      { answer: "Apply your parking brake", correct: false },
      { answer: "Firmly use your footbrake", correct: false },
      { answer: "Slow down gently", correct: true }
    ]
  },
  {
    question: "You're about to start a journey in freezing weather. What part of your vehicle should you clear of ice and snow?",
    answers: [
      { answer: "The aerial", correct: false },
      { answer: "The windows", correct: true },
      { answer: "The bumper", correct: false },
      { answer: "The boot ", correct: false }
    ]
  },
  {
    question: "What will help you to move off on a snowy surface?",
    answers: [
      { answer: "Using the car's lowest gear ", correct: false },
      { answer: "Using a higher gear than normal", correct: true },
      { answer: "Using a high engine speed", correct: false },
      { answer: "Using the parking brake and footbrake together", correct: false }
    ]
  },
  {
    question: "What should you do when you're driving in snowy conditions?",
    answers: [
      { answer: "Brake firmly and quickly", correct: false },
      { answer: "Be ready to steer sharply", correct: false },
      { answer: "Use sidelights only", correct: false },
      { answer: "Brake gently in plenty of time", correct: true }
    ]
  },
  {
    question: "What's the main benefit of driving a four-wheel-drive vehicle?",
    answers: [
      { answer: "Improved grip on the road", correct: true },
      { answer: "Lower fuel consumption", correct: false },
      { answer: "Shorter stopping distances", correct: false },
      { answer: "Improved passenger comfort", correct: false }
    ]
  },
  {
    question: "You're about to go down a steep hill. What should you do to control the speed of your vehicle?",
    answers: [
      { answer: "Select a high gear and use the brakes carefully", correct: false },
      { answer: "Select a high gear and use the brakes firmly", correct: false },
      { answer: "Select a low gear and use the brakes carefully", correct: true },
      { answer: "Select a low gear and avoid using the brakes", correct: false }
    ]
  },
  {
    question: "What should you do when you park a car facing downhill?",
    answers: [
      { answer: "Turn the steering wheel towards the kerb", correct: true },
      { answer: "Park close to the bumper of another car", correct: false },
      { answer: "Park with two wheels on the kerb", correct: false },
      { answer: "Turn the steering wheel away from the kerb", correct: false }
    ]
  },
  {
    question: "You're driving in a built-up area that has traffic-calming measures. What should you do when you approach a road hump?",
    answers: [
      { answer: "Move across to the left-hand side of the road ", correct: false },
      { answer: "Wait for any pedestrians to cross ", correct: false },
      { answer: "Check your mirror and slow down ", correct: true },
      { answer: "Stop and check both pavements", correct: false }
    ]
  },
  {
    question: "On what type of road surface may anti-lock brakes be ineffective?",
    answers: [
      { answer: "Dry", correct: false },
      { answer: "Loose", correct: true },
      { answer: "Firm", correct: false },
      { answer: "Smooth", correct: false }
    ]
  },
  {
    question: "You're driving a vehicle that has anti-lock brakes. How should you apply the footbrake when you need to stop in an emergency?",
    answers: [
      { answer: "Slowly and gently", correct: false },
      { answer: "Slowly but firmly", correct: false },
      { answer: "Rapidly and gently", correct: false },
      { answer: "Rapidly and firmly", correct: true }
    ]
  },
  {
    question: "You're driving along a country road. You see this sign. What should you do after dealing safely with the hazard?",
    answers: [
      { answer: "Check your tyre pressures", correct: false },
      { answer: "Switch on your hazard warning lights", correct: false },
      { answer: "Accelerate briskly", correct: false },
      { answer: "Test your brakes", correct: true }
    ]
  },
  {
    question: "What would suggest you're driving on an icy road?",
    answers: [
      { answer: "There's less wind noise", correct: false },
      { answer: "There's less tyre noise", correct: true },
      { answer: "There's less transmission noise", correct: false },
      { answer: "There's less engine noise", correct: false }
    ]
  },
  {
    question: "You're driving along a wet road. How can you tell if your vehicle’s tyres are losing their grip on the surface?",
    answers: [
      { answer: "The engine will stall", correct: false },
      { answer: "The steering will feel very heavy", correct: false },
      { answer: "The engine noise will increase", correct: false },
      { answer: "The steering will feel very light", correct: true }
    ]
  },
  {
    question: "In which conditions will your overall stopping distance increase?",
    answers: [
      { answer: "In the rain", correct: true },
      { answer: "In fog", correct: false },
      { answer: "At night", correct: false },
      { answer: "In strong winds", correct: false }
    ]
  },
  {
    question: "You're driving on an open road in dry weather. What distance should you keep from the vehicle in front?",
    answers: [
      { answer: "A two-second time gap", correct: true },
      { answer: "One car length", correct: false },
      { answer: "Two metres (6 feet 6 inches)", correct: false },
      { answer: "Two car lengths", correct: false }
    ]
  },
  {
    question: "How can you use your vehicle's engine as a brake?",
    answers: [
      { answer: "By changing to a lower gear", correct: true },
      { answer: "By selecting reverse gear", correct: false },
      { answer: "By changing to a higher gear", correct: false },
      { answer: "By selecting neutral gear", correct: false }
    ]
  },
  {
    question: "How should you use anti-lock brakes when you need to stop in an emergency?",
    answers: [
      { answer: "Keep pumping the footbrake to prevent skidding", correct: false },
      { answer: "Brake normally but grip the steering wheel tightly", correct: false },
      { answer: "Brake promptly and firmly until you've stopped", correct: true },
      { answer: "Apply the parking brake to reduce the stopping distance", correct: false }
    ]
  },
  {
    question: "What lights should you use when you're driving on a wet motorway and vehicles are throwing up surface spray?",
    answers: [
      { answer: "Hazard warning lights", correct: false },
      { answer: "Dipped headlights", correct: true },
      { answer: "Rear fog lights", correct: false },
      { answer: "Sidelights", correct: false }
    ]
  },
  {
    question: "What can result when you travel for long distances in neutral (known as coasting)?",
    answers: [
      { answer: "Improvement in control", correct: false },
      { answer: "Easier steering", correct: false },
      { answer: "Reduction in control", correct: true },
      { answer: "Increased fuel consumption", correct: false }
    ]
  },
  {
    question: "What should you do before starting a journey in foggy weather?",
    answers: [
      { answer: "Wear a hi-visibility jacket", correct: false },
      { answer: "Have a caffeinated drink", correct: false },
      { answer: "Allow more time", correct: true },
      { answer: "Reduce your tyre pressures", correct: false }
    ]
  },
  {
    question: "What should you do when you're overtaking a motorcyclist on a windy day?",
    answers: [
      { answer: "Pass closely", correct: false },
      { answer: "Pass very slowly", correct: false },
      { answer: "Pass widely", correct: true },
      { answer: "Pass immediately", correct: false }
    ]
  },
  {
    question: "What does it mean if the Electronic Stability Control (ESC) indicator lamp lights up while you’re driving?",
    answers: [
      { answer: "The ESC system has activated", correct: true },
      { answer: "The ESC system has a fault", correct: false },
      { answer: "The ESC system is running a routine test", correct: false },
      { answer: "The ESC system is switched off", correct: false }
    ]
  },
  {
    question: "Where would you expect to see these markers?",
    answers: [
      { answer: "On a motorway sign", correct: false },
      { answer: "On a railway bridge", correct: false },
      { answer: "On a large goods vehicle", correct: true },
      { answer: "On a diversion sign", correct: false }
    ]
  },
  {
    question: "What's the main hazard shown in this picture?",
    answers: [
      { answer: "Vehicles turning right", correct: false },
      { answer: "Vehicles doing U-turns", correct: false },
      { answer: "The cyclist crossing the road", correct: true },
      { answer: "Parked cars around the corner", correct: false }
    ]
  },
  {
    question: "Which road user has caused a hazard?",
    answers: [
      { answer: "The parked car (arrowed A)", correct: true },
      { answer: "The pedestrian waiting to cross (arrowed B)", correct: false },
      { answer: "The moving car (arrowed C)", correct: false },
      { answer: "The car turning (arrowed D)", correct: false }
    ]
  },
  {
    question: "What should the driver of the car approaching the crossing do?",
    answers: [
      { answer: "Continue at the same speed", correct: false },
      { answer: "Sound the horn", correct: false },
      { answer: "Drive through quickly", correct: false },
      { answer: "Slow down and get ready to stop", correct: true }
    ]
  },
  {
    question: "What should the driver of the grey car be especially aware of?",
    answers: [
      { answer: "The uneven road surface", correct: false },
      { answer: "Traffic following behind", correct: false },
      { answer: "Doors opening on parked cars", correct: true },
      { answer: "Empty parking spaces", correct: false }
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