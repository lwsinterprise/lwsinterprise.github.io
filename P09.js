// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas extraídas do Teste09.js (Total: 30 questões)
const questions = [
  {
    question: "What should you do if you're driving a slow-moving vehicle on a narrow winding road?",
    answers: [
      { answer: "Keep well out to stop vehicles overtaking dangerously", correct: false },
      { answer: "Wave the vehicles behind to come past you if you think they can overtake quickly", correct: false },
      { answer: "Pull in when you can, to let the vehicles behind overtake", correct: true },
      { answer: "Give a left signal when it's safe for vehicles to overtake you", correct: false }
    ]
  },
  {
    question: "What can happen if you overfill your engine with oil?",
    answers: [
      { answer: "It can make the engine difficult to start", correct: false },
      { answer: "It can cause oil leaks", correct: true },
      { answer: "It can improve the engine's performance", correct: false },
      { answer: "It can reduce the engine's noise", correct: false }
    ]
  },
  {
    question: "How should you check the oil level in your engine?",
    answers: [
      { answer: "When the engine is running", correct: false },
      { answer: "Immediately after a long journey", correct: false },
      { answer: "When the engine is cold and the car is on level ground", correct: true },
      { answer: "By looking at the oil pressure gauge", correct: false }
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
    question: "What's the main cause of brake fade?",
    answers: [
      { answer: "Air in the brake fluid", correct: false },
      { answer: "The brakes being used too much", correct: true },
      { answer: "The brakes being used too little", correct: false },
      { answer: "Worn brake linings", correct: false }
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
    question: "What's the legal minimum tread depth for tyres on a car?",
    answers: [
      { answer: "1.0 mm", correct: false },
      { answer: "1.6 mm", correct: true },
      { answer: "2.5 mm", correct: false },
      { answer: "4.0 mm", correct: false }
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
    question: "How can you help to keep your vehicle secure?",
    answers: [
      { answer: "Leave the engine running when you're out of the car", correct: false },
      { answer: "Leave the keys in the ignition when you're at a petrol station", correct: false },
      { answer: "Don't leave any valuables in the car where they can be seen", correct: true },
      { answer: "Park in a dark area at night", correct: false }
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
    question: "When must you notify the licensing authority?",
    answers: [
      { answer: "When you change your car", correct: false },
      { answer: "When your health affects your driving", correct: true },
      { answer: "When you have a minor collision", correct: false },
      { answer: "When you change your car insurance", correct: false }
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
    question: "You're following other vehicles in fog. You have your headlights on dipped beam. What else can you do to reduce the chances of being in a collision?",
    answers: [
      { answer: "Keep close to the vehicle in front", correct: false },
      { answer: "Use main beam instead of dipped headlights", correct: false },
      { answer: "Keep up with the faster vehicles", correct: false },
      { answer: "Keep a safe distance from the vehicle in front", correct: true }
    ]
  },
  {
    question: "Why is it important to wear suitable shoes when you're driving?",
    answers: [
      { answer: "To prevent your feet from getting cold", correct: false },
      { answer: "To ensure you have proper control of the pedals", correct: true },
      { answer: "To make sure you're comfortable on long journeys", correct: false },
      { answer: "To enable you to walk for assistance if you break down", correct: false }
    ]
  },
  {
    question: "If you're involved in a collision, what will reduce the risk of neck injury?",
    answers: [
      { answer: "An air-sprung seat", correct: false },
      { answer: "Anti-lock brakes", correct: false },
      { answer: "A collapsible steering wheel", correct: false },
      { answer: "A properly adjusted head restraint", correct: true }
    ]
  },
  {
    question: "What does it mean if your vehicle keeps bouncing after you sharply press down and release on the bodywork over a wheel?",
    answers: [
      { answer: "The tyres are worn", correct: false },
      { answer: "The tyres are under inflated", correct: false },
      { answer: "The vehicle is on soft ground", correct: false },
      { answer: "The shock absorbers are worn", correct: true }
    ]
  },
  {
    question: "How will your journey be affected by driving with a roof rack when it's empty?",
    answers: [
      { answer: "There will be less wind noise", correct: false },
      { answer: "The engine will use more oil", correct: false },
      { answer: "Fuel consumption will increase", correct: true },
      { answer: "The car will accelerate more quickly", correct: false }
    ]
  },
  {
    question: "What's the most important reason for having a properly adjusted head restraint?",
    answers: [
      { answer: "To make you more comfortable", correct: false },
      { answer: "To help you avoid neck injury", correct: true },
      { answer: "To help you relax", correct: false },
      { answer: "To help you maintain your driving position", correct: false }
    ]
  },
  {
    question: "Where would parking your vehicle cause an obstruction?",
    answers: [
      { answer: "In a marked parking space", correct: false },
      { answer: "Near a school entrance", correct: true },
      { answer: "On your own driveway", correct: false },
      { answer: "In a car park", correct: false }
    ]
  },
  {
    question: "You're travelling on the motorway. How can you lower the risk of a collision when the vehicle behind is following too closely?",
    answers: [
      { answer: "Increase your speed", correct: false },
      { answer: "Brake sharply", correct: false },
      { answer: "Switch on your hazard warning lights", correct: false },
      { answer: "Increase your distance from the vehicle in front", correct: true }
    ]
  },
  {
    question: "What can you do to reduce environmental damage caused by your vehicle?",
    answers: [
      { answer: "Avoid using the cruise control", correct: false },
      { answer: "Use the air conditioning whenever you drive", correct: false },
      { answer: "Use the gears to slow the vehicle", correct: false },
      { answer: "Avoid making a lot of short journeys", correct: true }
    ]
  }
];

// Lógica do Quiz
function init() {
  createQuestion(0);
}

function createQuestion(i) {
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => { btn.remove(); });

  const questionText = question.querySelector('#question-text');
  const questionNumber = question.querySelector('#question-number');

  questionText.textContent = questions[i].question;
  questionNumber.textContent = i + 1;

  questions[i].answers.forEach((answer, idx) => {
    const answerTemplate = document.querySelector('.answer-template').cloneNode(true);
    const letterBtn = answerTemplate.querySelector('.btn-letter');
    const answerText = answerTemplate.querySelector('.question-answer');

    letterBtn.textContent = letters[idx];
    answerText.textContent = answer.answer;

    answerTemplate.setAttribute('correct-answer', answer.correct);
    answerTemplate.classList.remove('hide', 'answer-template');

    answerBox.appendChild(answerTemplate);
    answerTemplate.addEventListener('click', function () { checkAnswer(this); });
  });

  actualQuestion++;
}

function checkAnswer(btn) {
  const buttons = answerBox.querySelectorAll('button');
  buttons.forEach((button) => {
    if (button.getAttribute('correct-answer') == 'true') {
      button.classList.add('correct-answer');
      if (btn === button) points++;
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
  document.querySelector('#display-score span').textContent = score;
  document.querySelector('#correct-answers').textContent = points;
  document.querySelector('#questions-qty').textContent = questions.length;
}

function hideOrShowQuizz() {
  quizzContainer.classList.toggle('hide');
  scoreContainer.classList.toggle('hide');
}

document.querySelector('#restart').addEventListener('click', function () {
  actualQuestion = 0;
  points = 0;
  hideOrShowQuizz();
  init();
});

init();