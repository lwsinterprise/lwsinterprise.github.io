// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas extraídas do Teste06.js
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
    question: "What should you do when you're driving on an icy road?",
    answers: [
      { answer: "Drive at a slow speed in the highest gear possible", correct: true },
      { answer: "Use the parking brake if the wheels start to slip", correct: false },
      { answer: "Brake gently and repeatedly", correct: false },
      { answer: "Drive in a low gear at all times", correct: false }
    ]
  },
  {
    question: "What should you do if your vehicle engine catches fire?",
    answers: [
      { answer: "Open the bonnet to see where the fire is coming from", correct: false },
      { answer: "Pull up and get everyone out as quickly as possible", correct: true },
      { answer: "Try to put the fire out using a non-water fire extinguisher", correct: false },
      { answer: "Drive at high speed to try and blow the flames out", correct: false }
    ]
  },
  {
    question: "Which of these is the main cause of skidding?",
    answers: [
      { answer: "The vehicle", correct: false },
      { answer: "The driver", correct: true },
      { answer: "The weather", correct: false },
      { answer: "The road", correct: false }
    ]
  },
  {
    question: "What's the best way to prevent your car from skidding on a wet road?",
    answers: [
      { answer: "Drive at a slow speed", correct: true },
      { answer: "Drive in a low gear", correct: false },
      { answer: "Use your brakes often", correct: false },
      { answer: "Fit wider tyres", correct: false }
    ]
  },
  {
    question: "You're driving through a deep puddle. What's the first thing you should do when you've passed through it?",
    answers: [
      { answer: "Accelerate hard", correct: false },
      { answer: "Check your mirrors", correct: false },
      { answer: "Test your brakes", correct: true },
      { answer: "Stop and check your tyres", correct: false }
    ]
  },
  {
    question: "What's the purpose of coasting?",
    answers: [
      { answer: "It allows the engine to cool down", correct: false },
      { answer: "It improves your fuel consumption", correct: false },
      { answer: "It reduces your control of the vehicle", correct: true },
      { answer: "It makes the steering lighter", correct: false }
    ]
  },
  {
    question: "How can you use your vehicle's engine as a brake?",
    answers: [
      { answer: "By changing to a lower gear", correct: true },
      { answer: "By switching off the engine", correct: false },
      { answer: "By changing to a higher gear", correct: false },
      { answer: "By putting the car into neutral", correct: false }
    ]
  },
  {
    question: "Why should you avoid coasting?",
    answers: [
      { answer: "It will cause the engine to stall", correct: false },
      { answer: "It will make the steering feel heavy", correct: false },
      { answer: "Because you'll have less control over the vehicle", correct: true },
      { answer: "It will increase your fuel consumption", correct: false }
    ]
  },
  {
    question: "What's the most common cause of a vehicle skidding?",
    answers: [
      { answer: "Worn tyres", correct: false },
      { answer: "Faulty brakes", correct: false },
      { answer: "Driving too fast for the conditions", correct: true },
      { answer: "Ice on the road", correct: false }
    ]
  },
  {
    question: "You're about to start a journey in freezing weather. What should you do?",
    answers: [
      { answer: "Check that your windows are clear of ice and snow", correct: true },
      { answer: "Switch on your rear fog lights", correct: false },
      { answer: "Put some oil on your door locks", correct: false },
      { answer: "Deflate your tyres slightly", correct: false }
    ]
  },
  {
    question: "You're travelling on the motorway. How can you lower the risk of a collision when the vehicle behind is following too closely?",
    answers: [
      { answer: "Increase your distance from the vehicle in front", correct: true },
      { answer: "Brake sharply to show your brake lights", correct: false },
      { answer: "Switch on your hazard warning lights", correct: false },
      { answer: "Accelerate to get away from them", correct: false }
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
  },
  {
    question: "What's the first thing you should do if you break down on a motorway?",
    answers: [
      { answer: "Try to repair the fault yourself", correct: false },
      { answer: "Walk along the hard shoulder to a service station", correct: false },
      { answer: "Use an emergency telephone to call for help", correct: true },
      { answer: "Stay in your vehicle and wait for the police", correct: false }
    ]
  },
  {
    question: "Why should you use an emergency telephone on a motorway rather than your mobile phone?",
    answers: [
      { answer: "It's free to use", correct: false },
      { answer: "It allows the operator to see exactly where you are", correct: true },
      { answer: "It connects you directly to a local garage", correct: false },
      { answer: "It's easier to hear the operator", correct: false }
    ]
  },
  {
    question: "You're on a motorway. What should you do if you see a large object fall from another vehicle?",
    answers: [
      { answer: "Stop and pick it up yourself", correct: false },
      { answer: "Pull up on the hard shoulder and use an emergency telephone", correct: true },
      { answer: "Swerve to avoid it and carry on", correct: false },
      { answer: "Follow the vehicle and flash your headlights", correct: false }
    ]
  },
  {
    question: "What should you do if your vehicle breaks down in a tunnel?",
    answers: [
      { answer: "Stay in your vehicle and wait for help", correct: false },
      { answer: "Switch on your hazard warning lights and call for help", correct: true },
      { answer: "Try to push your vehicle out of the tunnel", correct: false },
      { answer: "Walk to the end of the tunnel", correct: false }
    ]
  },
  {
    question: "How can you use your vehicle's engine as a brake?",
    answers: [
      { answer: "By changing to a lower gear", correct: true },
      { answer: "By switching off the engine", correct: false },
      { answer: "By changing to a higher gear", correct: false },
      { answer: "By putting the car into neutral", correct: false }
    ]
  },
  {
    question: "Why should you avoid coasting?",
    answers: [
      { answer: "It will cause the engine to stall", correct: false },
      { answer: "It will make the steering feel heavy", correct: false },
      { answer: "You'll have less control over the vehicle", correct: true },
      { answer: "It will increase your fuel consumption", correct: false }
    ]
  },
  {
    question: "What's the most common cause of a vehicle skidding?",
    answers: [
      { answer: "Worn tyres", correct: false },
      { answer: "Faulty brakes", correct: false },
      { answer: "Driving too fast for the conditions", correct: true },
      { answer: "Ice on the road", correct: false }
    ]
  },
  {
    question: "You're about to start a journey in freezing weather. What should you do?",
    answers: [
      { answer: "Check that your windows are clear of ice and snow", correct: true },
      { answer: "Switch on your rear fog lights", correct: false },
      { answer: "Put some oil on your door locks", correct: false },
      { answer: "Deflate your tyres slightly", correct: false }
    ]
  },
  {
    question: "You're travelling on the motorway. How can you lower the risk of a collision when the vehicle behind is following too closely?",
    answers: [
      { answer: "Increase your distance from the vehicle in front", correct: true },
      { answer: "Brake sharply to show your brake lights", correct: false },
      { answer: "Switch on your hazard warning lights", correct: false },
      { answer: "Accelerate to get away from them", correct: false }
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
  },
  {
    question: "What should you do if your car starts to skid on a wet road?",
    answers: [
      { answer: "Brake hard and steer into the skid", correct: false },
      { answer: "Take your foot off the brake and steer into the skid", correct: true },
      { answer: "Steer away from the skid and accelerate", correct: false },
      { answer: "Switch off the engine immediately", correct: false }
    ]
  },
  {
    question: "You're driving at night. What should you do if you're dazzled by a vehicle behind you?",
    answers: [
      { answer: "Set your mirror to the anti-dazzle position", correct: true },
      { answer: "Brake sharply to slow down", correct: false },
      { answer: "Switch on your rear fog lights", correct: false },
      { answer: "Accelerate to get away from the vehicle", correct: false }
    ]
  },
  {
    question: "What's the main cause of brake fade?",
    answers: [
      { answer: "Air in the brake fluid", correct: false },
      { answer: "The brakes being used too much", correct: true },
      { answer: "The brakes being used too little", correct: false },
      { answer: "Worn brake linings", correct: false }
    ]
  },
  {
    question: "Why should you keep a safe distance from the vehicle in front?",
    answers: [
      { answer: "To allow you to see the road ahead clearly", correct: true },
      { answer: "To help you to overtake more easily", correct: false },
      { answer: "To prevent your engine from overheating", correct: false },
      { answer: "To stop other drivers from cutting in", correct: false }
    ]
  },
  {
    question: "What should you do if you find you're in the wrong lane at a busy roundabout?",
    answers: [
      { answer: "Continue in the lane you're in", correct: true },
      { answer: "Change lanes quickly and safely", correct: false },
      { answer: "Stop and wait for a gap in the traffic", correct: false },
      { answer: "Sound your horn to warn others", correct: false }
    ]
  },
  {
    question: "What should the driver of the car approaching the crossing do?",
    answers: [
      { answer: "Wait for the pedestrian to cross", correct: true },
      { answer: "Sound the horn to warn the pedestrian", correct: false },
      { answer: "Accelerate to get past before they cross", correct: false },
      { answer: "Flash the headlights at the pedestrian", correct: false }
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
  createQuestion(0);
}

// cria uma pergunta
function createQuestion(i) {
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => {
    btn.remove();
  });

  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  questions[i].answers.forEach((answer, i) => {
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute('correct-answer', answer['correct']);
    answerTemplate.classList.remove('hide');
    answerTemplate.classList.remove('answer-template');

    answerBox.appendChild(answerTemplate);

    answerTemplate.addEventListener('click', function () {
      checkAnswer(this);
    });
  });

  actualQuestion++;
}

// verificar resposta do usuário
function checkAnswer(btn) {
  const buttons = answerBox.querySelectorAll('button');

  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');
      if (btn === button) {
        points++;
      }
    } else {
      button.classList.add('wrong-answer');
    }
  });

  nextQuestion();
}

// exibe a próxima pergunta no quizz
function nextQuestion() {
  setTimeout(function () {
    if (actualQuestion >= questions.length) {
      showSuccessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 4050);
}

// exibe a tela final
function showSuccessMessage() {
  hideOrShowQuizz();

  const score = ((points / questions.length) * 100).toFixed(2);
  const displayScore = document.querySelector('#display-score span');
  displayScore.textContent = score.toString();

  const correctAnswers = document.querySelector('#correct-answers');
  correctAnswers.textContent = points;

  const totalQuestions = document.querySelector('#questions-qty');
  totalQuestions.textContent = questions.length;
}

// mostra ou esconde o score
function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

// reiniciar quizz
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

// inicialização do quizz
init();