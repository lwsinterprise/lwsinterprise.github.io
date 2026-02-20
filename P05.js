// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas extraídas do Teste05.js
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
    question: "What's the most environmentally friendly way to travel for short journeys?",
    answers: [
      { answer: "Drive more quickly", correct: false },
      { answer: "Over-rev in a low gear", correct: false },
      { answer: "Walk or cycle", correct: true },
      { answer: "Use a smaller car", correct: false }
    ]
  },
  {
    question: "How can you reduce the environmental harm caused by your motor vehicle?",
    answers: [
      { answer: "Drive as fast as possible", correct: false },
      { answer: "Keep your engine revs high", correct: false },
      { answer: "Have your vehicle serviced regularly", correct: true },
      { answer: "Use leaded petrol", correct: false }
    ]
  },
  {
    question: "What should you do if you have to leave your vehicle parked on a road at night?",
    answers: [
      { answer: "Park facing the traffic", correct: false },
      { answer: "Leave your sidelights on if the speed limit is over 30 mph", correct: true },
      { answer: "Leave your hazard warning lights on", correct: false },
      { answer: "Park under a street light", correct: false }
    ]
  },
  {
    question: "Why should you keep the engine speed low when your engine is cold?",
    answers: [
      { answer: "To prevent the fan belt from slipping", correct: false },
      { answer: "To reduce damage to the engine", correct: true },
      { answer: "To allow the oil to warm up more quickly", correct: false },
      { answer: "To stop the engine from stalling", correct: false }
    ]
  },
  {
    question: "How should you drive when you're following a vehicle in wet weather?",
    answers: [
      { answer: "Stay close to the vehicle in front", correct: false },
      { answer: "Keep a safe distance from the vehicle in front", correct: true },
      { answer: "Use your rear fog lights", correct: false },
      { answer: "Drive in a high gear", correct: false }
    ]
  },
  {
    question: "You're driving in very heavy rain. What should you do if your steering suddenly feels very light?",
    answers: [
      { answer: "Brake firmly to slow down", correct: false },
      { answer: "Ease off the accelerator", correct: true },
      { answer: "Steer sharply from side to side", correct: false },
      { answer: "Accelerate to gain more grip", correct: false }
    ]
  },
  {
    question: "When should you use your rear fog lights?",
    answers: [
      { answer: "When visibility is less than 100 metres (328 feet)", correct: true },
      { answer: "When it's raining heavily", correct: false },
      { answer: "When you're driving on a motorway at night", correct: false },
      { answer: "When you're parked on a busy road", correct: false }
    ]
  },
  {
    question: "Why is it dangerous to use rear fog lights when it's not foggy?",
    answers: [
      { answer: "They may dazzle following drivers", correct: true },
      { answer: "They may cause your battery to fail", correct: false },
      { answer: "They may reduce your engine's power", correct: false },
      { answer: "They may make your indicators difficult to see", correct: false }
    ]
  },
  {
    question: "You're driving on a motorway in heavy rain. What should you do if you're being dazzled by the spray from the vehicle in front?",
    answers: [
      { answer: "Close the distance between your vehicle and the one in front", correct: false },
      { answer: "Switch on your full-beam headlights", correct: false },
      { answer: "Drop back until you can see more clearly", correct: true },
      { answer: "Pull up onto the hard shoulder", correct: false }
    ]
  },
  {
    question: "Which lights should you use when you're driving in a tunnel?",
    answers: [
      { answer: "Sidelights only", correct: false },
      { answer: "Dipped headlights", correct: true },
      { answer: "Full-beam headlights", correct: false },
      { answer: "Fog lights", correct: false }
    ]
  },
  {
    question: "How will your stopping distance be affected on a road that's icy?",
    answers: [
      { answer: "It will be ten times further than normal", correct: true },
      { answer: "It will be the same as normal", correct: false },
      { answer: "It will be twice as far as normal", correct: false },
      { answer: "It will be half the normal distance", correct: false }
    ]
  },
  {
    question: "What should you do when you're driving in icy weather?",
    answers: [
      { answer: "Drive in the highest gear possible", correct: true },
      { answer: "Drive in the lowest gear possible", correct: false },
      { answer: "Use the parking brake while you're moving", correct: false },
      { answer: "Brake hard and often", correct: false }
    ]
  },
  {
    question: "What should you do if your vehicle's engine catches fire?",
    answers: [
      { answer: "Open the bonnet to see what's wrong", correct: false },
      { answer: "Drive as fast as possible to blow out the flames", correct: false },
      { answer: "Pull up and get everyone out of the vehicle", correct: true },
      { answer: "Stay in the vehicle and call for help", correct: false }
    ]
  },
  {
    question: "What should you do before starting a journey in snowy weather?",
    answers: [
      { answer: "Clear the snow from all your windows", correct: true },
      { answer: "Deflate your tyres slightly", correct: false },
      { answer: "Put some anti-freeze in your screenwash", correct: false },
      { answer: "Switch on your hazard warning lights", correct: false }
    ]
  },
  {
    question: "You're driving in fog. Why should you keep your speed down?",
    answers: [
      { answer: "Because your brakes won't work as well", correct: false },
      { answer: "So that you can stop within the distance you can see to be clear", correct: true },
      { answer: "To prevent your engine from overheating", correct: false },
      { answer: "So that other drivers can see you more easily", correct: false }
    ]
  },
  {
    question: "When should you use your hazard warning lights?",
    answers: [
      { answer: "When you're double-parked on a main road", correct: false },
      { answer: "To warn following traffic of a hazard ahead on a motorway", correct: true },
      { answer: "When you're parked on a pavement", correct: false },
      { answer: "To thank another driver for giving way", correct: false }
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
    question: "What's the main cause of skidding?",
    answers: [
      { answer: "The driver", correct: true },
      { answer: "The vehicle", correct: false },
      { answer: "The road", correct: false },
      { answer: "The weather", correct: false }
    ]
  },
  {
    question: "What's the best way to prevent your vehicle from skidding on a wet road?",
    answers: [
      { answer: "Drive at a slow speed", correct: true },
      { answer: "Drive in a low gear", correct: false },
      { answer: "Use your brakes often", correct: false },
      { answer: "Fit wider tyres", correct: false }
    ]
  },
  {
    question: "You're driving on a road with a lot of surface water. What should you do after driving through a deep puddle?",
    answers: [
      { answer: "Accelerate hard", correct: false },
      { answer: "Test your brakes", correct: true },
      { answer: "Stop and check your tyres", correct: false },
      { answer: "Switch on your hazard warning lights", correct: false }
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