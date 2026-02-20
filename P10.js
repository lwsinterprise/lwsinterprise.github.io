// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas extraídas do Teste10.js (30 questões completas)
const questions = [
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
    question: "How will a roof rack affect your car?",
    answers: [
      { answer: "There will be less wind noise", correct: false },
      { answer: "The engine will use more oil", correct: false },
      { answer: "The car will accelerate faster", correct: false },
      { answer: "Fuel consumption will increase", correct: true }
    ]
  },
  {
    question: "What makes your tyres illegal?",
    answers: [
      { answer: "If they were bought second-hand", correct: false },
      { answer: "If they have any large, deep cuts in the side wall", correct: true },
      { answer: "If they're of different makes", correct: false },
      { answer: "If they have different tread patterns", correct: false }
    ]
  },
  {
    question: "What's the legal minimum depth of tread for car tyres?",
    answers: [
      { answer: "1 mm", correct: false },
      { answer: "1.6 mm", correct: true },
      { answer: "2.5 mm", correct: false },
      { answer: "4 mm", correct: false }
    ]
  },
  {
    question: "You're carrying two 13-year-old children and their parents in your car. Who's responsible for seeing that the children wear seat belts?",
    answers: [
      { answer: "The children's parents", correct: false },
      { answer: "You, the driver", correct: true },
      { answer: "The front-seat passenger", correct: false },
      { answer: "The children", correct: false }
    ]
  },
  {
    question: "How can drivers help the environment?",
    answers: [
      { answer: "By accelerating harshly", correct: false },
      { answer: "By accelerating gently", correct: true },
      { answer: "By using leaded fuel", correct: false },
      { answer: "By driving faster", correct: false }
    ]
  },
  {
    question: "How can you avoid wasting fuel?",
    answers: [
      { answer: "By having your vehicle serviced regularly", correct: true },
      { answer: "By revving the engine in the lower gears", correct: false },
      { answer: "By keeping an empty roof rack on your vehicle", correct: false },
      { answer: "By driving at higher speeds where possible", correct: false }
    ]
  },
  {
    question: "What could you do to reduce the volume of traffic on the roads?",
    answers: [
      { answer: "Drive in a bus lane", correct: false },
      { answer: "Use a car with a smaller engine", correct: false },
      { answer: "Walk or cycle on short journeys", correct: true },
      { answer: "Travel by car at all times", correct: false }
    ]
  },
  {
    question: "What's most likely to waste fuel?",
    answers: [
      { answer: "Reducing your speed", correct: false },
      { answer: "Driving on motorways", correct: false },
      { answer: "Using different brands of fuel", correct: false },
      { answer: "Under-inflated tyres", correct: true }
    ]
  },
  {
    question: "What part of the car does the law require you to keep in good condition?",
    answers: [
      { answer: "The gearbox", correct: false },
      { answer: "The transmission", correct: false },
      { answer: "The door locks", correct: false },
      { answer: "The seat belts", correct: true }
    ]
  },
  {
    question: "How much more fuel will you use by driving at 70 mph, compared with driving at 50 mph?",
    answers: [
      { answer: "About 5%", correct: false },
      { answer: "About 15%", correct: true },
      { answer: "About 75%", correct: false },
      { answer: "About 100%", correct: false }
    ]
  },
  {
    question: "What should you do if your vehicle pulls to one side when you use the brakes?",
    answers: [
      { answer: "Increase the pressure in your tyres", correct: false },
      { answer: "Have the brakes checked as soon as possible", correct: true },
      { answer: "Change gear and pump the brake pedal", correct: false },
      { answer: "Use your parking brake at the same time", correct: false }
    ]
  },
  {
    question: "What will happen if your car's wheels are unbalanced?",
    answers: [
      { answer: "The steering will pull to one side", correct: false },
      { answer: "The steering will vibrate", correct: true },
      { answer: "The brakes will fail", correct: false },
      { answer: "The tyres will deflate", correct: false }
    ]
  },
  {
    question: "What can be damaged if you turn the steering wheel when the car isn't moving?",
    answers: [
      { answer: "The gearbox", correct: false },
      { answer: "The engine", correct: false },
      { answer: "The brakes", correct: false },
      { answer: "The tyres", correct: true }
    ]
  },
  {
    question: "What’s the safest thing to do if you have to leave valuables in your car?",
    answers: [
      { answer: "Put them in a carrier bag", correct: false },
      { answer: "Park near a school entrance", correct: false },
      { answer: "Lock them out of sight", correct: true },
      { answer: "Park near a bus stop", correct: false }
    ]
  },
  {
    question: "What may help to deter a thief from stealing your car?",
    answers: [
      { answer: "Always keeping the headlights on", correct: false },
      { answer: "Fitting reflective glass windows", correct: false },
      { answer: "Always keeping the interior light on", correct: false },
      { answer: "Etching the registration number on the windows", correct: true }
    ]
  },
  {
    question: "What should you remove from your car before leaving it unattended?",
    answers: [
      { answer: "The car dealer’s details", correct: false },
      { answer: "The owner’s manual", correct: false },
      { answer: "The service record", correct: false },
      { answer: "The vehicle registration document", correct: true }
    ]
  },
  {
    question: "What should you do when leaving your vehicle parked and unattended?",
    answers: [
      { answer: "Park near a busy junction", correct: false },
      { answer: "Park in a housing estate", correct: false },
      { answer: "Lock it and remove the key", correct: true },
      { answer: "Leave the left indicator on", correct: false }
    ]
  },
  {
    question: "What will reduce fuel consumption?",
    answers: [
      { answer: "Driving more slowly", correct: true },
      { answer: "Accelerating rapidly", correct: false },
      { answer: "Late and heavy braking", correct: false },
      { answer: "Staying in lower gears", correct: false }
    ]
  },
  {
    question: "You service your own vehicle. How should you dispose of the old engine oil?",
    answers: [
      { answer: "Take it to a local-authority site", correct: true },
      { answer: "Pour it down a drain", correct: false },
      { answer: "Tip it into a hole in the ground", correct: false },
      { answer: "Put it in your dustbin", correct: false }
    ]
  },
  {
    question: "Why do MOT tests include an exhaust emission test?",
    answers: [
      { answer: "To recover the cost of expensive garage equipment", correct: false },
      { answer: "To help protect the environment against pollution", correct: true },
      { answer: "To discover which fuel supplier is used the most", correct: false },
      { answer: "To make sure diesel and petrol engines emit the same fumes", correct: false }
    ]
  },
  {
    question: "How can you reduce the damage your vehicle causes to the environment?",
    answers: [
      { answer: "Use narrow side streets", correct: false },
      { answer: "Brake heavily", correct: false },
      { answer: "Use busy routes", correct: false },
      { answer: "Anticipate well ahead", correct: true }
    ]
  },
  {
    question: "How will you benefit from following the manufacturer's service schedule for your vehicle?",
    answers: [
      { answer: "Your vehicle will be cheaper to insure", correct: false },
      { answer: "Your vehicle tax will be lower", correct: false },
      { answer: "Your vehicle will remain reliable", correct: true },
      { answer: "Your journey times will be reduced", correct: false }
    ]
  },
  {
    question: "How should you drive when you're driving along a road that has road humps?",
    answers: [
      { answer: "Maintain a reduced speed throughout", correct: true },
      { answer: "Accelerate quickly between the humps", correct: false },
      { answer: "Always keep to the maximum legal speed", correct: false },
      { answer: "Drive slowly at school times only", correct: false }
    ]
  },
  {
    question: "When should you check the engine oil level?",
    answers: [
      { answer: "Before a long journey", correct: true },
      { answer: "When the engine is hot", correct: false },
      { answer: "Every time you drive the car", correct: false },
      { answer: "Only when the oil warning light comes on", correct: false }
    ]
  },
  {
    question: "What's the main cause of brake fade?",
    answers: [
      { answer: "The brakes overheating", correct: true },
      { answer: "Air in the brake fluid", correct: false },
      { answer: "Oil on the brake pads", correct: false },
      { answer: "Worn brake cables", correct: false }
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
    question: "What's the most important reason for having a properly adjusted head restraint?",
    answers: [
      { answer: "To make you more comfortable", correct: false },
      { answer: "To help you avoid neck injury", correct: true },
      { answer: "To help you relax", correct: false },
      { answer: "To help you maintain your driving position", correct: false }
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

// Lógica de funcionamento (idêntica aos anteriores)
function init() { createQuestion(0); }

function createQuestion(i) {
  const oldButtons = answerBox.querySelectorAll('button');
  oldButtons.forEach((btn) => btn.remove());

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
    answerTemplate.addEventListener('click', function() { checkAnswer(this); });
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
  setTimeout(function() {
    if (actualQuestion >= questions.length) { showSuccessMessage(); return; }
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

document.querySelector('#restart').addEventListener('click', function() {
  actualQuestion = 0; points = 0;
  hideOrShowQuizz();
  init();
});

init();