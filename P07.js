// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas extraídas do Teste07.js
const questions = [
  {
    question: "What should you do as you approach this bridge?",
    answers: [
      { answer: "Move to the right", correct: false },
      { answer: "Slow down", correct: true },
      { answer: "Change gear", correct: false },
      { answer: "Keep to 30 mph", correct: false }
    ]
  },
  {
    question: "Where should you never overtake?",
    answers: [
      { answer: "Just after a bend", correct: false },
      { answer: "In a one-way street", correct: false },
      { answer: "On a 30 mph road", correct: false },
      { answer: "Approaching a junction", correct: true }
    ]
  },
  {
    question: "What should you do if you're being overtaken by a long, heavily laden lorry?",
    answers: [
      { answer: "Speed up", correct: false },
      { answer: "Slow down", correct: true },
      { answer: "Hold your speed", correct: false },
      { answer: "Change direction", correct: false }
    ]
  },
  {
    question: "You're following a large vehicle. Why should you stay a safe distance behind it?",
    answers: [
      { answer: "To give you a better view of the road ahead", correct: true },
      { answer: "To allow you to overtake more quickly", correct: false },
      { answer: "To help the large vehicle driver to see you in their mirrors", correct: false },
      { answer: "To keep your vehicle out of the wind", correct: false }
    ]
  },
  {
    question: "What's the minimum time gap you should leave when following a vehicle on a wet road?",
    answers: [
      { answer: "One second", correct: false },
      { answer: "Two seconds", correct: false },
      { answer: "Three seconds", correct: false },
      { answer: "Four seconds", correct: true }
    ]
  },
  {
    question: "You're driving in a one-way street with two lanes. What should you do if you want to turn right at the end of the road?",
    answers: [
      { answer: "Keep in the left-hand lane", correct: false },
      { answer: "Keep in the right-hand lane", correct: true },
      { answer: "Move to the left-hand lane just before you turn", correct: false },
      { answer: "Wait for a gap in the traffic from the right", correct: false }
    ]
  },
  {
    question: "Why should you use your mirrors when you see a hazard ahead?",
    answers: [
      { answer: "To check what's happening behind you", correct: true },
      { answer: "To see if you've already passed the hazard", correct: false },
      { answer: "To help you accelerate more quickly", correct: false },
      { answer: "To make sure your lights are working", correct: false }
    ]
  },
  {
    question: "When should you use your vehicle's horn?",
    answers: [
      { answer: "To signal your annoyance with other drivers", correct: false },
      { answer: "To warn other road users of your presence", correct: true },
      { answer: "To greet friends in other vehicles", correct: false },
      { answer: "To tell a driver that you're giving way", correct: false }
    ]
  },
  {
    question: "What will happen if you follow this vehicle too closely?",
    answers: [
      { answer: "Your engine will use more fuel", correct: false },
      { answer: "You'll be able to see the road ahead more clearly", correct: false },
      { answer: "Your brakes will wear out more quickly", correct: false },
      { answer: "Your view ahead will be reduced", correct: true }
    ]
  },
  {
    question: "When may you use a hand-held mobile phone while driving?",
    answers: [
      { answer: "When you're waiting at traffic lights", correct: false },
      { answer: "When you're parked safely", correct: true },
      { answer: "When you're driving on a quiet road", correct: false },
      { answer: "When you're driving slowly in a traffic queue", correct: false }
    ]
  },
  {
    question: "What's likely to happen if you use a hands-free phone while you're driving?",
    answers: [
      { answer: "It will improve your concentration", correct: false },
      { answer: "It will divert your attention away from the road", correct: true },
      { answer: "It will help you to drive more safely", correct: false },
      { answer: "It will make you more aware of hazards", correct: false }
    ]
  },
  {
    question: "Why is it important to adjust your seat correctly before starting a journey?",
    answers: [
      { answer: "To make sure you can reach all the controls comfortably", correct: true },
      { answer: "To prevent your clothes from getting creased", correct: false },
      { answer: "To allow you to see the radio display more easily", correct: false },
      { answer: "To help you stay awake on long journeys", correct: false }
    ]
  },
  {
    question: "How should a head restraint be adjusted to help prevent neck injury?",
    answers: [
      { answer: "As low as possible", correct: false },
      { answer: "As high as possible", correct: false },
      { answer: "So that the top is at least as high as your eyes or the top of your ears", correct: true },
      { answer: "So that it's tilted as far forward as possible", correct: false }
    ]
  },
  {
    question: "What's the purpose of a catalytic converter?",
    answers: [
      { answer: "To reduce fuel consumption", correct: false },
      { answer: "To reduce the amount of harmful gases in the exhaust", correct: true },
      { answer: "To increase the power of the engine", correct: false },
      { answer: "To reduce the noise from the exhaust", correct: false }
    ]
  },
  {
    question: "When should you check the tyre pressures on your vehicle?",
    answers: [
      { answer: "After a long journey", correct: false },
      { answer: "When the tyres are cold", correct: true },
      { answer: "When the tyres are warm", correct: false },
      { answer: "Only when the tyres look flat", correct: false }
    ]
  },
  {
    question: "What's the effect of having a roof rack on your car?",
    answers: [
      { answer: "It will improve your fuel consumption", correct: false },
      { answer: "It will increase your fuel consumption", correct: true },
      { answer: "It will make your car more stable in high winds", correct: false },
      { answer: "It will reduce the wind noise in your car", correct: false }
    ]
  },
  {
    question: "What's the main benefit of having anti-lock brakes (ABS)?",
    answers: [
      { answer: "They allow you to stop in a shorter distance", correct: false },
      { answer: "They allow you to steer while braking hard", correct: true },
      { answer: "They prevent your brakes from fading", correct: false },
      { answer: "They make your tyres last longer", correct: false }
    ]
  },
  {
    question: "What will happen if your vehicle's wheels are unbalanced?",
    answers: [
      { answer: "The steering will vibrate", correct: true },
      { answer: "The brakes will fail", correct: false },
      { answer: "The tyres will wear evenly", correct: false },
      { answer: "The engine will overheat", correct: false }
    ]
  },
  {
    question: "How will a heavy load on your roof rack affect your vehicle?",
    answers: [
      { answer: "It will improve the road holding", correct: false },
      { answer: "It will reduce the fuel consumption", correct: false },
      { answer: "It will make the vehicle less stable", correct: true },
      { answer: "It will make the steering feel lighter", correct: false }
    ]
  },
  {
    question: "When should you check the oil level in your vehicle's engine?",
    answers: [
      { answer: "Before every long journey", correct: true },
      { answer: "Only when the engine is hot", correct: false },
      { answer: "When the oil warning light comes on", correct: false },
      { answer: "Every time you fill up with fuel", correct: false }
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
    question: "What's most likely to increase your vehicle's fuel consumption?",
    answers: [
      { answer: "Driving at high speed", correct: true },
      { answer: "Driving in a high gear", correct: false },
      { answer: "Checking your tyre pressures regularly", correct: false },
      { answer: "Maintaining a steady speed", correct: false }
    ]
  },
  {
    question: "What should you do if your vehicle's battery needs topping up with distilled water?",
    answers: [
      { answer: "Fill it up to the top of the battery case", correct: false },
      { answer: "Fill it until the plates are just covered", correct: true },
      { answer: "Fill it until it's about half full", correct: false },
      { answer: "Only fill it when the engine is running", correct: false }
    ]
  },
  {
    question: "What's the most likely cause of brake fade?",
    answers: [
      { answer: "Brakes getting too hot", correct: true },
      { answer: "Air in the brake fluid", correct: false },
      { answer: "Worn brake pads", correct: false },
      { answer: "Oil on the brake drums", correct: false }
    ]
  },
  {
    question: "How should you check the condition of your vehicle's tyres?",
    answers: [
      { answer: "By checking the tyre pressure every six months", correct: false },
      { answer: "By checking the tread depth and for any cuts or bulges", correct: true },
      { answer: "By checking the tyres when they're hot", correct: false },
      { answer: "By asking a friend to look at them", correct: false }
    ]
  },
  {
    question: "What's the most likely cause of excessive tyre wear?",
    answers: [
      { answer: "Faulty suspension", correct: true },
      { answer: "Driving at low speeds", correct: false },
      { answer: "Using the wrong fuel", correct: false },
      { answer: "Frequent gear changes", correct: false }
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
    question: "Why is it important to wear suitable shoes when you're driving?",
    answers: [
      { answer: "To prevent your feet from getting cold", correct: false },
      { answer: "To ensure you have proper control of the pedals", correct: true },
      { answer: "To make sure you're comfortable on long journeys", correct: false },
      { answer: "To enable you to walk for assistance if you break down", correct: false }
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
    question: "What's the purpose of an MOT test?",
    answers: [
      { answer: "To check the mechanical condition of the vehicle", correct: true },
      { answer: "To check the driver's ability", correct: false },
      { answer: "To ensure the vehicle is insured", correct: false },
      { answer: "To check the value of the vehicle", correct: false }
    ]
  }
];

// Funções do Quiz
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