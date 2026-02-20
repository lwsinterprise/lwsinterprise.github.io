// declaração de variáveis
const question = document.querySelector('#question');
const answerBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ['a', 'b', 'c', 'd', 'e'];
let points = 0;
let actualQuestion = 0;

// perguntas extraídas do Teste02.js
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
    question: "Which vehicle will use a blue flashing beacon?",
    answers: [
      { answer: "Motorway maintenance", correct: false },
      { answer: "Bomb disposal", correct: true },
      { answer: "Snow plough", correct: false },
      { answer: "Breakdown recovery", correct: false }
    ]
  },
  {
    question: "What should you do if you're being followed by an ambulance showing flashing blue lights?",
    answers: [
      { answer: "Pull over as soon as it's safe to do so", correct: true },
      { answer: "Accelerate hard to get away from it", correct: false },
      { answer: "Maintain your speed and course", correct: false },
      { answer: "Brake harshly and stop well out into the road", correct: false }
    ]
  },
  {
    question: "What type of emergency vehicle is fitted with a green flashing beacon?",
    answers: [
      { answer: "Fire engine", correct: false },
      { answer: "Road gritter", correct: false },
      { answer: "Ambulance", correct: false },
      { answer: "Doctor's car", correct: true }
    ]
  },
  {
    question: "Who should obey diamond-shaped traffic signs?",
    answers: [
      { answer: "Tram drivers", correct: true },
      { answer: "Bus drivers", correct: false },
      { answer: "Lorry drivers", correct: false },
      { answer: "Taxi drivers", correct: false }
    ]
  },
  {
    question: "On a road where trams operate, which vehicles will be most at risk from the tram rails?",
    answers: [
      { answer: "Cars", correct: false },
      { answer: "Cycles", correct: true },
      { answer: "Buses", correct: false },
      { answer: "Lorries", correct: false }
    ]
  },
  {
    question: "When should you use your vehicle's horn?",
    answers: [
      { answer: "To alert others to your presence", correct: true },
      { answer: "To allow you right of way", correct: false },
      { answer: "To greet other road users", correct: false },
      { answer: "To signal your annoyance", correct: false }
    ]
  },
  {
    question: "You're in a one-way street and want to turn right. Where should you position your vehicle when there are two lanes?",
    answers: [
      { answer: "In the right-hand lane", correct: true },
      { answer: "In the left-hand lane", correct: false },
      { answer: "In either lane, depending on the traffic", correct: false },
      { answer: "Just left of the centre line", correct: false }
    ]
  },
  {
    question: "You wish to turn right ahead. Why should you take up the correct position in good time?",
    answers: [
      { answer: "To allow other drivers to pull out in front of you", correct: false },
      { answer: "To give a better view into the road that you're joining", correct: false },
      { answer: "To help other road users know what you intend to do", correct: true },
      { answer: "To allow drivers to pass you on the right", correct: false }
    ]
  },
  {
    question: "Which type of crossing allows cyclists to ride across with pedestrians?",
    answers: [
      { answer: "Toucan", correct: true },
      { answer: "Puffin", correct: false },
      { answer: "Pelican", correct: false },
      { answer: "Zebra", correct: false }
    ]
  },
  {
    question: "You're travelling at the legal speed limit. What should you do if the vehicle behind approaches quickly, flashing its headlights?",
    answers: [
      { answer: "Accelerate to make a gap behind you", correct: false },
      { answer: "Touch the brakes sharply to show your brake lights", correct: false },
      { answer: "Maintain your speed to prevent the vehicle from overtaking", correct: false },
      { answer: "Allow the vehicle to overtake", correct: true }
    ]
  },
  {
    question: "When should you flash your headlights at other road users?",
    answers: [
      { answer: "When showing that you're giving way", correct: false },
      { answer: "When showing that you're about to turn", correct: false },
      { answer: "When telling them that you have right of way", correct: false },
      { answer: "When letting them know that you're there", correct: true }
    ]
  },
  {
    question: "You're approaching an unmarked crossroads. How should you deal with the junction?",
    answers: [
      { answer: "Accelerate and keep to the middle", correct: false },
      { answer: "Slow down and keep to the right", correct: false },
      { answer: "Accelerate and look to the left", correct: false },
      { answer: "Slow down and look both ways", correct: true }
    ]
  },
  {
    question: "The conditions are good and dry. When should you use the 'two-second rule'?",
    answers: [
      { answer: "Before restarting the engine after it has stalled", correct: false },
      { answer: "When checking your gap from the vehicle in front", correct: true },
      { answer: "Before using the 'Mirrors - Signal - Manoeuvre' routine", correct: false },
      { answer: "When traffic lights change to green", correct: false }
    ]
  },
  {
    question: "Which colour follows the green signal at a puffin crossing?",
    answers: [
      { answer: "Steady red", correct: false },
      { answer: "Flashing amber", correct: false },
      { answer: "Steady amber", correct: true },
      { answer: "Flashing green", correct: false }
    ]
  },
  {
    question: "You're in a line of traffic. What action should you take if the driver behind is following very closely?",
    answers: [
      { answer: "Ignore the driver behind and continue to travel within the speed limit", correct: false },
      { answer: "Slow down, gradually increasing the gap between you and the vehicle in front", correct: true },
      { answer: "Signal left and wave the driver behind to come past", correct: false },
      { answer: "Move over to a position just left of the centre line of the road", correct: false }
    ]
  },
  {
    question: "You're driving on a clear night. Which lights should you use if the national speed limit applies and there's a steady stream of oncoming traffic?",
    answers: [
      { answer: "Full-beam headlights", correct: false },
      { answer: "Sidelights", correct: false },
      { answer: "Dipped headlights", correct: true },
      { answer: "Fog lights", correct: false }
    ]
  },
  {
    question: "You're driving behind a large goods vehicle. What should you do if it signals left but steers to the right?",
    answers: [
      { answer: "Slow down and let the vehicle turn", correct: true },
      { answer: "Drive on, keeping to the left", correct: false },
      { answer: "Overtake on the right of it", correct: false },
      { answer: "Hold your speed and sound your horn", correct: false }
    ]
  },
  {
    question: "You're driving along this road. What should you do if the red car cuts in close in front of you?",
    answers: [
      { answer: "Accelerate to get closer to the red car", correct: false },
      { answer: "Give a long blast on the horn", correct: false },
      { answer: "Drop back to leave the correct separation distance", correct: true },
      { answer: "Flash your headlights several times", correct: false }
    ]
  },
  {
    question: "You're waiting in a traffic queue at night. How can you avoid dazzling drivers behind you? ",
    answers: [
      { answer: "Use the parking brake and release the footbrake", correct: true },
      { answer: "Keep your foot on the footbrake", correct: false },
      { answer: "Balance the clutch with the accelerator", correct: false },
      { answer: "Use the parking brake and footbrake together", correct: false }
    ]
  },
  {
    question: "You're driving in traffic at the speed limit for the road. What should you do if the driver behind is trying to overtake?",
    answers: [
      { answer: "Move closer to the car ahead, so the driver behind has no room to overtake", correct: false },
      { answer: "Wave the driver behind to overtake when it's safe", correct: false },
      { answer: "Keep a steady course and allow the driver behind to overtake", correct: true },
      { answer: "Accelerate to get away from the driver behind", correct: false }
    ]
  },
  {
    question: "What does it mean if the signs at a bus lane show no times of operation?",
    answers: [
      { answer: "The lane isn't in operation", correct: false },
      { answer: "The lane is only in operation at peak times", correct: false },
      { answer: "The lane is in operation 24 hours a day", correct: true },
      { answer: "The lane is only in operation in daylight hours", correct: false }
    ]
  },
  {
    question: "What should you do when a person herding sheep asks you to stop?",
    answers: [
      { answer: "Ignore them as they have no authority", correct: false },
      { answer: "Stop and switch off your engine", correct: true },
      { answer: "Continue on but drive slowly", correct: false },
      { answer: "Try to get past quickly", correct: false }
    ]
  },
  {
    question: "What should you do when you're overtaking a horse and rider?",
    answers: [
      { answer: "Sound your horn as a warning", correct: false },
      { answer: "Go past as quickly as possible", correct: false },
      { answer: "Flash your headlights as a warning", correct: false },
      { answer: "Go past slowly and carefully", correct: true }
    ]
  },
  {
    question: "You're approaching a zebra crossing. What should you do if pedestrians are waiting to cross?",
    answers: [
      { answer: "Give way to older and infirm people only", correct: false },
      { answer: "Slow down and prepare to stop", correct: true },
      { answer: "Use your headlights to indicate they can cross", correct: false },
      { answer: "Wave at them to cross the road", correct: false }
    ]
  },
  {
    question: "What should you do if a vehicle pulls out in front of you at a junction?",
    answers: [
      { answer: "Swerve past it and sound your horn", correct: false },
      { answer: "Flash your headlights and drive up close behind", correct: false },
      { answer: "Slow down and be ready to stop", correct: true },
      { answer: "Accelerate past it immediately", correct: false }
    ]
  },
  {
    question: "You're approaching a red light at a puffin crossing. Pedestrians are on the crossing. When will the red light change?",
    answers: [
      { answer: "When you start to edge forward onto the crossing", correct: false },
      { answer: "When the pedestrians have cleared the crossing", correct: true },
      { answer: "When the pedestrians push the button on the far side of the crossing", correct: false },
      { answer: "When a driver from the opposite direction reaches the crossing", correct: false }
    ]
  },
  {
    question: "Which instrument-panel warning light would show that headlights are on main beam?",
    answers: [
      { answer: "Light A", correct: true },
      { answer: "Light B", correct: false },
      { answer: "Light C", correct: false },
      { answer: "Light D", correct: false }
    ]
  },
  {
    question: "When should you leave a two-second gap between your vehicle and the one in front?",
    answers: [
      { answer: "When it's raining", correct: false },
      { answer: "When it's dry", correct: true },
      { answer: "When it's icy", correct: false },
      { answer: "When it's foggy", correct: false }
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