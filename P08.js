// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas extraídas do Teste08.js
const questions = [
  {
    question: "You're being overtaken by a long, heavily laden lorry. What should you do if it's taking a long time for it to overtake?",
    answers: [
      { answer: "Speed up", correct: false },
      { answer: "Slow down", correct: true },
      { answer: "Hold your speed", correct: false },
      { answer: "Change direction", correct: false }
    ]
  },
  {
    question: "What does it mean if you see a vehicle with a flashing blue light?",
    answers: [
      { answer: "Motorway maintenance", correct: false },
      { answer: "Bomb disposal", correct: true },
      { answer: "Snow plough", correct: false },
      { answer: "Breakdown recovery", correct: false }
    ]
  },
  {
    question: "You're driving a slow-moving vehicle on a narrow winding road. What should you do if there's a long queue of traffic behind you?",
    answers: [
      { answer: "Keep well out to stop vehicles overtaking dangerously", correct: false },
      { answer: "Wave the vehicles behind to come past you", correct: false },
      { answer: "Pull in when you can, to let the vehicles behind overtake", correct: true },
      { answer: "Give a left signal when it's safe for vehicles to overtake you", correct: false }
    ]
  },
  {
    question: "What's the most likely cause of a car pulling to one side when braking?",
    answers: [
      { answer: "The parking brake is on", correct: false },
      { answer: "The brakes are badly worn", correct: true },
      { answer: "The tyres are under-inflated", correct: false },
      { answer: "The fuel level is low", correct: false }
    ]
  },
  {
    question: "How will your vehicle be affected by driving with an empty roof rack?",
    answers: [
      { answer: "There will be less wind noise", correct: false },
      { answer: "The engine will use more oil", correct: false },
      { answer: "The fuel consumption will increase", correct: true },
      { answer: "The acceleration will be improved", correct: false }
    ]
  },
  {
    question: "What could happen if you overfill your engine with oil?",
    answers: [
      { answer: "It could cause oil leaks", correct: true },
      { answer: "The engine will run more quietly", correct: false },
      { answer: "The oil pressure will be too low", correct: false },
      { answer: "It could improve the fuel consumption", correct: false }
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
    question: "How should you dispose of a used vehicle battery?",
    answers: [
      { answer: "Put it in the household rubbish", correct: false },
      { answer: "Take it to a local authority disposal site", correct: true },
      { answer: "Leave it by the side of the road", correct: false },
      { answer: "Bury it in the garden", correct: false }
    ]
  },
  {
    question: "What is the legal minimum tread depth for tyres on a car?",
    answers: [
      { answer: "1.0 mm", correct: false },
      { answer: "1.6 mm", correct: true },
      { answer: "2.5 mm", correct: false },
      { answer: "4.0 mm", correct: false }
    ]
  },
  {
    question: "When should you check your vehicle's tyre pressures?",
    answers: [
      { answer: "After a long journey", correct: false },
      { answer: "When the tyres are cold", correct: true },
      { answer: "Every time you use the vehicle", correct: false },
      { answer: "When the tyres are warm", correct: false }
    ]
  },
  {
    question: "What's likely to happen if your wheels are out of balance?",
    answers: [
      { answer: "The steering will vibrate", correct: true },
      { answer: "The vehicle will pull to one side", correct: false },
      { answer: "The brakes will fail", correct: false },
      { answer: "The tyres will last longer", correct: false }
    ]
  },
  {
    question: "What should you do if your anti-lock brakes (ABS) warning light stays on?",
    answers: [
      { answer: "Check the brake fluid level", correct: false },
      { answer: "Have the system checked by a professional", correct: true },
      { answer: "Stop the vehicle immediately and call for help", correct: false },
      { answer: "Ignore it unless you need to brake hard", correct: false }
    ]
  },
  {
    question: "Why should you keep well back from the vehicle in front when you're following it in rain?",
    answers: [
      { answer: "To allow you to see further ahead", correct: true },
      { answer: "To prevent your vehicle from sliding", correct: false },
      { answer: "To avoid the spray from the other vehicle", correct: false },
      { answer: "To give you more time to use your wipers", correct: false }
    ]
  },
  {
    question: "You're driving in a built-up area at night. Which lights should you use when there are street lights?",
    answers: [
      { answer: "Sidelights only", correct: false },
      { answer: "Full-beam headlights", correct: false },
      { answer: "Dipped headlights", correct: true },
      { answer: "Fog lights", correct: false }
    ]
  },
  {
    question: "What's the purpose of an MOT test?",
    answers: [
      { answer: "To check the mechanical condition of the vehicle", correct: true },
      { answer: "To check the driver's ability", correct: false },
      { answer: "To ensure the vehicle is insured", correct: false },
      { answer: "To check the value of the vehicle", correct: false }
    ]
  },
  {
    question: "What does it mean if you see blue smoke coming from your exhaust?",
    answers: [
      { answer: "The air filter is dirty", correct: false },
      { answer: "The engine is burning oil", correct: true },
      { answer: "The fuel is of poor quality", correct: false },
      { answer: "The radiator is leaking", correct: false }
    ]
  },
  {
    question: "How can you save fuel when you're driving?",
    answers: [
      { answer: "By driving in a low gear", correct: false },
      { answer: "By accelerating hard", correct: false },
      { answer: "By missing out some gears", correct: true },
      { answer: "By braking late and hard", correct: false }
    ]
  },
  {
    question: "What will happen if your power-assisted steering fails?",
    answers: [
      { answer: "The steering will become very heavy", correct: true },
      { answer: "The steering will lock", correct: false },
      { answer: "The vehicle will pull to one side", correct: false },
      { answer: "The steering will become very light", correct: false }
    ]
  },
  {
    question: "When should you use your hazard warning lights while you're driving?",
    answers: [
      { answer: "When you're double-parked", correct: false },
      { answer: "When you're towed by another vehicle", correct: false },
      { answer: "When you're approaching a queue of traffic on a motorway", correct: true },
      { answer: "When you're driving in poor visibility", correct: false }
    ]
  },
  {
    question: "What should you do if your vehicle breaks down on a motorway?",
    answers: [
      { answer: "Stop on the hard shoulder and use an emergency telephone", correct: true },
      { answer: "Try to fix it yourself on the hard shoulder", correct: false },
      { answer: "Wait for a passing driver to stop and help", correct: false },
      { answer: "Walk along the motorway to find a garage", correct: false }
    ]
  },
  {
    question: "You're driving on a motorway. What should you do if you miss your exit?",
    answers: [
      { answer: "Reverse back to the exit", correct: false },
      { answer: "Make a U-turn at the next gap in the central reservation", correct: false },
      { answer: "Carry on to the next exit", correct: true },
      { answer: "Stop on the hard shoulder and wait for the police", correct: false }
    ]
  },
  {
    question: "What should you do if you see a pedestrian with a white stick?",
    answers: [
      { answer: "Give them plenty of room because they're blind", correct: true },
      { answer: "Sound your horn to let them know you're there", correct: false },
      { answer: "Flash your headlights to show them they can cross", correct: false },
      { answer: "Stop and ask them if they need help", correct: false }
    ]
  },
  {
    question: "When are you allowed to use your horn in a built-up area?",
    answers: [
      { answer: "Between 11.30 pm and 7.00 am", correct: false },
      { answer: "Only to warn another road user of a danger", correct: true },
      { answer: "To tell someone you've arrived to pick them up", correct: false },
      { answer: "To thank another driver for giving way", correct: false }
    ]
  },
  {
    question: "You're driving in a slow-moving queue of traffic. What should you do before changing lanes?",
    answers: [
      { answer: "Sound your horn and move quickly", correct: false },
      { answer: "Flash your headlights to the driver behind", correct: false },
      { answer: "Check your mirrors and give a signal", correct: true },
      { answer: "Wait for the driver in the other lane to wave you in", correct: false }
    ]
  },
  {
    question: "What's the first thing you should do if your vehicle catches fire inside a tunnel?",
    answers: [
      { answer: "Drive it out of the tunnel if you can", correct: true },
      { answer: "Stop immediately and run away", correct: false },
      { answer: "Try to put the fire out yourself", correct: false },
      { answer: "Wait for the tunnel emergency services", correct: false }
    ]
  },
  {
    question: "You're following a cyclist. What should you do as you approach a roundabout?",
    answers: [
      { answer: "Give them plenty of room", correct: true },
      { answer: "Overtake them quickly before the roundabout", correct: false },
      { answer: "Sound your horn to warn them", correct: false },
      { answer: "Stay close behind them so they know you're there", correct: false }
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
    question: "When should you leave a two-second gap between your vehicle and the one in front?",
    answers: [
      { answer: "When the road is dry", correct: true },
      { answer: "When the road is wet", correct: false },
      { answer: "When it's foggy", correct: false },
      { answer: "When it's icy", correct: false }
    ]
  },
  {
    question: "You're driving at night on an unlit road. What should you do if you're following another vehicle?",
    answers: [
      { answer: "Flash your headlights", correct: false },
      { answer: "Use dipped headlights", correct: true },
      { answer: "Switch off your headlights", correct: false },
      { answer: "Use full-beam headlights", correct: false }
    ]
  }
];

// Funções de inicialização
function init() {
  createQuestion(0);
}

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

function nextQuestion() {
  setTimeout(function () {
    if (actualQuestion >= questions.length) {
      showSuccessMessage();
      return;
    }
    createQuestion(actualQuestion);
  }, 4050);
}

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

function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', function () {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

init();